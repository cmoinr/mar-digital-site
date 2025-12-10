from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    # Environment
    environment: str = "development"
    debug: bool = True
    api_v1_str: str = "/api/v1"

    # Email SMTP
    smtp_server: str
    smtp_port: int = 587
    smtp_user: str
    smtp_password: str

    # Sender
    sender_email: str
    sender_name: str = "Mar Digital"

    # Recipients
    recipient_email: str
    recipient_name: str = "Mar Digital Team"

    # reCAPTCHA
    recaptcha_secret_key: str
    recaptcha_threshold: float = 0.5

    # Frontend URL
    frontend_url: str = "http://localhost:3000"

    class Config:
        env_file = ".env"
        case_sensitive = False


settings = Settings()
