from pydantic import BaseModel, EmailStr, Field
from typing import Optional


class ContactFormRequest(BaseModel):
    """Modelo para validar datos del formulario de contacto"""
    
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=7, max_length=20)
    service: str = Field(..., min_length=2)
    budget: str = Field(..., min_length=2)
    message: str = Field(..., min_length=10, max_length=5000)
    recaptcha_token: str = Field(..., alias="recaptchaToken")
    
    class Config:
        populate_by_name = True  # Permite usar alias en la validación


class ContactFormResponse(BaseModel):
    """Modelo para la respuesta del endpoint"""
    
    success: bool
    message: str
    error: Optional[str] = None


class BriefRequest(BaseModel):
    """Modelo para validar datos de un brief"""
    
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=7, max_length=20)
    brief_type: str = Field(..., alias="briefType")
    message: str = Field(..., min_length=10, max_length=5000)
    recaptcha_token: str = Field(..., alias="recaptchaToken")
    
    class Config:
        populate_by_name = True


class BriefResponse(BaseModel):
    """Modelo para la respuesta de briefs"""
    
    success: bool
    message: str
    error: Optional[str] = None
