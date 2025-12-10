mar-digital-site/
│
├── 📁 frontend/ (React + Vite)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Contact.jsx          ← Actualizaré para usar API
│   │   │   ├── Home.jsx
│   │   │   ├── Services.jsx
│   │   │   └── ...
│   │   ├── components/
│   │   │   ├── FloatingWhatsAppButton.jsx  ✅ CREADO
│   │   │   └── ...
│   │   ├── utils/
│   │   │   ├── api.ts               ✅ NUEVO - Funciones para backend
│   │   │   └── recaptcha.ts         ✅ NUEVO - Config reCAPTCHA
│   │   ├── main.jsx
│   │   └── App.jsx
│   ├── .env.example                  ✅ ACTUALIZADO
│   ├── package.json
│   ├── vite.config.js
│   └── ...
│
├── 📁 backend/ (FastAPI)  ✅ COMPLETAMENTE CREADO
│   ├── main.py                       ✅ Aplicación principal
│   ├── config.py                     ✅ Configuración
│   ├── requirements.txt              ✅ Dependencias
│   ├── .env.example                  ✅ Template variables
│   ├── README.md                     ✅ Documentación completa
│   │
│   ├── 📁 routes/
│   │   ├── __init__.py
│   │   └── contact.py                ✅ Endpoints: /api/v1/contact, /api/v1/brief
│   │
│   ├── 📁 services/
│   │   ├── __init__.py
│   │   ├── email.py                  ✅ Envío SMTP
│   │   └── recaptcha.py              ✅ Validación v3
│   │
│   ├── 📁 schemas/
│   │   ├── __init__.py
│   │   └── contact.py                ✅ Modelos Pydantic
│   │
│   └── 📁 venv/                      ← Crear localmente
│       └── (ambiente virtual Python)
│
├── 📁 docs/
│   ├── DEPLOYMENT_MANUAL_STEP_BY_STEP.md
│   └── ...
│
├── 📁 plugins/
│   └── ...
│
├── 📁 public/
│   └── ...
│
├── BACKEND_SETUP.md                  ✅ NUEVO - Guía setup backend
├── BACKEND_RESUMEN.md                ✅ NUEVO - Resumen ejecutivo
├── .gitignore                        ✅ ACTUALIZADO (Python/venv)
├── .env.example                      ✅ ACTUALIZADO (vars backend)
├── package.json                      (frontend)
├── vite.config.js                    (frontend)
├── index.html                        (frontend)
└── ...

═════════════════════════════════════════════════════════════════

ARCHIVOS CREADOS EN ESTA SESIÓN:

✅ Backend:
  ├── backend/main.py
  ├── backend/config.py
  ├── backend/requirements.txt
  ├── backend/.env.example
  ├── backend/README.md
  ├── backend/routes/contact.py
  ├── backend/services/email.py
  ├── backend/services/recaptcha.py
  ├── backend/schemas/contact.py
  ├── backend/__init__.py (x3)
  └── backend/install.sh

✅ Frontend:
  ├── src/utils/api.ts
  ├── src/utils/recaptcha.ts

✅ Documentación:
  ├── BACKEND_SETUP.md (guía completa paso a paso)
  ├── BACKEND_RESUMEN.md (resumen ejecutivo)
  └── .gitignore (actualizado)

═════════════════════════════════════════════════════════════════

ESTRUCTURA DE ENDPOINTS:

POST /api/v1/contact
├── Valida reCAPTCHA
├── Envía email al negocio
├── Envía confirmación al cliente
└── Response JSON

POST /api/v1/brief
├── Similar a contact
└── Para briefs específicos

GET /api/v1/health
└── Health check

═════════════════════════════════════════════════════════════════

FLUJO COMPLETO:

1. Usuario completa formulario en Contact.jsx
2. Frontend obtiene token reCAPTCHA v3
3. Frontend envía datos + token a /api/v1/contact
4. Backend valida token con Google
5. Backend envía emails (SMTP)
6. Backend responde con estado
7. Frontend muestra confirmación al usuario

═════════════════════════════════════════════════════════════════

TECNOLOGÍAS USADAS:

Frontend:
  - React 18
  - Vite
  - React Router
  - i18n (internacionalización)
  - @react-google-recaptcha-v3

Backend:
  - FastAPI
  - Pydantic (validación)
  - Python SMTP
  - reCAPTCHA API
  - CORS middleware
  - Uvicorn

Base de datos:
  - NINGUNA (emails directo)

Emails:
  - SMTP + Gmail
  - HTML templates
  - Confirmación automática

Hosting:
  - Frontend: Vercel ✅
  - Backend: Railway/Render (pendiente)

═════════════════════════════════════════════════════════════════

SIGUIENTES PASOS INMEDIATOS:

1. ✅ HECHO: Crear backend con FastAPI
2. ⏳ PRÓXIMO: Configurar SMTP en .env
3. ⏳ PRÓXIMO: Crear reCAPTCHA en Google
4. ⏳ PRÓXIMO: Integrar frontend con backend
5. ⏳ PRÓXIMO: Testear localmente
6. ⏳ PRÓXIMO: Desplegar en Railway/Render

═════════════════════════════════════════════════════════════════
