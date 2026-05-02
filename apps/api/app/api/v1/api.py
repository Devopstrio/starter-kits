from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, kits, generate, templates, versions, metrics
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(kits.router, prefix="/kits", tags=["kits"])
api_router.include_router(generate.router, prefix="/generate", tags=["generate"])
api_router.include_router(templates.router, prefix="/templates", tags=["templates"])
api_router.include_router(versions.router, prefix="/versions", tags=["versions"])
api_router.include_router(metrics.router, prefix="/metrics", tags=["metrics"])
