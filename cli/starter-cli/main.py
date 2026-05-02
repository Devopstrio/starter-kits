import typer
from typing import Optional
from rich.console import Console
from rich.table import Table

app = typer.Typer(name="starter", help="Starter Kits Platform CLI")
console = Console()

@app.command()
def list():
    """List all available starter kits."""
    table = Table(title="Available Starter Kits")
    table.add_column("ID", style="cyan")
    table.add_column("Name", style="white")
    table.add_column("Complexity", style="green")
    
    table.add_row("web-app", "React + Vite Starter", "Medium")
    table.add_row("api-service", "FastAPI Service", "Low")
    table.add_row("microservice", "Go Microservice Hub", "High")
    
    console.print(table)

@app.command()
def generate(
    name: str = typer.Option(..., "--name", "-n", help="Name of the new project"),
    kit: str = typer.Option(..., "--kit", "-k", help="Starter kit ID to use")
):
    """Generate a new project from a starter kit."""
    console.print(f"🚀 Generating [bold cyan]{name}[/] using [bold green]{kit}[/] kit...")
    # Simulation: Call API or GeneratorEngine
    console.print(f"✅ Project [bold green]{name}[/] created successfully!")

if __name__ == "__main__":
    app()
