---
description: Genera prompts optimizados para carruseles de TikTok, integrando precisión científica y estructura para herramientas como Whisk.
---

# Generación de Prompts para Carrusel de TikTok (Whisk Edition)

Este workflow toma una idea o lista de diapositivas y genera los **prompts detallados** necesarios para crear las imágenes, utilizando la estructura de la skill `experto-whisk` y el rigor científico de `experto-dinosaurios`.

NO generes imágenes directamente. Tu objetivo es entregar los "Ingredientes" (Prompts) perfectos.

## Paso 1: Confirmar Detalles del Carrusel
Solicita al usuario la idea central o el guion de las diapositivas.
- Si es solo un tema, elabora 3-5 escenas clave.
- Confirma estilo: **Fotorealista** o **Ilustración Artística**.

## Paso 2: Investigación Científica (Skill `experto-dinosaurios`)
Antes de escribir cualquier prompt, utiliza los principios de la skill `experto-dinosaurios` para verificar:
- **Fuente Primaria:** Consulta siempre `Dinopedia` (Fandom) o papers recientes usando el navegador.
- **Anatomía Crítica:** **VERIFICA SIEMPRE SI TENÍA LABIOS** (Tejido extra-oral). La mayoría de terópodos NO mostraban los dientes con la boca cerrada.
- **Entorno:** Fauna y flora correcta del periodo geológico.
- **Evita Mitos:** Descarta ideas obsoletas (ej. T-Rex erguido como canguro, "shrink-wrapped" faces). **INVESTIGACIÓN OBLIGATORIA**: Tu máxima prioridad es la fidelidad científica. No crees "monstruos de película" (estilo Jurassic Park) a menos que sea una comparación explícita. El dinosaurio debe verse como era en la vida real.

## Paso 3: Estructuración Whisk (Skill `experto-whisk`)
Para cada diapositiva, genera los 4 campos obligatorios definidos en la skill `experto-whisk`.
Asegúrate de que los prompts estén en **INGLÉS** para máxima compatibilidad con modelos de imagen.

1.  **SUBJECT (El Personaje):** Descripción anatómica detallada y aislada. Ejemplo: *"Anatomically accurate Microraptor, iridescent black feathers, four wings layout..."*
2.  **SCENE (El Fondo):** Descripción del entorno SIN el dinosaurio. Iluminación, clima, vegetación. Ejemplo: *"Ancient Cretaceous forest, giant ferns, misty morning light, bokeh background."*
3.  **STYLE (El Estilo):** Define UN SOLO estilo global para todo el carrusel (Estilo Jurásico/Realista). Este NO va en la tabla, sino al inicio.
4.  **PROMPT PRINCIPAL (La Acción):** Cómo el Subject interactúa con la Scene. Ejemplo: *"Microraptor gliding down from a tall tree branch in the misty forest."*
5.  **SLIDE 1 (PORTADA/GANCHO):** La primera diapositiva SIEMPRE debe ser una "Portada" visual de alto impacto para el título. NO debe ser el primer ítem de la lista, sino una representación gráfica del tema general.
6.  **NOMBRES:** En la columna "Slide", usa siempre el nombre del dinosaurio en **INGLÉS** (Scientific Name).

## Paso 4: Entrega Final
Presenta el resultado en una tabla limpia para que el usuario pueda copiar y pegar fácilmente.

**Formato de Salida Obligatorio:**

### **Título del Carrusel:**
*(Título viral sugerido)*

### **Descripción y Hashtags:**
*(Texto sugerido para el post de TikTok + Lista de hashtags)*


### **Tabla de Prompts (Whisk):**

**Global Style (Jurassic Aesthetic):**
*(Ejemplo: National Geographic wildlife photography, Jurassic period, 8k, photorealistic, cinematic lighting, hyper-detailed texture)*

| Slide (English Name) | SIZE (Tamaño Real) | SUBJECT (Personaje) | SCENE (Fondo) | PROMPT PRINCIPAL (Acción) |
| :--- | :--- | :--- | :--- | :--- |
| **1 (Portada / Hook)** | N/A | *(Visual Genérico/Impactante del Tema)* | ... | ... |
| 2 (Dino Name 1) | (e.g. 2m length, 15kg) | ... | ... | ... |
| 3 (Dino Name 2) | ... | ... | ... | ... |
| ... | ... | ... | ... | ... |
