---
name: gestor-ideas
description: Gestiona una base de datos de ideas en Excel (hoja 'carrusel') para evitar contenido repetido.
---

# Gestor de Ideas

Esta habilidad permite leer y escribir ideas en un archivo Excel, específicamente en la hoja 'carrusel', para asegurar que el contenido no se repita.

## Comandos Disponibles

Esta skill funciona ejecutando un script de Node.js ubicado en este directorio.

### 1. Listar Ideas Existentes
Recupera todas las ideas almacenadas en la base de datos.

```bash
node .agent/skills/gestor-ideas/manage_ideas.js list <ruta_archivo_excel>
```

### 2. Agregar Nueva Idea
Añade una nueva idea a la base de datos si no existe duplicada.

```bash
node .agent/skills/gestor-ideas/manage_ideas.js add <ruta_archivo_excel> "<texto_de_la_idea>"
```

## Ejemplo de Uso en Workflow

Cuando necesites generar contenido nuevo y verificar que no se repita:

1. Ejecuta el comando `list` para obtener las ideas previas.
2. Pídele al LLM que genere nuevas ideas, excluyendo las listadas.
3. Una vez seleccionada una idea, ejecuta el comando `add` para registrarla.

## Requisitos
- Node.js instalado.
- Dependencias instaladas en esta carpeta (`npm install`).
