
import puppeteer from 'puppeteer';

async function scrapeTikTokProfile(username: string) {
    console.log(`Starting scrape for ${username}...`);
    const browser = await puppeteer.launch({
        headless: true, // Headless but with better args
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-blink-features=AutomationControlled', '--window-size=1920,1080'],
    });
    const page = await browser.newPage();

    // Masking the bot better
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    await page.setViewport({ width: 1920, height: 1080 });

    const url = `https://www.tiktok.com/@${username.replace('@', '')}`;
    console.log(`Navigating to ${url}...`);

    try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        // Intentional delay to mimic human behavior
        await new Promise(r => setTimeout(r, 5000));

        // Scroll down a bit to trigger loading
        await page.evaluate(() => {
            window.scrollBy(0, 500);
        });
        await new Promise(r => setTimeout(r, 2000));

        console.log('Extracting profile data...');
        const profileData = await page.evaluate(() => {
            // Selectors might vary, trying multiple common strategies
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

        console.log('Taking screenshot for debugging...');
        await page.screenshot({ path: 'tiktok_debug.png' });

        console.log('Extracting recent videos...');
        const recentVideos = await page.evaluate(() => {
            // Try to find video items
            const videos = Array.from(document.querySelectorAll('div[data-e2e="user-post-item"]')).slice(0, 5);
            return videos.map(v => {
                const linkElement = v.querySelector('a');
                const link = linkElement?.href;
                // Description is often in the title attribute of the link or an image alt
                const desc = linkElement?.title || v.querySelector('img')?.alt || 'No description';
                const views = v.querySelector('strong[data-e2e="video-views"]')?.textContent || '0';
                return { link, desc, views };
            });
        });

        return {
            profile: profileData,
            recentVideos,
            videoCount: recentVideos.length,
            url
        };

    } catch (error) {
        console.error("Error during scraping:", error);
        return { error: 'Scan failed' };
    } finally {
        await browser.close();
    }
}

scrapeTikTokProfile('dinovidaia').then(data => {
    console.log("FINAL_OUTPUT_START");
    console.log(JSON.stringify(data, null, 2));
    console.log("FINAL_OUTPUT_END");
});
