# CONFIGURACIÓN DEL BACKEND - GUÍA COMPLETA

## 🎯 Resumen de lo que se creó

Se ha creado un backend completo en FastAPI ubicado en `backend/` con:

✅ **Estructura profesional:**
- main.py: Aplicación principal FastAPI
- config.py: Configuración y variables de entorno
- schemas/: Validación de datos (Pydantic)
- routes/: Endpoints del API
- services/: Lógica de email y reCAPTCHA

✅ **Funcionalidades:**
- Endpoint POST /api/v1/contact para formularios
- Endpoint POST /api/v1/brief para briefs
- Validación de reCAPTCHA v3
- Envío de emails SMTP
- CORS configurado para desarrollo y producción
- Documentación automática con Swagger

---

## 🔧 PASO 1: Instalación Local

### En tu terminal (Windows, Mac o Linux):

```bash
# 1. Navegar a la carpeta del proyecto
cd mar-digital-site

# 2. Crear ambiente virtual Python
python -m venv backend/venv

# 3. Activar ambiente virtual
# Windows:
backend\venv\Scripts\activate
# Mac/Linux:
source backend/venv/bin/activate

# 4. Instalar dependencias
cd backend
pip install -r requirements.txt

# 5. Copiar archivo de configuración
cp .env.example .env
# O manualmente: copiar .env.example y renombrar a .env
```

---

## 📧 PASO 2: Configurar SMTP (Gmail)

### A. Habilitar "Contraseñas de aplicación" en Gmail:

1. Ve a: https://myaccount.google.com/security
2. En la izquierda, busca "Contraseñas de aplicación"
3. Si no aparece, primero activa verificación de 2 factores:
   - Security → 2-Step Verification
4. Selecciona:
   - App: Mail
   - Device: Windows Computer (o tu dispositivo)
5. Google te generará una contraseña de 16 caracteres
6. **Copia esta contraseña** (la necesitarás en .env)

### B. Actualizar archivo `.backend/.env`:

```env
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASSWORD=xxxx xxxx xxxx xxxx  # Contraseña de 16 caracteres
SENDER_EMAIL=tu-email@gmail.com
SENDER_NAME=Mar Digital
RECIPIENT_EMAIL=donde-recibir@gmail.com
RECIPIENT_NAME=Mar Digital Team
```

**Ejemplo completo de .env:**
```env
ENVIRONMENT=development
DEBUG=true
API_V1_STR=/api/v1

SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=miempresa@gmail.com
SMTP_PASSWORD=abcd efgh ijkl mnop
SENDER_EMAIL=miempresa@gmail.com
SENDER_NAME=Mar Digital
RECIPIENT_EMAIL=contacto@miempresa.com
RECIPIENT_NAME=Mar Digital Team

RECAPTCHA_SECRET_KEY=tu-secret-key-aqui
FRONTEND_URL=http://localhost:3000
RECAPTCHA_THRESHOLD=0.5
```

---

## 🔐 PASO 3: Configurar reCAPTCHA v3

### A. Crear sitio en reCAPTCHA:

1. Ve a: https://www.google.com/recaptcha/admin/create
2. **Rellena el formulario:**
   - Label: "Mar Digital"
   - reCAPTCHA type: **reCAPTCHA v3**
   - Domains: Agregar estos:
     - `localhost` (para desarrollo local)
     - `mardigital.com` (tu dominio)
     - `www.mardigital.com`
3. Aceptar términos y CREAR

### B. Copiar claves:

Verás 2 claves en la siguiente página:
- **Site Key**: Para el FRONTEND (React)
- **Secret Key**: Para el BACKEND (main.py) ← Guardar en .env

### C. Actualizar .env con Secret Key:

```env
RECAPTCHA_SECRET_KEY=tu-secret-key-aqui
```

---

## ▶️ PASO 4: Ejecutar Backend Localmente

```bash
# Asegúrate de estar en la carpeta backend/
cd backend

# Ejecutar servidor
python main.py

# Alternativa con uvicorn
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Deberías ver:**
```
INFO:     Uvicorn running on http://0.0.0.0:8000
INFO:     Application startup complete
```

**Acceder a:**
- API: http://localhost:8000
- Swagger Docs: http://localhost:8000/api/docs
- Health Check: http://localhost:8000/api/v1/health

---

## 🎨 PASO 5: Integrar reCAPTCHA en Frontend

### A. Instalar librería en React:

```bash
# En la carpeta raíz (NO en backend)
npm install @react-google-recaptcha-v3
```

### B. Crear archivo de configuración (ej: `src/utils/recaptcha.ts`):

```typescript
// src/utils/recaptcha.ts
export const RECAPTCHA_SITE_KEY = "tu-site-key-aqui";
```

### C. Envolver App con Provider (en `src/main.jsx`):

```jsx
import { GoogleReCaptchaProvider } from '@react-google-recaptcha-v3';
import { RECAPTCHA_SITE_KEY } from './utils/recaptcha';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      <App />
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
)
```

### D. Usar en Contact.jsx:

```jsx
import { useGoogleReCaptcha } from '@react-google-recaptcha-v3';

