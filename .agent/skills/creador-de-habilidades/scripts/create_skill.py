import os
import sys
import argparse

def create_skill(skill_name, target_dir=".agent/skills"):
    """
    Creates the directory structure and a basic SKILL.md template for a new skill.
    """
    base_path = os.path.join(target_dir, skill_name)
    skill_md_path = os.path.join(base_path, "SKILL.md")
    scripts_path = os.path.join(base_path, "scripts")
    resources_path = os.path.join(base_path, "resources")

    # Create directories
    try:
        os.makedirs(scripts_path, exist_ok=True)
        os.makedirs(resources_path, exist_ok=True)
        print(f"Created directories for skill '{skill_name}' at {base_path}")
    except OSError as e:
        print(f"Error creating directories: {e}")
        return

    # Create SKILL.md template
    content = f"""---
name: {skill_name}
description: Describe here what the skill does briefly.
---

# {skill_name.replace('-', ' ').title()}

Description of the skill...

## When to use this skill
- Condition 1
- Condition 2

## Instructions
1. Step 1
2. Step 2
"""
    
    try:
        with open(skill_md_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Created template SKILL.md at {skill_md_path}")
    except OSError as e:
        print(f"Error writing SKILL.md: {e}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Scaffold a new Antigravity skill.")
    parser.add_argument("name", help="Name of the skill (kebab-case)")
    parser.add_argument("--dir", default=".agent/skills", help="Target skills directory")
    
    args = parser.parse_args()
    create_skill(args.name, args.dir)
