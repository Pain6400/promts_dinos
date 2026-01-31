# TikTok MCP Server

Este es un servidor MCP (Model Context Protocol) local diseñado para analizar videos y perfiles de TikTok.

## Instalación
Este servidor fue creado automáticamente por Antigravity. Las dependencias ya están instaladas.

## Uso en Antigravity
Para conectar este servidor a Antigravity, ve a la configuración de "MCP Servers" y añade uno nuevo con los siguientes datos:

- **Type**: Stdio (o comando local)
- **Command**: `node`
- **Arguments**: `c:\Users\Kevin\Documents\Dinos\promts_dinos\tiktok-mcp-server\dist\index.js`

## Funcionalidades
- `analyze_tiktok_video(url)`: Extrae descripción, likes, comentarios y shares de un video.
- `analyze_tiktok_profile(username)`: Extrae datos del perfil y los últimos 5 videos.

## Nota sobre Bloqueos
TikTok tiene protecciones fuertes contra bots. Este servidor usa Puppeteer para simular un navegador real, pero es posible que si haces muchas peticiones seguidas, TikTok te pida un Captcha y el servidor falle temporalmente.
