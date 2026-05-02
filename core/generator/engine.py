import os
import json
import jinja2
from typing import List, Dict, Any, Optional
from datetime import datetime

class TemplateEngine:
    """Renders starter kit templates with parameter substitution."""
    
    def __init__(self, templates_dir: str):
        self.env = jinja2.Environment(
            loader=jinja2.FileSystemLoader(templates_dir),
            autoescape=jinja2.select_autoescape()
        )

    def render_template(self, template_name: str, context: Dict[str, Any]) -> str:
        template = self.env.get_template(template_name)
        return template.render(context)

class GeneratorEngine:
    """Orchestrates project scaffolding and file generation."""
    
    def __init__(self, output_dir: str):
        self.output_dir = output_dir

    def scaffold_project(self, project_name: str, kit_type: str, context: Dict[str, Any]):
        project_path = os.path.join(self.output_dir, project_name)
        os.makedirs(project_path, exist_ok=True)
        
        # Simulation: Create base files
        files = {
            "README.md": f"# {project_name}\nGenerated from {kit_type} kit.",
            "package.json": json.dumps({"name": project_name, "version": "1.0.0"}, indent=2),
            ".gitignore": "node_modules/\n.env",
            "docker-compose.yml": "version: '3.8'\nservices:\n  app:\n    build: ."
        }
        
        for filename, content in files.items():
            with open(os.path.join(project_path, filename), "w") as f:
                f.write(content)
        
        return project_path

class GovernanceEngine:
    """Enforces organizational policies on starter kit usage."""
    
    def __init__(self):
        self.approved_kits = ["web-app", "api-service", "microservice", "serverless"]

    def validate_generation(self, kit_type: str, user_role: str) -> Dict[str, Any]:
        if kit_type not in self.approved_kits:
            return {"allowed": False, "reason": "KIT_NOT_APPROVED"}
        if kit_type == "microservice" and user_role != "PLATFORM_ADMIN":
            return {"allowed": False, "reason": "INSUFFICIENT_PERMISSIONS"}
        return {"allowed": True}

if __name__ == "__main__":
    # Test Simulation
    generator = GeneratorEngine("./generated")
    governance = GovernanceEngine()
    
    print("--- Starter Kits Platform Simulation ---")
    
    # 1. Validate Governance
    val = governance.validate_generation("web-app", "DEVELOPER")
    print(f"Governance Check: {val['allowed']}")
    
    # 2. Scaffold Project
    if val['allowed']:
        path = generator.scaffold_project("new-react-app", "web-app", {"author": "DevOpsTrio"})
        print(f"Project Scaffolded at: {path}")
