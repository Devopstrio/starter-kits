.PHONY: help build up down test lint migrate generate-kit list-kits validate-templates

help:
	@echo "Starter Kits Platform - Management Commands"
	@echo "-------------------------------------------"
	@echo "build              : Build all service containers"
	@echo "up                 : Start all services in the background"
	@echo "down               : Stop all services"
	@echo "test               : Run all tests (Unit + Integration)"
	@echo "lint               : Run linting checks"
	@echo "migrate            : Run database migrations"
	@echo "generate-kit       : Simulate project generation via CLI"
	@echo "list-kits          : List all available starter kits"
	@echo "validate-templates : Run linting/validation on templates"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/unit tests/integration
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker core cli
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

generate-kit:
	docker-compose exec api python cli/starter-cli/main.py generate --name my-app --kit web-app

list-kits:
	docker-compose exec api python cli/starter-cli/main.py list

validate-templates:
	docker-compose exec api python scripts/validate/templates.py
