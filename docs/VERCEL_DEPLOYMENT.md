# Deploying to Vercel

Tu proyecto ahora está configurado para desplegar a **Vercel** de forma automática y sencilla.

## Opción 1: Deployment automático (Recomendado)

### Pasos:

1. **Conecta tu repositorio a Vercel:**
   - Ve a https://vercel.com/new
   - Haz click en "Import Git Repository"
   - Selecciona tu repositorio `cmoinr/mar-digital-site`
   - Vercel detectará automáticamente que es un proyecto Vite

2. **Configura las variables de entorno (opcional):**
   - En Vercel Settings → Environment Variables
   - Agrega `VITE_BASE_URL` = `/` (ya está por defecto)

3. **Listo:**
   - Vercel ahora compilará y desplegará automáticamente cada vez que hagas `git push` a `main`
   - Tu sitio estará disponible en: `https://<tu-proyecto>.vercel.app`
   - También tendrás un dominio personalizado

## Opción 2: Deploy desde la línea de comandos

```bash
# 1. Instala Vercel CLI
npm install -g vercel

# 2. Autentica tu cuenta
vercel login

# 3. Deploy
vercel --prod
```

## Comparación: Vercel vs GitHub Pages

| Feature | Vercel | GitHub Pages |
|---------|--------|--------------|
| Base URL | `/` (raíz) | `/mar-digital-site/` (subdirectorio) |
| Dominio personalizado | ✅ Sí | ✅ Sí (con CNAME) |
| SSL/HTTPS | ✅ Automático | ✅ Automático |
| Deploy automático | ✅ Sí (cualquier push) | ✅ Sí (workflow) |
| Velocidad | ⚡ Muy rápido (CDN global) | ⚡ Rápido |
| Cost | Gratuito (con limitaciones) | Gratuito |
| Logs en tiempo real | ✅ Sí | ❌ No |
| Preview URLs | ✅ Sí (pull requests) | ❌ No |

## Si quieres mantener GitHub Pages también

El proyecto sigue teniendo soporte para GitHub Pages con el workflow de GitHub Actions.

**Para GitHub Pages:**
- El workflow establece automáticamente `VITE_BASE_URL=/mar-digital-site/`
- Se deploya a https://cmoinr.github.io/mar-digital-site/

**Para Vercel:**
- Vercel usa `VITE_BASE_URL=/` (raíz)
- Se deploya a tu dominio de Vercel

## Archivos de configuración

- **`vercel.json`** - Configuración de Vercel (rutas, caché, etc.)
- **`vite.config.js`** - Actualizado para usar variable de entorno `VITE_BASE_URL`
- **`src/main.jsx`** - Actualizado para usar `VITE_BASE_URL` en React Router
- **`.env.example`** - Documenta las variables de entorno disponibles

## Desactivar GitHub Actions (si quieres usar solo Vercel)

Si prefieres usar solo Vercel y no GitHub Pages:

```bash
# Elimina el workflow
rm .github/workflows/deploy.yml
```

Vercel se encargará de todo automáticamente.

## Próximos pasos

1. Ve a https://vercel.com/new y conecta tu repositorio
2. Vercel compilará automáticamente
3. Tu sitio estará online en minutos
4. Cada `git push` a `main` dispara un nuevo deployment

¡Listo! 🚀
