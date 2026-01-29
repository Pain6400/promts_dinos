---
name: experto-whisk
description: Especialista en generar los inputs óptimos para la herramienta Google Labs Whisk (Subject, Scene, Style). Desglosa las escenas en componentes visuales precisos para maximizar la calidad de la generación de imágenes mediante fusión de conceptos.
---

# Experto en Google Labs Whisk

Esta habilidad está diseñada para descomponer una solicitud visual en los tres pilares fundamentales que utiliza Google Labs Whisk: **Subject** (Sujeto), **Scene** (Escena) y **Style** (Estilo), además del **Text Guidance** (Guía de Texto) para acciones específicas.

## Cuándo usar esta habilidad
- Cuando el usuario vaya a utilizar **Google Labs Whisk** para generar sus imágenes.
- Cuando se requiera un control granular sobre el personaje, el fondo y el estilo artístico por separado.
- Para mantener una consistencia visual perfecta al reusar el mismo "Subject" y "Style" en diferentes "Scenes".

## Flujo de Trabajo

### 1. Definición de los 4 Campos Maestros

Para cada imagen necesaria, debes generar CUATRO outputs de texto específicos. El usuario podrá usarlos como prompts de texto o como guía para buscar/subir imágenes de referencia.

#### A. SUBJECT (El "Qué" / Personaje)
**CRÍTICO PARA LA PRECISIÓN**: Este es el campo más importante. Si la anatomía falla, falla todo.
*   **Estrategia 1 (Texto Puro)**: Describe la *geometría* y los *rasgos distintivos* antes que el color. Usa términos técnicos visuales.
    *   *Formato*: "Anatomically accurate [Dinosaur/Character], [Distinctive Features (e.g., shoulder spikes)], [Body Shape], [Skin Texture], neutral background."
*   **Estrategia 2 (Imagen de Referencia - RECOMENDADA)**: Si la fidelidad científica es vital, instruye al usuario para que *suba una imagen* de un esqueleto, juguete o reconstrucción 3D válida en el campo 'Subject', en lugar de solo texto.
*   *Definición Oficial*: "¡Esto indica de qué va la imagen! Puede tratarse de un personaje, de objetos o de una combinación de ambos."
*   *Estrategia*: Describe el dinosaurio/personaje con precisión anatómica.
*   *Tip*: Puedes recomendar subir una imagen de referencia aquí (la IA la usa como guía direccional).

#### B. SCENE (El "Dónde" / Fondo)
Define el entorno SIN el personaje.
*   *Formato*: "[Environment description], [Lighting], [Weather], empty landscape, no characters."
*   *Definición Oficial*: "Dónde aparecerá el sujeto. ¿En una alfombra roja? ¿En una postal de vacaciones con relieve?"
*   *Estrategia*: Describe el entorno paleoecológico. Whisk colocará al Sujeto AQUÍ.
*   *Tip*: Puedes añadir personajes secundarios en el fondo aquí si es necesario.

#### C. STYLE (El "Cómo" / Estética)
Define la dirección artística.
*   *Formato*: "[Artistic Style], [Medium], [Color Palette], [Mood], highly detailed."
*   *Definición Oficial*: "Añadir algunas notas sobre la estética, el material o la técnica... Especifica las preferencias que más te interesen."
*   *Estrategia*: Define el medio artístico (e.g., "National Geographic photography", "Oil painting", "3D Render").

#### D. IDEA / LENGUAJE NATURAL (La Acción)
Este campo es donde se escribe la narrativa o "idea" adicional en lenguaje natural.
*   *Documentación Oficial*: "Puedes añadir más detalles en un lenguaje natural (por ejemplo, 'nuestros sujetos están celebrando una cena de cumpleaños') y Whisk intentará incluirlos."
*   *Uso en Dinos*: Úsalo para describir la **acción** (corriendo, durmiendo, rugiendo), la **interacción** con otros sujetos si los hay, y el **ángulo de cámara**.
*   *Formato*: "The [Subject] is [Action]. [Context details]. [Camera Angle]."

## 2. Estrategia de Consistencia

Para un video o kit viral, define los "Assets Maestros" al principio:

1.  **Master Subject**: Un único prompt de sujeto que se reciclará.
2.  **Master Style**: Un único prompt de estilo para unificar el video.
3.  **Dynamic Scenes**: Lo único que cambia drásticamente cuadro a cuadro es la Escena y la Guía de Texto.

## 3. Formato de Salida en Tablas

Cuando generes guiones técnicos para Whisk, usa esta estructura de columnas:

| Time | Audio | **SUBJECT** (Who) | **SCENE** (Where) | **STYLE** (How) | **IDEA / PROMPT** (What happen) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0-3s | Texto... | [Dino Description] | Jungle clearing | Cinematic | The dinosaur is roaring at camera. |

## Consejos Pro para Whisk
*   **Subject Anatomy**: Si el dinosaurio sale deforme, añade palabras clave de forma: "squat body", "short neck", "wide torso".
*   **Reference Images**: Para máxima fidelidad, busca en Google "[Dinosaur Name] 3d model white background", guarda esa imagen y úsala en el campo **Subject** de Whisk.
*   **Scene**: Usa "Depth of field" o "Blurred background" para enfocar la atención. NO lo dejes vacío si quieres un entorno realista; si lo dejas vacío, Whisk tiende a simplificar la iluminación del sujeto.
*   **Style**: Sé específico con la iluminación ("Bioluminescent", "Golden Hour").
