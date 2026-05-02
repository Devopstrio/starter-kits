from fastapi import APIRouter, Body
router = APIRouter()
@router.post('/')
def generate_project(data: dict = Body(...)):
    return {'status': 'GENERATED', 'path': '/tmp/my-project'}
