---
description: Genera imágenes para un carrusel de TikTok basado en una idea específica, asegurando precisión científica y calidad visual.
---

# Generación de Imágenes para Carrusel de TikTok

Este workflow toma una idea o lista de diapositivas proporcionada por el usuario y genera las imágenes correspondientes utilizando la herramienta de generación de imágenes y los conocimientos de la skill `experto-dinosaurios`.

## Paso 1: Confirmar Detalles del Carrusel
Solicita al usuario la idea central o el guion de las diapositivas si no lo ha proporcionado aún.
- Si el input es solo un tema (ej: "T-Rex"), elabora rápidamente 3-5 escenas clave.
- Confirma si prefiere estilo **Fotorealista** o **Ilustración Artística**.

## Paso 2: Diseño de Prompts (Modo Experto)
Para cada diapositiva, redacta un prompt de imagen optimizado.
**Instrucciones críticas (basado en `experto-dinosaurios`):**
1.  **Encuadre de Cuerpo Completo:** SIEMPRE incluye "Full body shot", "Wide angle", o "Distance view" para asegurar que el dinosaurio se vea completo de cabeza a cola. Evita primeros planos extremos a menos que sea explícitamente solicitado.
2.  **Anatomía Correcta:** Verifica si el dinosaurio tenía plumas, postura correcta de las manos (palmas hacia adentro, no abajo), etc.
3.  **Entorno:** Flora y fauna coherente con el periodo (ej: Cretácico, sin pasto).
4.  **Estilo Visual:** Usa palabras clave como "National Geographic photography", "cinematic lighting", "highly detailed", "8k", "dramatic angle".

*Ejemplo de estructura:*
`Full body shot of [Dinosaurio] in [Acción/Entorno]. [Detalles anatómicos]. [Iluminación/Estilo]. Aspect ratio 9:16 (vertical) for TikTok.`

## Paso 3: Generación de Imágenes
Utiliza la herramienta `generate_image` para crear cada una de las imágenes.
*Nota: Genera una por una o en lotes pequeños para no saturar.*

- **ImageName:** `carrusel_[tema]_slide_[numero]`
- **Prompt:** El texto generado en el Paso 2.

## Paso 4: Entrega Estructurada y Revisión
Presenta el resultado final en un formato organizado que incluya texto para el post y detalles de las imágenes.

**Formato de Salida Obligatorio:**

### **Título del Carrusel:**
*(Un título atractivo y viral)*

### **Descripción General:**
*(Texto para la descripción del video de TikTok, incluyendo gancho y llamado a la acción)*

### **Hashtags:**
*(Lista de 5-10 hashtags relevantes y virales)*

### **Detalle de las Imágenes:**
*(Para cada imagen generada:)*
- **Slide X:** [Imagen Generada]
- **Descripción de la Imagen:** *(Explicación breve de lo que se ve, datos curiosos o el texto que debería ir en la imagen)*

- Si alguna imagen tiene errores anatómicos graves o "alucinaciones", ofrece regenerarla ajustando el prompt.
