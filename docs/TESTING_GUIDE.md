# Guía de Pruebas - Integración Backend/Frontend

## 📧 Configuración de Email

**Email de pruebas:** `stocktaking.ve@gmail.com`  
**App Password:** `gfda kkxy abqz pylh`

Esta configuración ya está lista en `backend/.env`

## 🚀 Inicio Rápido

### 1. Instalar dependencias del backend (primera vez)

Abre una terminal en el directorio raíz:

```bash
cd backend
pip install -r requirements.txt
cd ..
```

### 2. Iniciar el Backend

Abre una terminal en el directorio raíz del proyecto:

```bash
python backend/main.py
```

El backend estará disponible en:
- **API:** http://localhost:8000
- **Documentación interactiva:** http://localhost:8000/docs
- **Health Check:** http://localhost:8000/api/v1/health

Verás en la consola:
```
INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
```

### 3. Iniciar el Frontend

Abre **otra terminal** y ejecuta:

```bash
npm run dev
```

El frontend estará disponible en: http://localhost:5173

## 🧪 Pruebas a Realizar

### 1. Prueba del Formulario de Contacto (`Contact.jsx`)

1. Ir a: http://localhost:5173/contact
2. Completar el formulario con datos de prueba
3. Verificar que:
   - ✅ Se muestra mensaje de éxito
   - ✅ Llega email a `stocktaking.ve@gmail.com`
   - ✅ Cliente recibe email de confirmación

**Datos de prueba:**
```
Nombre: Juan Pérez
Email: tu-email@test.com
WhatsApp: +57 300 123 4567
Empresa: Test Company
Servicio: Diseño Web
Presupuesto: $1,000 - $3,000
Mensaje: Esta es una prueba del formulario de contacto
```

### 2. Prueba de Briefs (`Briefs.jsx`)

#### Brief de Diseño Web
1. Ir a: http://localhost:5173/briefs
2. Click en "Brief Diseño Web"
3. Completar el formulario multi-paso:

**Paso 1 - Datos del Cliente:**
```
Nombre: María González
Email: maria@test.com
WhatsApp: +57 310 987 6543
Empresa: Digital Ventures
Ubicación: Bogotá, Colombia
```

**Paso 2 - Detalles del Proyecto:**
```
Tipo de sitio: Landing Page
Objetivo: Capturar leads para mi startup
Páginas: Inicio, Servicios, Contacto
Contenido: Solo tengo el logo
Dominio/Hosting: No tengo ninguno
```

**Paso 3 - Estilo Visual:**
```
Referencias: www.stripe.com, www.vercel.com
Estilo: Moderno, minimalista, profesional
Colores: Azul, blanco, negro (#0066ff)
Logo: Solo tengo el logo
```

**Paso 4 - Funciones:**
```
✓ Formulario de contacto
✓ Botón de WhatsApp
✓ Integración con redes sociales
Integraciones: Google Analytics, Mailchimp
```

**Paso 5 - Observaciones:**
```
Necesito el sitio listo en 2 semanas para un evento importante.
Tengo presupuesto flexible si se puede acelerar el desarrollo.
```

4. Enviar y verificar:
   - ✅ Mensaje de éxito
   - ✅ Email recibido con TODOS los datos del brief
   - ✅ Email de confirmación al cliente

#### Brief de Branding
1. Click en "Brief Branding & Diseño Gráfico"
2. Completar todos los campos
3. Verificar envío exitoso

#### Brief de Social Media
1. Click en "Brief Social Media & Copywriting"
2. Completar formulario completo
3. Verificar envío y emails

#### Brief de Marketing Digital
1. Click en "Brief Marketing Digital"
2. Llenar todos los campos
3. Verificar recepción de datos

#### Brief de Consultoría
1. Click en "Brief Consultoría Business"
2. Completar el formulario
3. Verificar funcionamiento

## ✅ Checklist de Validación

