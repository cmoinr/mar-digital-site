# -*- coding: utf-8 -*-
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from config import settings
from routes.contact import router as contact_router

# Crear aplicación FastAPI
app = FastAPI(
    title="Mar Digital API",
    description="Backend API para Mar Digital - Gestión de formularios de contacto",
    version="1.0.0",
    docs_url="/api/docs",
    openapi_url="/api/openapi.json"
)

# Configurar CORS
origins = [
    "http://localhost:3000",
    "http://localhost:5173",  # Puerto por defecto de Vite
    settings.frontend_url,
]

if settings.environment == "production":
    origins = [
        settings.frontend_url,
        "https://mardigital.com",
        "https://www.mardigital.com"
    ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir rutas
app.include_router(
    contact_router,
    prefix="/api/v1",
)

# Ruta raíz
@app.get("/")
async def root():
    """Endpoint raíz del API"""
    return {
        "status": "ok",
        "message": "Bienvenido al API de Mar Digital",
        "docs": "/api/docs",
        "version": "1.0.0"
    }

# Ruta para 404
@app.get("/api/v1/health")
async def health():
    """Health check del API"""
    return {
        "status": "healthy",
        "environment": settings.environment
    }

# Manejo de excepciones global
@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    """Manejador global de excepciones"""
    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "message": "Error interno del servidor",
            "error": str(exc) if settings.debug else "Error desconocido"
        }
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=settings.debug
    )
