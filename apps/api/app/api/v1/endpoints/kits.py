from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def list_kits():
    return {'kits': [{'id': 'web-app', 'name': 'React Starter', 'stack': 'React, TS, Vite'}]}