### Formulario de Contacto
- [ ] Se muestra correctamente
- [ ] Validación de campos funciona
- [ ] Envío exitoso
- [ ] Email llega al inbox
- [ ] Email de confirmación enviado
- [ ] Formato HTML correcto

### Formularios de Brief
- [ ] Modal se abre correctamente
- [ ] Navegación entre pasos funciona
- [ ] Barra de progreso se actualiza
- [ ] Validación de campos requeridos
- [ ] Campos personalizados por tipo de brief
- [ ] Checkboxes múltiples funcionan
- [ ] Radio buttons funcionan
- [ ] Select dropdowns funcionan
- [ ] Envío exitoso
- [ ] Email con todos los datos del brief
- [ ] Email de confirmación

### Verificación de Emails

Al revisar `stocktaking.ve@gmail.com`, deberías ver:

**Para Contactos:**
- Asunto: "Nuevo contacto de [Nombre] - Mar Digital"
- Todos los campos del formulario visibles
- Diseño HTML atractivo con colores de marca

**Para Briefs:**
- Asunto: "Nuevo Brief de [Tipo] - [Nombre]"
- Tabla HTML con todos los campos completados
- Valores de checkboxes como lista separada por comas
- Diseño profesional con gradiente azul/cyan

**Para Confirmaciones:**
- Asunto: "Hemos recibido tu mensaje - Mar Digital"
- Mensaje personalizado con nombre del cliente
- Tiempo de respuesta estimado
- Datos de contacto del equipo

## 🐛 Solución de Problemas

### El backend no inicia
```bash
cd backend
source venv/Scripts/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Error de SMTP
- Verificar que las credenciales en `backend/.env` sean correctas
- Verificar que el app password no tenga espacios extra
- Gmail puede bloquear si detecta actividad inusual

### reCAPTCHA no funciona
- Verificar que la key esté en `.env`
- Para testing, usa la key pública de Google: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`
- En producción, obtén tus propias keys en: https://www.google.com/recaptcha/admin

### CORS errors
- Verificar que `FRONTEND_URL` en `backend/.env` sea `http://localhost:5173`
- Reiniciar el backend después de cambios en .env

## 📊 Endpoints del Backend

### Health Check
```bash
GET http://localhost:8000/api/v1/health
```

### Enviar Contacto
```bash
POST http://localhost:8000/api/v1/contact
Content-Type: application/json

{
  "name": "Test",
  "email": "test@test.com",
  "phone": "123456789",
  "service": "Web Design",
  "budget": "$1,000",
  "message": "Test message",
  "recaptchaToken": "token"
}
```

### Enviar Brief
```bash
POST http://localhost:8000/api/v1/brief
Content-Type: application/json

{
  "briefType": "web-design",
  "formData": {
    "fullName": "Test User",
    "email": "test@test.com",
    // ... más campos
  },
  "recaptchaToken": "token"
}
```

## 📝 Notas Importantes

1. **Threshold de reCAPTCHA:** Está configurado en 0.3 para facilitar pruebas
2. **Límites de Gmail:** Gmail tiene límites de envío (500 emails/día)
3. **Timeout:** Los emails pueden tardar 1-5 segundos en enviarse
4. **Logs:** Los errores se imprimen en la consola del backend

## 🎯 Próximos Pasos

Después de validar que todo funciona:

1. [ ] Obtener keys reales de reCAPTCHA v3
2. [ ] Configurar dominio de email profesional
3. [ ] Ajustar templates de email según marca
4. [ ] Configurar límites de rate limiting
5. [ ] Implementar sistema de tickets/CRM
6. [ ] Agregar analytics de conversión
7. [ ] Deploy a producción (Railway/Render para backend)

## 🆘 Soporte

Si encuentras algún problema durante las pruebas:
1. Revisa los logs del backend
2. Abre las DevTools del navegador (F12)
3. Verifica la pestaña Network para ver las peticiones HTTP
4. Revisa la consola para errores de JavaScript
