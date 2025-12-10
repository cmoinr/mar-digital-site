import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from config import settings
from typing import Optional


class EmailService:
    """Servicio para enviar emails vía SMTP"""

    @staticmethod
    def send_contact_email(
        name: str,
        email: str,
        phone: str,
        service: str,
        budget: str,
        message: str
    ) -> bool:
        """
        Envía un email de contacto al inbox del negocio
        
        Args:
            name: Nombre del cliente
            email: Email del cliente
            phone: Teléfono del cliente
            service: Servicio seleccionado
            budget: Rango de presupuesto
            message: Mensaje del cliente
            
        Returns:
            bool: True si se envió correctamente, False si hubo error
        """
        try:
            # Crear mensaje
            msg = MIMEMultipart("alternative")
            msg["Subject"] = f"Nuevo contacto de {name} - Mar Digital"
            msg["From"] = settings.sender_email
            msg["To"] = settings.recipient_email

            # Contenido HTML
            html_content = f"""
            <html>
                <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h2 style="color: #0066ff; border-bottom: 2px solid #00d4ff; padding-bottom: 10px;">
                            📧 Nuevo Mensaje de Contacto
                        </h2>
                        
                        <div style="margin: 20px 0;">
                            <h3 style="color: #333; margin-bottom: 15px;">Información del Cliente:</h3>
                            
                            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
                                <p style="margin: 8px 0;"><strong>Nombre:</strong> {name}</p>
                                <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:{email}">{email}</a></p>
                                <p style="margin: 8px 0;"><strong>Teléfono:</strong> <a href="tel:{phone}">{phone}</a></p>
                            </div>
                            
                            <h3 style="color: #333; margin-bottom: 15px;">Detalles de la Solicitud:</h3>
                            
                            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
                                <p style="margin: 8px 0;"><strong>Servicio Interesado:</strong> {service}</p>
                                <p style="margin: 8px 0;"><strong>Rango de Presupuesto:</strong> {budget}</p>
                            </div>
                            
                            <h3 style="color: #333; margin-bottom: 15px;">Mensaje:</h3>
                            
                            <div style="background-color: #f0f7ff; padding: 15px; border-left: 4px solid #0066ff; border-radius: 5px;">
                                <p style="margin: 0; white-space: pre-wrap; color: #333;">{message}</p>
                            </div>
                        </div>
                        
                        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                        
                        <div style="text-align: center; font-size: 12px; color: #999;">
                            <p>Este email fue enviado desde el formulario de contacto de mardigital.com</p>
                        </div>
                    </div>
                </body>
            </html>
            """

            # Contenido de texto plano (fallback)
            text_content = f"""
Nuevo Mensaje de Contacto

INFORMACIÓN DEL CLIENTE:
Nombre: {name}
Email: {email}
Teléfono: {phone}

DETALLES DE LA SOLICITUD:
Servicio Interesado: {service}
Rango de Presupuesto: {budget}

MENSAJE:
{message}

---
Este email fue enviado desde el formulario de contacto de mardigital.com
            """

            # Adjuntar contenido
            msg.attach(MIMEText(text_content, "plain"))
            msg.attach(MIMEText(html_content, "html"))

            # Enviar email
            with smtplib.SMTP(settings.smtp_server, settings.smtp_port) as server:
                server.starttls()
                server.login(settings.smtp_user, settings.smtp_password)
                server.send_message(msg)

            return True

        except Exception as e:
            print(f"Error al enviar email: {str(e)}")
            return False

    @staticmethod
    def send_confirmation_email(client_email: str, client_name: str) -> bool:
        """
        Envía un email de confirmación al cliente
        
        Args:
            client_email: Email del cliente
            client_name: Nombre del cliente
            
        Returns:
            bool: True si se envió correctamente, False si hubo error
        """
        try:
            msg = MIMEMultipart("alternative")
            msg["Subject"] = "Hemos recibido tu mensaje - Mar Digital"
            msg["From"] = settings.sender_email
            msg["To"] = client_email

            # HTML
            html_content = f"""
            <html>
                <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h2 style="color: #0066ff; margin-bottom: 20px;">¡Gracias por tu mensaje!</h2>
                        
                        <p style="color: #333; font-size: 16px; line-height: 1.6;">
                            Hola <strong>{client_name}</strong>,
                        </p>
                        
                        <p style="color: #333; font-size: 16px; line-height: 1.6;">
                            Hemos recibido tu mensaje correctamente. Nuestro equipo lo revisará lo antes posible 
                            y nos pondremos en contacto contigo a través del email o teléfono que proporcionaste.
                        </p>
                        
                        <div style="background-color: #f0f7ff; padding: 20px; border-left: 4px solid #0066ff; border-radius: 5px; margin: 20px 0;">
                            <p style="color: #0066ff; margin: 0;"><strong>⏱️ Tiempo de respuesta:</strong></p>
                            <p style="color: #333; margin: 10px 0 0 0;">Normalmente respondemos dentro de 24-48 horas.</p>
                        </div>
                        
                        <p style="color: #333; font-size: 16px; line-height: 1.6;">
                            Si tienes cualquier pregunta urgente, puedes contactarnos directamente en 
                            <a href="tel:+573183183093" style="color: #0066ff; text-decoration: none;">+57 318 318 3093</a>.
                        </p>
                        
                        <p style="color: #666; font-size: 14px; margin-top: 30px;">
                            Saludos,<br>
                            <strong>El equipo de Mar Digital</strong>
                        </p>
                        
                        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                        
                        <div style="text-align: center; font-size: 12px; color: #999;">
                            <p>© 2024 Mar Digital. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </body>
            </html>
            """

            text_content = f"""
¡Gracias por tu mensaje!

Hola {client_name},

Hemos recibido tu mensaje correctamente. Nuestro equipo lo revisará lo antes posible 
y nos pondremos en contacto contigo a través del email o teléfono que proporcionaste.

Tiempo de respuesta: Normalmente respondemos dentro de 24-48 horas.

Si tienes cualquier pregunta urgente, puedes contactarnos directamente en +57 318 318 3093.

Saludos,
El equipo de Mar Digital

---
© 2024 Mar Digital. Todos los derechos reservados.
            """

            msg.attach(MIMEText(text_content, "plain"))
            msg.attach(MIMEText(html_content, "html"))

            with smtplib.SMTP(settings.smtp_server, settings.smtp_port) as server:
                server.starttls()
                server.login(settings.smtp_user, settings.smtp_password)
                server.send_message(msg)

            return True

        except Exception as e:
            print(f"Error al enviar email de confirmación: {str(e)}")
            return False
