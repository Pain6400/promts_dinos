---
description: Genera un guion y prompts para un carrusel de imágenes en TikTok sobre dinosaurios, asegurando originalidad usando una base de datos Excel.
---

# Generación de Carrusel TikTok de Dinosaurios

Este workflow te guía para crear contenido de carrusel (Solo imágenes/texto) para TikTok, verificando que el tema no se haya usado antes.

## Paso 1: Inicializar y Verificar Base de Datos
Primero, aseguramos que la hoja de registro exista y leemos las ideas pasadas.

1. Verifica las ideas existentes:
```bash
node .agent/skills/gestor-ideas/manage_ideas.js list "c:\Users\Kevin Mejia\Documents\GitHub\promts_dinos\plantilla_dinosaurios_100.xlsx"
```

## Paso 2: Generación de Ideas
Basado en la lista anterior (si hay), genera 5 nuevas ideas creativas para carruseles de dinosaurios.
Considera temas como:
- Tipos específicos (voladores, marinos, acorazados).
- Comparaciones (Película vs Realidad).
- Curiosidades (¿Dinosaurios con plumas? ¿Dinos "roedores"?).
- Top 5 o Top 10.

**Instrucción para el Agente:**
- Analiza la salida JSON del paso 1.
- Propón 5 ideas nuevas que NO estén en esa lista.
- Presenta las opciones al usuario para que elija una.

## Paso 3: Desarrollo del Contenido
Una vez que el usuario elija una idea:

1. **Estructura del Carrusel (Total 6 Diapositivas):**
   - **Diapositiva 1 (Gancho Visual):** Imagen de alto impacto, título polémico o pregunta irresistible.
   - **Diapositivas 2-6 (Los 5 Dinos):** 5 ejemplos concretos (Top 5). Cada uno con su imagen y dato clave.
   - **Diapositiva Final (CTA - Opcional en voz/texto):** Llamado a la acción integrado en la última diapositiva o en la descripción.

2. **Generación de Prompts:**
   - Para cada diapositiva, genera un prompt detallado para generar la imagen (puedes usar la skill `experto-dinosaurios` si necesitas precisión científica).
   - Genera el texto que irá superpuesto en la imagen o en la descripción.

## Paso 4: Registrar la Idea
Guarda la idea seleccionada en la base de datos para futuras referencias.

```bash
node .agent/skills/gestor-ideas/manage_ideas.js add "c:\Users\Kevin Mejia\Documents\GitHub\promts_dinos\plantilla_dinosaurios_100.xlsx" "<IDEA_SELECCIONADA>"
```
*(Reemplaza <IDEA_SELECCIONADA> con el título de la idea que el usuario aprobó)*

## Paso 5: Entrega Final
Presenta el guion completo del carrusel en formato Markdown tabla para facilitar su uso.
| # Slide (Nombre Dino) | Texto en Imagen | Descripción/Voz en Off (Opcional) | Prompt de Imagen |
|---------|-----------------|-----------------------------------|------------------|
| 1 (Dino X) | ...             | ...                               | ...              |
