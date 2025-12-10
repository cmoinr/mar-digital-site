# Backend MarDigital

Carpeta de backend de la aplicación MarDigital desarrollada con FastAPI.

## 🚀 Instalación

### 1. Crear ambiente virtual
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

### 2. Instalar dependencias
```bash
pip install -r requirements.txt
```

### 3. Configurar variables de entorno
```bash
cp .env.example .env
# Editar .env con tus credenciales
```

## 📧 Configuración SMTP (Gmail)

1. **Habilitar acceso de aplicaciones menos seguras:**
   - Ir a https://myaccount.google.com/security
   - Buscar "Contraseñas de aplicación"
   - Seleccionar "Mail" y "Windows Computer"
   - Copiar la contraseña de 16 caracteres generada

2. **Actualizar .env:**
```
SMTP_USER=tu-email@gmail.com
SMTP_PASSWORD=contraseña-de-16-caracteres
SENDER_EMAIL=tu-email@gmail.com
RECIPIENT_EMAIL=donde-recibir-los-formularios@gmail.com
```

## 🔐 Configuración reCAPTCHA v3

1. **Registrarse en Google reCAPTCHA:**
   - Ir a https://www.google.com/recaptcha/admin/create
   - Crear un nuevo sitio
   - Seleccionar reCAPTCHA v3
   - Agregar dominio: `localhost` para desarrollo
   - Obtener: Site Key y Secret Key

2. **Actualizar .env:**
```
RECAPTCHA_SECRET_KEY=tu-secret-key
```

3. **Guardar Site Key para el frontend** (se usará en React)

## 🏃 Ejecutar servidor

```bash
# Desarrollo
python main.py

# O con uvicorn directamente
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

El API estará disponible en: `http://localhost:8000`
Documentación Swagger: `http://localhost:8000/api/docs`

## 📚 Endpoints

### POST /api/v1/contact
Procesa formularios de contacto

**Request:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "phone": "+573183183093",
  "service": "Desarrollo Web",
  "budget": "$5.000 - $10.000",
  "message": "Me gustaría...",
  "recaptchaToken": "token-desde-frontend"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "¡Mensaje enviado correctamente! Nos pondremos en contacto pronto."
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Validación de reCAPTCHA fallida"
}
```

### POST /api/v1/brief
Procesa briefs

**Request:**
```json
{
  "name": "María García",
  "email": "maria@example.com",
  "phone": "+573183183093",
  "briefType": "webDesign",
  "message": "Necesito...",
  "recaptchaToken": "token-desde-frontend"
}
```

### GET /api/v1/health
Health check del API

## 🔧 Estructura

```
backend/
├── main.py                 # Aplicación principal
├── config.py              # Configuración (settings)
├── requirements.txt       # Dependencias Python
├── .env                   # Variables de entorno (no commitear)
├── .env.example           # Ejemplo de variables
├── routes/
│   └── contact.py         # Endpoints de contacto
├── services/
│   ├── email.py           # Servicio de email SMTP
│   └── recaptcha.py       # Validación reCAPTCHA
└── schemas/
    └── contact.py         # Modelos Pydantic
```

## 🚀 Despliegue en Railway/Render

### Railway
```bash
# Instalar CLI
npm i -g @railway/cli

# Loguarse
railway login

# Crear proyecto
railway init

# Desplegar
railway up
```

Agregar variables de entorno en dashboard de Railway.

### Render
1. Conectar repositorio GitHub
2. Crear "New Web Service"
3. Seleccionar rama
4. Build command: `pip install -r requirements.txt`
5. Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
6. Agregar environment variables

## 📝 Notas

- El API requiere tokens válidos de reCAPTCHA v3
- Los emails se envían solo si reCAPTCHA valida correctamente
- El threshold por defecto es 0.5 (ajustable en .env)
- Para desarrollo local, recuerda agregar `localhost` en reCAPTCHA

## 🐛 Troubleshooting

**Error: "SMTP authentication failed"**
- Verificar contraseña de aplicación de Gmail
- Asegurar que está habilitado "Acceso de aplicaciones menos seguras"

**Error: "reCAPTCHA validation failed"**
- Verificar que el Secret Key es correcto
- Verificar que el Site Key del frontend corresponde

**Error: "CORS error"**
- Agregar tu dominio en `origins` en `main.py`
- En .env, actualizar `FRONTEND_URL`
