import sys
import time
import os
from core.generator.engine import GeneratorEngine, GovernanceEngine

def run_starter_simulation():
    # 1. Initialize Engines
    generator = GeneratorEngine("./generated")
    governance = GovernanceEngine()
    
    print("--- Starter Kits Platform Simulation ---")
    
    # 2. Simulate User Catalog Request
    kits = [
        {"id": "web-app", "name": "Premium React Starter", "role": "DEVELOPER"},
        {"id": "api-service", "name": "FastAPI Microservice", "role": "DEVELOPER"},
        {"id": "microservice", "name": "Go Core Hub", "role": "DEVELOPER"}, # Restricted
    ]
    
    print(f"\n[CATALOG] Loading approved blueprints for user context...")
    for kit in kits:
        val = governance.validate_generation(kit['id'], kit['role'])
        status = "✅ APPROVED" if val['allowed'] else "❌ RESTRICTED"
        print(f"  Kit: {kit['name']} | Status: {status} | Reason: {val.get('reason', 'N/A')}")
    
    # 3. Simulate Project Generation
    print(f"\n[GENERATOR] Spawning new project from 'api-service' kit...")
    project_name = "order-processing-api"
    path = generator.scaffold_project(project_name, "api-service", {"author": "DevOpsTrio"})
    
    print(f"  Project Root: {path}")
    print(f"  Scaffolding complete. Files generated:")
    for f in os.listdir(path):
        print(f"    - {f}")
        
    # 4. Simulate CLI integration
    print(f"\n[CLI] Simulation of 'starter init {project_name}' complete.")

if __name__ == "__main__":
    run_starter_simulation()
