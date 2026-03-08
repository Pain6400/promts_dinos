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

## Paso 2: Validación e Investigación (Skill `experto-dinosaurios`)
**ALERTA DE CALIDAD:** Antes de escribir una sola palabra del prompt, debes actuar como un "Fact-Checker" implacable.

1.  **Auditoría de Coherencia Temporal (CRÍTICO):**
    *   Analiza el Título/Tema propuesto (ej. "¿Cerebros del **Jurásico**?").
    *   Verifica la época geológica real de **CADA** dinosaurio en la lista.
    *   **SI HAY CONFLICTO:** Si el título especifica una era (ej. Jurásico) y hay dinosaurios de otra era (ej. Cretácico), **DETENTE Y ADVIERTE**.
        *   *Acción:* No generes los prompts erróneos. Corrige el título sugerido (ej. "Cerebros del Cretácico") o marca los dinosaurios intrusos.
        *   *Ejemplo:* "Oviraptor y T-Rex son del Cretácico, no del Jurásico. Sugiero cambiar el título a 'Cerebros del Cretácico'."

2.  **Auditoría Taxonómica (NO TODO ES UN DINOSAURIO):**
    *   **Pterosaurios (Voladores):** Pteranodon, Quetzalcoatlus NO son dinosaurios. Son *Pterosaurios*. Si el título dice "Dinos Voladores", CORRIGE a "Reptiles Voladores" o "Gigantes del Cielo".
    *   **Reptiles Marinos:** Mosasaurus, Plesiosaurus NO son dinosaurios. Son *Reptiles Marinos*.
    *   **Sinápsidos:** Dimetrodon NO es un dinosaurio (es más cercano a mamíferos).
    *   *Acción:* Si detectas este error en el título, sugiere una corrección inmediata (ej. "Monstruos Marinos" en vez de "Dinos de Agua").

3.  **Verificación Ortográfica:**
    *   Detecta errores en los nombres científicos (ej. *Toodon* → *Troodon*, *T-Rex* → *Tyrannosaurus rex*). Corrige silenciosamente en la tabla, pero avisa si la confusión era grave.

4.  **Investigación Visual (Checklist de `experto-dinosaurios`):**
    *   **Fuente Primaria:** Consulta `Dinopedia` (Fandom) o papers para detalles anatómicos.
    *   **Anatomía:** ¿Tenía labios? (T-Rex SÍ tenía labios). ¿Plumas? (Velociraptor SÍ tenía plumas).
    *   **Evita Mitos:** Nada de manos pronadas (manos de zombie) ni piel pegada al hueso (shrink-wrapped).
    *   **Clima y Entorno (SCENE):** Asegura que la flora y el clima correspondan a su periodo real. **NO exageres los biomas** (ej. la Formación Yixian/Liaoning era un clima templado con estaciones, no asumas nieve permanente solo porque los dinosaurios tenían plumas).

## Paso 3: Estructuración Whisk (Skill `experto-whisk`)
Para cada diapositiva, genera los 4 campos obligatorios definidos en la skill `experto-whisk`.
Asegúrate de que los prompts estén en **INGLÉS** para máxima compatibilidad con modelos de imagen.

1.  **SUBJECT (El Personaje):** Descripción anatómica detallada y aislada. Ejemplo: *"Anatomically accurate Microraptor, iridescent black feathers, four wings layout..."*
2.  **SCENE (El Fondo):** Descripción del entorno SIN el dinosaurio. Iluminación, clima, vegetación. Ejemplo: *"Ancient Cretaceous forest, giant ferns, misty morning light, bokeh background."*
3.  **STYLE (El Estilo):** Define UN SOLO estilo global para todo el carrusel coherente con el TEMA (ej. terror, invernal, pantano). **NUNCA uses "National Geographic" ni marcas reales.** Este NO va en la tabla, sino al inicio.
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

**Global Style ([Tema] Aesthetic):**
*(Ejemplo: Prehistoric wildlife photography, atmospheric environment, 8k resolution, photorealistic, cinematic lighting, hyper-detailed texture, anatomically accurate paleoart)*

| Slide (English Name) | SIZE (Tamaño Real) | SUBJECT (Personaje) | SCENE (Fondo) | PROMPT PRINCIPAL (Acción) |
| :--- | :--- | :--- | :--- | :--- |
| **1 (Portada / Hook)** | N/A | *(Visual Genérico/Impactante del Tema)* | ... | ... |
| 2 (Dino Name 1) | (e.g. 2m length, 15kg) | ... | ... | ... |
| 3 (Dino Name 2) | ... | ... | ... | ... |
| ... | ... | ... | ... | ... |
