import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import puppeteer from "puppeteer";
// Create an MCP server
const server = new McpServer({
    name: "tiktok-mcp-server",
    version: "1.0.0",
});
// Helper function to scrape TikTok video
async function scrapeTikTokVideo(url) {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-blink-features=AutomationControlled'],
    });
    const page = await browser.newPage();
    // Set User Agent to avoid immediate blocking
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
        // Try to get video description/caption
        const description = await page.evaluate(() => {
            const descElement = document.querySelector('div[data-e2e="video-desc"]');
            return descElement ? descElement.textContent : 'No description found';
        });
        // Try to get likes/comments
        const stats = await page.evaluate(() => {
            const likeElement = document.querySelector('strong[data-e2e="like-count"]');
            const commentElement = document.querySelector('strong[data-e2e="comment-count"]');
            const shareElement = document.querySelector('strong[data-e2e="share-count"]');
            return {
                likes: likeElement ? likeElement.textContent : '0',
                comments: commentElement ? commentElement.textContent : '0',
                shares: shareElement ? shareElement.textContent : '0'
            };
        });
        return {
            url,
            description,
            stats,
            scraped_at: new Date().toISOString()
        };
    }
    catch (error) {
        if (error instanceof Error) {
            return { error: error.message };
        }
        return { error: 'Unknown error during scraping' };
    }
    finally {
        await browser.close();
    }
}
// Helper function to scrape TikTok Profile (Basic)
async function scrapeTikTokProfile(username) {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    const url = `https://www.tiktok.com/@${username.replace('@', '')}`;
    try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
        // Get Bio and follower count
        const profileData = await page.evaluate(() => {
            const title = document.querySelector('h2[data-e2e="user-title"]')?.textContent;
            const subtitle = document.querySelector('h1[data-e2e="user-subtitle"]')?.textContent;
            const followers = document.querySelector('strong[data-e2e="followers-count"]')?.textContent;
            const likes = document.querySelector('strong[data-e2e="likes-count"]')?.textContent;
            const bio = document.querySelector('h2[data-e2e="user-bio"]')?.textContent;
            return {
                username: subtitle,
                displayName: title,
                followers,
                totalLikes: likes,
                bio
            };
        });
        // Get recent videos (first 5)
        const recentVideos = await page.evaluate(() => {
            const videos = Array.from(document.querySelectorAll('div[data-e2e="user-post-item"]')).slice(0, 5);
            return videos.map(v => {
                const link = v.querySelector('a')?.href;
                const desc = v.querySelector('a')?.title; // Often the title attribute holds description
                return { link, desc };
            });
        });
        return {
            profile: profileData,
            recentVideos,
            url
        };
    }
    catch (error) {
        if (error instanceof Error) {
            return { error: error.message };
        }
        return { error: 'Unknown error' };
    }
    finally {
        await browser.close();
    }
}
// Register tools
server.tool("analyze_tiktok_video", "Analyzes a specific TikTok video using Puppeteer to scrape public data.", {
    url: z.string().url().describe("The URL of the TikTok video to analyze"),
}, async ({ url }) => {
    const data = await scrapeTikTokVideo(url);
    return {
        content: [
            {
                type: "text",
                text: JSON.stringify(data, null, 2),
            },
        ],
    };
});
server.tool("analyze_tiktok_profile", "Analyzes a TikTok profile to get stats and recent videos.", {
    username: z.string().describe("The username of the TikTok profile (with or without @)"),
}, async ({ username }) => {
    const data = await scrapeTikTokProfile(username);
    return {
        content: [
            {
                type: "text",
                text: JSON.stringify(data, null, 2),
            },
        ],
    };
});
// Start the server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("TikTok MCP Server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
