---
name: experto-whisk
description: Especialista en generar los inputs óptimos para la herramienta Google Labs Whisk. Genera siempre 4 prompts separados: Subject, Scene, Style y el Prompt Principal (que mezcla todo).
---

# Experto en Google Labs Whisk

Esta habilidad está diseñada para descomponer una solicitud visual en los **4 componentes obligatorios** que requiere la herramienta Whisk.

## La Regla de los 4 Prompts

Para CADA imagen que generes, debes entregar siempre estos 4 campos por separado. Whisk funciona mezclando estas "capas" de información.

### 1. SUBJECT (El Sujeto / Personaje)
*   **¿Qué es?**: Indica de qué va la imagen (personaje, objeto). Puede ser un PROMPT DE TEXTO o una IMAGEN DE REFERENCIA.
*   **Tu objetivo**: Definir la anatomía y apariencia física del personaje. Si el flujo incluye `generate_image`, aquí iría la imagen generada.
*   **Formato**: Descripción anatómica precisa O Referencia a Imagen.
*   *Ejemplo*: "Anatomically accurate Archaeopteryx..." O "[IMAGEN GENERADA: dino_ref.png]"

### 2. SCENE (La Escena / Fondo)
*   **¿Qué es?**: Dónde aparecerá el sujeto.
*   **Tu objetivo**: Definir el entorno, iluminación y clima SIN el personaje.
*   **Formato**: Descripción de paisaje y atmósfera.
*   *Ejemplo*: "Jurassic Solnhofen lagoon, shallow tropical water, ancient cycads, bright sunny day, bokeh background."

### 3. STYLE (El Estilo / Look)
*   **¿Qué es?**: La estética, material o técnica.
*   **Tu objetivo**: Definir el filtro artístico.
*   **Formato**: Estilo artístico + medio.
*   *Ejemplo (Jurásico)*: "Jurassic World movie style, cinematic lighting, hyperrealistic, 8k, detailed texture."

### 4. PROMPT PRINCIPAL (La Mezcla / Acción)
*   **¿Qué es?**: El cuadro de texto principal donde el usuario escribe lo que sucede.
*   **Tu objetivo**: Describir la **ACCIÓN** y cómo interactúan las partes. Este es el prompt que "mezcla todo".
*   **Formato**: `[Sujeto] está [Haciendo algo] en [Contexto].`
*   *Ejemplo*: "A black Archaeopteryx is clumsy flapping its wings trying to take off from the water, water splashing, dynamic motion blur."

## Flujo de Trabajo

1.  **Define los Assets Maestros**: Subject y Style suelen ser constantes para todo un video.
2.  **Define las Variables**: Scene y Prompt Principal cambian toma a toma.
3.  **Formato de Salida**: Usa siempre una tabla o lista clara que separe estos 4 elementos.

## Formato de Salida (Tabla Obligatoria)

Cuando generes guiones, usa esta estructura exacta (Nota: El Estilo se define globalmente si así lo pide el workflow):

**Estilo Global**: [Prompt de Estilo]

| Time | Audio | **SCENE** (Dónde) | **PROMPT PRINCIPAL** (La Acción/Mezcla) | **PROMPT DE ANIMACIÓN** (Movimiento) |
| :--- | :--- | :--- | :--- | :--- |
| 0-3s | [SFX] | [Descripción del Fondo] | [Descripción de la Acción Específica] | [Dinosaurio ruge/camina hacia cámara...] |
