from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_templates():
    return {'status': 'ok', 'component': 'templates'}