const Contact = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Obtener token reCAPTCHA
    const token = await executeRecaptcha('contact_form');
    
    // Enviar al backend
    const response = await fetch('http://localhost:8000/api/v1/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        recaptchaToken: token
      })
    });
    
    const data = await response.json();
    if (data.success) {
      toast({ title: "¡Éxito!", description: data.message });
    }
  };
}
```

---

## 🚀 PASO 6: Desplegar Backend

### Opción A: Railway (Recomendado)

1. Crear cuenta en https://railway.app
2. Conectar repositorio GitHub
3. En Railway, crear nuevo proyecto → GitHub Repo
4. Agregar variables de entorno en Settings
5. Automáticamente desplegará en cada push

### Opción B: Render

1. Crear cuenta en https://render.com
2. Crear "New Web Service"
3. Conectar GitHub
4. **Build command:** `pip install -r requirements.txt`
5. **Start command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`
6. Agregar environment variables
7. Deploy

### Opción C: Heroku

```bash
# Instalar Heroku CLI
npm install -g heroku

# Loguarse
heroku login

# Crear app
heroku create mar-digital-api

# Establecer variables
heroku config:set SMTP_USER=tu-email@gmail.com
heroku config:set SMTP_PASSWORD=tu-password
# ... etc para todas las variables

# Desplegar
git push heroku main
```

---

## 🧪 Testear Endpoints

### Usando cURL:

```bash
curl -X POST "http://localhost:8000/api/v1/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan",
    "email": "juan@example.com",
    "phone": "+573183183093",
    "service": "Web Design",
    "budget": "$5000-$10000",
    "message": "Quiero una página web",
    "recaptchaToken": "token-aqui"
  }'
```

### Usando Swagger (automático):

Ve a: http://localhost:8000/api/docs

Verás los endpoints documentados y podrás hacer pruebas directamente.

---

## 📋 Variables de Entorno Completas

```env
# Environment
ENVIRONMENT=development
DEBUG=true
API_V1_STR=/api/v1

# Email SMTP (Gmail)
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASSWORD=xxxx xxxx xxxx xxxx

# Sender
SENDER_EMAIL=tu-email@gmail.com
SENDER_NAME=Mar Digital

# Recipients
RECIPIENT_EMAIL=contacto@mardigital.com
RECIPIENT_NAME=Mar Digital Team

# reCAPTCHA v3
RECAPTCHA_SECRET_KEY=tu-secret-key

# Frontend
FRONTEND_URL=http://localhost:3000

# Threshold reCAPTCHA (0.0-1.0)
RECAPTCHA_THRESHOLD=0.5
```

---

## ⚠️ Troubleshooting

### "SMTP authentication failed"
- Verificar que contraseña de Gmail es correcta
- Usar contraseña de aplicación, NO contraseña de cuenta
- Verificar que 2FA está habilitado

### "reCAPTCHA validation failed"
- Verificar Secret Key es correcto
- Asegurar que localhost está en la lista de dominios
- El token debe ser generado desde el mismo dominio

### "CORS error"
- Agregar dominio frontend en `origins` de main.py
- En .env, actualizar `FRONTEND_URL`

### "ModuleNotFoundError"
```bash
# Verificar que venv está activado
source backend/venv/bin/activate  # Mac/Linux
backend\venv\Scripts\activate     # Windows

# Reinstalar dependencias
pip install -r requirements.txt
```

---

## 📚 Documentación Adicional

- FastAPI: https://fastapi.tiangolo.com
- Pydantic: https://docs.pydantic.dev
- reCAPTCHA: https://developers.google.com/recaptcha
- Railway: https://docs.railway.app
- Render: https://render.com/docs

---

## ✅ Checklist Final

- [ ] Python 3.8+ instalado
- [ ] venv creado y activado
- [ ] requirements.txt instalado
- [ ] .env configurado con credenciales
- [ ] Gmail 2FA habilitado
- [ ] Contraseña de aplicación generada
- [ ] reCAPTCHA v3 creado
- [ ] Secret Key en .env
- [ ] Backend corre localmente sin errores
- [ ] Swagger Docs accesible
- [ ] Frontend con reCAPTCHA integrado
- [ ] Prueba de envío de email exitosa

¡Listo! Tu backend está 100% funcional. 🎉
