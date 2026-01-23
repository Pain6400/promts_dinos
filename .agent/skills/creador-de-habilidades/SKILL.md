---
name: creador-de-habilidades
description: Utiliza esta habilidad cuando el usuario quiera crear una nueva habilidad o "skill". Te guiará paso a paso para crear la estructura de carpetas y los archivos necesarios (SKILL.md) siguiendo las mejores prácticas.
---

# Creador de Habilidades (Skill Creator)

Esta habilidad te permite actuar como un experto en la creación de nuevas habilidades para Antigravity. Sigue estos pasos meticulosamente para asegurar que las nuevas habilidades sean funcionalmente robustas y sigan los estándares.

## Cuándo usar esta habilidad
- Cuando el usuario solicite explícitamente "crear una nueva habilidad" o "enseñarte a hacer algo nuevo de forma permanente".
- Cuando identifiques una tarea repetitiva compleja que se beneficiaría de tener instrucciones reutilizables.

## Flujo de Trabajo

### 1. Entender el Propósito
Antes de escribir cualquier archivo, confirma con el usuario:
- **Nombre de la habilidad**: Debe ser corto, descriptivo y en formato `kebab-case` (ej. `generador-tests-python`).
- **Descripción**: ¿Qué hace exactamente? ¿Cuándo debe activarse?
- **Alcance**: ¿Qué archivos o scripts adicionales necesitará?

### 2. Estructura de Carpetas
Las habilidades deben residir en `.agent/skills/<nombre-habilidad>/`.
Estructura estándar:
```text
.agent/skills/
└── <nombre-habilidad>/
    ├── SKILL.md          (OBLIGATORIO)
    ├── scripts/          (Opcional: para scripts de automatización)
    └── resources/        (Opcional: plantillas o archivos estáticos)
```

### 3. Crear el archivo `SKILL.md`
Este es el cerebro de la habilidad. Debe contener:

#### Frontmatter (YAML)
Al inicio del archivo:
```yaml
---
name: nombre-de-la-habilidad
description: Una descripción concisa (1-2 oraciones) de qué hace la habilidad y cuándo el agente debería usarla.
---
```

#### Contenido del Markdown
1.  **Título**: `# Nombre Legible de la Habilidad`
2.  **Descripción Detallada**: Explica el propósito en profundidad.
3.  **Cuándo usarla**: Lista de puntos (`-`) describiendo los escenarios de activación.
4.  **Instrucciones / Flujo de Trabajo**: Pasos numerados o detallados que el agente debe seguir. Sé específico sobre qué herramientas usar.
5.  **Ejemplos** (Opcional): Bloques de código mostrando input/output esperado.

### 4. Automatización (Opcional)
Si la habilidad requiere ejecutar lógica compleja (ej. análisis de código estático, transformaciones de datos), crea scripts en la carpeta `scripts/` (Python, Bash, Node.js) y refiérelos en las instrucciones de `SKILL.md`.

## Instrucciones para el Agente (Tú)
Para crear la habilidad solicitada por el usuario:

1.  **Planifica**: Piensa en la estructura necesaria.
2.  **Crea el Directorio**: Usa `run_command` para crear `.agent/skills/<nombre>/`.
    - Windows: `mkdir -p .agent/skills/<nombre>/scripts`
3.  **Escribe SKILL.md**: Usa `write_to_file` para crear el archivo con el frontmatter y las instrucciones traducidas a las necesidades del usuario.
    - **IMPORTANTE**: Si el usuario habla español, escribe las instrucciones del `SKILL.md` en español.
4.  **Notifica**: Informa al usuario que la habilidad ha sido creada y está lista para usarse en la próxima sesión.

## Ejemplo de Plantilla SKILL.md
```markdown
---
name: mi-nueva-habilidad
description: Genera documentación automática para funciones de Python.
---

# Generador de Documentación Python

Esta habilidad analiza archivos Python y genera docstrings formato Google.

## Pasos
1. Lee el archivo objetivo.
2. Identifica funciones sin docstrings.
3. Genera el docstring basándote en los argumentos y el cuerpo.
```
