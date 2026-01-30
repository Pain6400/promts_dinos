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

3.  **Dirección Técnica y Edición (Habilidades: `experto-whisk` y `experto-capcut`)**
    *   Lee la habilidad `experto-whisk`.
    *   Añade una capa de instrucciones técnicas al guion generado en el paso 2.
    *   **CRUCIAL**: Debes generar los prompts visuales siguiendo la "Regla de los 4 Prompts" de Whisk: Subject (Sujeto), Scene (Escena), Style (Estilo) y Prompt Principal (La Mezcla).

4.  **Estrategia de Publicación (Habilidad: `social-content`)**
    *   Lee la habilidad `social-content`.
    *   Redacta una descripción atractiva para TikTok que incluya un "hook" escrito (primera línea).
    *   Genera una selección estratégica de hashtags (mezcla de alta competencia y nicho específico).

## 5. Generación del Entregable Final
    *   Consolida todo en un único documento con el formato "Kit de Producción".
    *   **IMPORTANTE: Estructura del Output (Sigue este orden exacto):**
        1.  **Concepto Viral**: La idea central.
        2.  **ADN DEL PERSONAJE (PROMPT MAESTRO - MODO VIVO)**:
            *   **Definición Visual Única**: Un prompt detallado que describe *solo* al dinosaurio vivo (colores, cicatrices, plumas, *Negative Prompt* cruciales como "no tail club").
            *   **Instrucción**: "Usa este bloque al inicio de CADA prompt de escena VIVA para mantener la consistencia".
        3.  **BLOQUE 1: GUION DE NARRACIÓN (SOLO TEXTO)**:
            *   Un bloque de texto plano con **SOLO lo que el narrador debe decir**.
            *   **PROHIBIDO INCLUIR**: "Narrador:", "00:00", "Escena 1", o cualquier instrucción dentro de este texto.
            *   Debe ser texto puro separado por párrafos para copiar y pegar directamente.
        4.  **BLOQUE 2: GUION TÉCNICO DETALLADO (Formato Google Labs Whisk)**:
            *   Esta tabla está optimizada para la herramienta Whisk.
            *   **Instrucción de uso**: "Copia y pega cada columna en su campo correspondiente en Whisk".
            *   **Columnas OBLIGATORIAS**:
                *   `Time` | `Audio`
                *   `SUBJECT (Sujeto)`: El prompt anatómico del personaje.
                *   `SCENE (Escena)`: Descripción del entorno (fondo).
                *   `STYLE (Estilo)`: Estilo artístico.
                *   `PROMPT PRINCIPAL (La Mezcla)`: Acción específica y narrativa de la toma.
                *   `OVERLAY`: Texto en pantalla.
        5.  **Recomendaciones de Audio**: Música y efectos.
        6.  **Metadata para Redes (Habilidad: `social-content`)**:
            *   **Descripción TikTok**: Texto optimizado para la descripción del video.
            *   **Hashtags**: Lista de tags sugeridos.
        7.  **Fuentes Científicas**: Un breve listado de los papers o artículos de donde se extrajo la información clave.

## Invocación
Cuando el usuario pida "Genera un Kit de Producción Viral sobre [TEMA]", sigue estos pasos rigurosamente.
