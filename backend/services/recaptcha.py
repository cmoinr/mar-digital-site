import requests
from config import settings


class RecaptchaService:
    """Servicio para validar tokens de reCAPTCHA v3"""

    RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify"

    @staticmethod
    def verify_token(token: str) -> dict:
        """
        Valida un token de reCAPTCHA v3 con Google
        
        Args:
            token: Token recibido del frontend
            
        Returns:
            dict: {
                "success": bool,
                "score": float (0.0 - 1.0),
                "action": str,
                "challenge_ts": str,
                "hostname": str,
                "error_codes": list
            }
        """
        try:
            response = requests.post(
                RecaptchaService.RECAPTCHA_VERIFY_URL,
                data={
                    "secret": settings.recaptcha_secret_key,
                    "response": token
                },
                timeout=5
            )
            
            result = response.json()
            return result
            
        except Exception as e:
            print(f"Error al validar reCAPTCHA: {str(e)}")
            return {
                "success": False,
                "error": str(e)
            }

    @staticmethod
    def is_valid(token: str) -> bool:
        """
        Verifica si el token es válido y cumple el threshold
        
        Args:
            token: Token de reCAPTCHA
            
        Returns:
            bool: True si es válido, False si no
        """
        result = RecaptchaService.verify_token(token)
        
        if not result.get("success"):
            return False
        
        score = result.get("score", 0.0)
        
        # Verificar que el score esté por encima del threshold
        if score < settings.recaptcha_threshold:
            print(f"Score bajo: {score} < {settings.recaptcha_threshold}")
            return False
        
        return True
