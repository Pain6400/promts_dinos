---
description: Workflow optimizado para analizar el perfil @dinovidaia, extraer métricas y generar estrategia de contenido usando skills.
---

1. **Obtener Datos del Perfil**
   Intenta primero usar la herramienta nativa del MCP:
   - Usa `tiktok-server.analyze_tiktok_profile` con el usuario `dinovidaia`.
   
   *Si la lista de videos recientes aparece vacía (bloqueo de bot), ejecuta el script de respaldo:*
   - Ejecuta: `npx ts-node c:\Users\Kevin\Documents\Dinos\promts_dinos\tiktok-mcp-server\src\test_run.ts`
   - Lee el output del comando para obtener los datos.

2. **Cargar Skill de Análisis**
   - Usa `view_file` para leer `.agent/skills/analista-tendencias-tiktok/SKILL.md`.

3. **Procesar Métricas y Estrategia**
   Con los datos obtenidos (Likes totales, Seguidores, Vistas de videos recientes), actúa como el **Analista de Tendencias** y:
   - **Calcula el Engagement Rate**: (Likes Totales / Seguidores) o promedio de likes por video.
   - **Diagnóstico de Bio**: Analiza si la bio cumple la promesa de valor (según la skill).
   - **Análisis de Contenido**: Si hay videos visibles, identifica patrones en los que tienen más vistas vs los que tienen menos.

4. **Generar Plan de Acción**
   Genera un reporte final que incluya:
   - 🚦 **Semáforo del Perfil**: Verde/Amarillo/Rojo en Bio, Foto y Contenido.
   - 🧪 **Recomendación Científica**: Un consejo de mejora basado en datos.
   - 🎬 **Siguiente Paso**: Una idea concreta de video (Hook + Valor) para subir inmediatamente.
