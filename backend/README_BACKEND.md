# Backend - Mar Digital API

API FastAPI para gestionar formularios de contacto y briefs de Mar Digital.

## 🚀 Inicio Rápido

### Requisitos
- Python 3.8+
- pip

### Instalación

1. **Crear entorno virtual** (opcional pero recomendado):
```bash
cd backend
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

2. **Instalar dependencias**:
```bash
pip install -r requirements.txt
```

3. **Configurar variables de entorno**:
```bash
# Copiar .env.example a .env
cp .env.example .env

# Editar .env con tus credenciales
```

### Ejecutar el servidor

```bash
python main.py
```

El servidor estará disponible en:
- API: http://localhost:8000
- Documentación: http://localhost:8000/docs
- Documentación alternativa: http://localhost:8000/api/docs

## 📧 Configuración de Email

El backend usa SMTP para enviar emails. Debes configurar en `.env`:

```env
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASSWORD=tu-app-password
SENDER_EMAIL=tu-email@gmail.com
RECIPIENT_EMAIL=donde-recibir@gmail.com
```

### Usar Gmail
1. Habilita 2FA en tu cuenta de Google
2. Ve a: https://myaccount.google.com/apppasswords
3. Crea una contraseña de app para "Mail" y "Windows"
4. Usa esa contraseña en `SMTP_PASSWORD`

## 🔐 reCAPTCHA (Opcional en Desarrollo)

Para producción, configura en `.env`:
```env
RECAPTCHA_SECRET_KEY=tu-secret-key
RECAPTCHA_THRESHOLD=0.3
```

En desarrollo, si no configuras `RECAPTCHA_SECRET_KEY`, el validador lo permitirá todo.

Para obtener tus keys: https://www.google.com/recaptcha/admin

## 📁 Estructura

```
backend/
├── main.py                 # Aplicación principal
├── config.py              # Configuración y settings
├── requirements.txt       # Dependencias
├── .env                   # Variables de entorno (no commit)
├── routes/
│   └── contact.py         # Rutas de contacto y briefs
├── schemas/
│   └── contact.py         # Modelos de validación
└── services/
    ├── email.py           # Servicio de emails
    └── recaptcha.py       # Servicio de reCAPTCHA
```

## 🔌 Endpoints

### Health Check
```
GET /api/v1/health
```

### Enviar Contacto
```
POST /api/v1/contact
Content-Type: application/json

{
  "name": "Juan",
  "email": "juan@example.com",
  "phone": "+57 300 123 4567",
  "service": "Diseño Web",
  "budget": "$1,000",
  "message": "Quiero un sitio web...",
  "recaptchaToken": "token-de-recaptcha"
}
```

### Enviar Brief
```
POST /api/v1/brief
Content-Type: application/json

{
  "briefType": "web-design",
  "formData": {
    "fullName": "Juan",
    "email": "juan@example.com",
    "whatsapp": "+57 300 123 4567",
    // ... más campos según el tipo de brief
  },
  "recaptchaToken": "token-de-recaptcha"
}
```

## 🧪 Testing

Ver `docs/TESTING_GUIDE.md` para guía completa de pruebas.

## 🐛 Troubleshooting

### UnicodeDecodeError
Si obtienes error de encoding, la declaración `# -*- coding: utf-8 -*-` ya está en los archivos. Si persiste:

```bash
# En Windows, configura la codificación
set PYTHONIOENCODING=utf-8
python main.py
```

### Error SMTP
- Verifica credenciales en `.env`
- Asegúrate de usar app password en Gmail
- Verifica conectividad SMTP: `telnet smtp.gmail.com 587`

### CORS Error
- Verifica que `FRONTEND_URL` en `.env` coincida con tu frontend
- Por defecto: `http://localhost:5173`

## 📚 Documentación

La documentación interactiva (Swagger UI) está disponible en:
- http://localhost:8000/docs

Versión alternativa (ReDoc):
- http://localhost:8000/api/docs

## 🔧 Desarrollo

Para desarrollo con hot-reload:
```bash
python main.py
```

El servidor se recargará automáticamente al cambiar archivos (settings.debug = True).

## 📝 Variables de Entorno

| Variable | Obligatoria | Defecto | Descripción |
|----------|-------------|---------|-------------|
| ENVIRONMENT | No | development | Entorno (development/production) |
| DEBUG | No | true | Modo debug |
| SMTP_SERVER | Sí | - | Servidor SMTP (ej: smtp.gmail.com) |
| SMTP_PORT | No | 587 | Puerto SMTP |
| SMTP_USER | Sí | - | Usuario SMTP |
| SMTP_PASSWORD | Sí | - | Contraseña SMTP |
| SENDER_EMAIL | Sí | - | Email remitente |
| SENDER_NAME | No | Mar Digital | Nombre remitente |
| RECIPIENT_EMAIL | Sí | - | Email destinatario |
| RECIPIENT_NAME | No | Mar Digital Team | Nombre destinatario |
| RECAPTCHA_SECRET_KEY | No* | - | Secret key reCAPTCHA (*solo producción) |
| RECAPTCHA_THRESHOLD | No | 0.3 | Threshold de score reCAPTCHA |
| FRONTEND_URL | No | http://localhost:5173 | URL del frontend para CORS |

## 🚀 Deploy

Para deployment, consulta:
- Railway: https://railway.app
- Render: https://render.com
- Heroku: https://heroku.com

Asegúrate de:
1. Establecer `ENVIRONMENT=production`
2. Establecer `DEBUG=false`
3. Configurar todas las variables de entorno obligatorias
4. Usar dominio HTTPS
