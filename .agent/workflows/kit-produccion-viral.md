---
description: Genera un Kit de Producción Viral completo para TikTok sobre un dinosaurio o tema específico, integrando estrategia, datos científicos y edición.
---

# Workflow: Kit de Producción Viral

Este flujo de trabajo orquesta múltiples habilidades para crear un producto final listo para grabar y editar.

**Parámetro requerido**: `[TEMA]` (Nombre del dinosaurio o tema a tratar).

## Pasos de Ejecución

1.  **Investigación Científica y Curiosidades (Habilidad: `experto-dinosaurios`)**
    *   Lee la habilidad `experto-dinosaurios` para entender el enfoque.
    *   Investiga a fondo el `[TEMA]`.
    *   Busca datos curiosos, mitos comunes o hechos "shocking" que sirvan de gancho.
    *   Asegura la precisión paleontológica de la información.

2.  **Estructuración del Guion Viral (Habilidad: `experto-video-viral`)**
    *   Lee la habilidad `experto-video-viral`.
    *   Toma los datos del paso 1.
    *   Desarrolla un guion usando la **Estructura A/B/C** (Gancho Atómico, Desarrollo en Montaña Rusa, Cierre de Interacción).
    *   Define claramente el gancho de los primeros 3 segundos.

3.  **Dirección Técnica y Edición (Habilidad: `experto-capcut`)**
    *   Lee la habilidad `experto-capcut`.
    *   Añade una capa de instrucciones técnicas al guion generado en el paso 2.
    *   Especifica qué efectos de CapCut, transiciones (zoom, cortes) y tipos de audio usar en cada segmento.
    *   Crea los prompts visuales necesarios si se requiere generar imágenes.

4.  **Generación del Entregable Final**
    *   Consolida todo en un único documento con el formato "Kit de Producción".
    *   **IMPORTANTE: Estructura del Output (Sigue este orden exacto):**
        1.  **Concepto Viral**: La idea central.
        2.  **BLOQUE 1: GUION DE NARRACIÓN (SOLO TEXTO)**:
            *   Un bloque de texto plano con **SOLO lo que el narrador debe decir**.
            *   **PROHIBIDO INCLUIR**: "Narrador:", "00:00", "Escena 1", o cualquier instrucción dentro de este texto.
            *   Debe ser texto puro separado por párrafos para copiar y pegar directamente.
        3.  **BLOQUE 2: GUION TÉCNICO DETALLADO (Para el editor)**:
            *   Esta tabla debe incluir OBLIGATORIAMENTE:
                *   **PROMPT DE IMAGEN IA**: Para generar la estática.
                *   **PROMPT ANIMACIÓN**: Para dar movimiento (Grok).
            *   Columnas: Tiempo | Visual | PROMPT IMAGEN | PROMPT ANIMACIÓN | Audio | Texto Overlay.
        4.  **Recomendaciones de Audio**: Música y efectos.
        5.  **Recomendaciones de Audio**: Música y efectos.

## Invocación
Cuando el usuario pida "Genera un Kit de Producción Viral sobre [TEMA]", sigue estos pasos rigurosamente.
