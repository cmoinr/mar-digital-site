from fastapi import APIRouter, HTTPException, status
from schemas.contact import ContactFormRequest, ContactFormResponse, BriefRequest, BriefResponse
from services.email import EmailService
from services.recaptcha import RecaptchaService

router = APIRouter(tags=["contact"])


@router.post(
    "/contact",
    response_model=ContactFormResponse,
    status_code=status.HTTP_200_OK,
    summary="Enviar formulario de contacto",
    description="Recibe datos del formulario de contacto, valida reCAPTCHA y envía emails"
)
async def submit_contact_form(request: ContactFormRequest) -> ContactFormResponse:
    """
    Endpoint para procesar formularios de contacto
    
    - **name**: Nombre del remitente (2-100 caracteres)
    - **email**: Email válido del remitente
    - **phone**: Teléfono del remitente (7-20 caracteres)
    - **service**: Servicio de interés
    - **budget**: Rango de presupuesto
    - **message**: Mensaje (10-5000 caracteres)
    - **recaptchaToken**: Token de reCAPTCHA v3 (requerido)
    """
    
    try:
        # 1. Validar reCAPTCHA
        if not RecaptchaService.is_valid(request.recaptcha_token):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Validación de reCAPTCHA fallida. Por favor, intenta de nuevo."
            )
        
        # 2. Enviar email al negocio
        email_sent_to_business = EmailService.send_contact_email(
            name=request.name,
            email=request.email,
            phone=request.phone,
            service=request.service,
            budget=request.budget,
            message=request.message
        )
        
        if not email_sent_to_business:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Error al procesar tu solicitud. Por favor, intenta más tarde."
            )
        
        # 3. Enviar email de confirmación al cliente
        EmailService.send_confirmation_email(
            client_email=request.email,
            client_name=request.name
        )
        
        return ContactFormResponse(
            success=True,
            message="¡Mensaje enviado correctamente! Nos pondremos en contacto pronto."
        )
    
    except HTTPException:
        raise
    except Exception as e:
        print(f"Error inesperado: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error inesperado. Por favor, intenta más tarde."
        )


@router.post(
    "/brief",
    response_model=BriefResponse,
    status_code=status.HTTP_200_OK,
    summary="Enviar brief",
    description="Recibe datos de un brief, valida reCAPTCHA y envía email"
)
async def submit_brief(request: BriefRequest) -> BriefResponse:
    """
    Endpoint para procesar briefs
    
    - **name**: Nombre del remitente
    - **email**: Email válido del remitente
    - **phone**: Teléfono del remitente
    - **briefType**: Tipo de brief (webDesign, branding, socialMedia, etc.)
    - **message**: Detalles del brief
    - **recaptchaToken**: Token de reCAPTCHA v3
    """
    
    try:
        # 1. Validar reCAPTCHA
        if not RecaptchaService.is_valid(request.recaptcha_token):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Validación de reCAPTCHA fallida. Por favor, intenta de nuevo."
            )
        
        # 2. Enviar email al negocio
        email_sent = EmailService.send_contact_email(
            name=request.name,
            email=request.email,
            phone=request.phone,
            service=f"Brief - {request.brief_type}",
            budget="No especificado",
            message=request.message
        )
        
        if not email_sent:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Error al procesar tu solicitud."
            )
        
        # 3. Enviar confirmación
        EmailService.send_confirmation_email(
            client_email=request.email,
            client_name=request.name
        )
        
        return BriefResponse(
            success=True,
            message="¡Brief enviado correctamente! Nos pondremos en contacto pronto."
        )
    
    except HTTPException:
        raise
    except Exception as e:
        print(f"Error inesperado: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error inesperado. Por favor, intenta más tarde."
        )


@router.get("/health", summary="Health Check", description="Verifica que el API esté funcionando")
async def health_check():
    """Endpoint para verificar que el servidor está activo"""
    return {
        "status": "ok",
        "message": "API de Mar Digital está funcionando correctamente"
    }
