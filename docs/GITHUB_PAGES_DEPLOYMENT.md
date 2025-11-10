# 🚀 Guía de Deployment en GitHub Pages

Sí, es totalmente posible desplegar este proyecto como página estática en GitHub Pages. Aquí te presento las instrucciones completas.

---

## 📋 Requisitos Previos

- Repositorio en GitHub (público o privado)
- Acceso a la configuración del repositorio
- Git configurado localmente
- Node.js y npm instalados

---

## 🔧 Opción 1: Deployment Manual (GitHub Pages)

### Paso 1: Preparar el Repositorio

Si aún no has subido el proyecto a GitHub:

```bash
git init
git add .
git commit -m "Initial commit: Mar Digital Project"
git branch -M main
git remote add origin https://github.com/tu-usuario/mar-digital-site.git
git push -u origin main
```

### Paso 2: Actualizar package.json

Tu `package.json` ya tiene los scripts necesarios:

```json
{
  "scripts": {
    "dev": "vite --host :: --port 3000",
    "build": "node tools/generate-llms.js || true && vite build",
    "preview": "vite preview --host :: --port 3000"
  }
}
```

Si tu repositorio está en una subdirectorio (ej: `github.com/usuario/mar-digital-site`), añade el script de deployment:

```json
{
  "scripts": {
    "dev": "vite --host :: --port 3000",
    "build": "node tools/generate-llms.js || true && vite build",
    "preview": "vite preview --host :: --port 3000",
    "deploy": "npm run build && git add dist -f && git commit -m 'Deploy' && git subtree push --prefix dist origin gh-pages"
  }
}
```

### Paso 3: Compilar el Proyecto

```bash
npm run build
```

Esto generará una carpeta `dist/` con los archivos estáticos listos.

### Paso 4: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Abre **Settings** (Configuración)
3. En el menú izquierdo, selecciona **Pages** (Páginas)
4. En "Source", selecciona:
   - **Branch:** `main` (o `gh-pages`)
   - **Folder:** `/root` (si está en `main`) o `/` (si está en `gh-pages`)
5. Haz clic en **Save**

GitHub mostrará la URL donde se publica tu sitio.

### Paso 5: Subir los Cambios

```bash
git add -A
git commit -m "Add GitHub Pages configuration"
git push origin main
```

---

## 🔄 Opción 2: Deployment Automático con GitHub Actions (RECOMENDADO)

Esta es la mejor opción para automatizar el deployment.

### Paso 1: Crear Workflow de GitHub Actions

Crea la carpeta y archivo:

```bash
mkdir -p .github/workflows
touch .github/workflows/deploy.yml
```

### Paso 2: Contenido del Workflow

Copia este contenido en `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Setup Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build project
      run: npm run build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
        cname: tudominio.com  # (Opcional) Si usas dominio personalizado
```

### Paso 3: Configurar GitHub Pages

1. Ve a **Settings** → **Pages**
2. En "Source", selecciona:
   - **Branch:** `gh-pages`
   - **Folder:** `/root`
3. Haz clic en **Save**

### Paso 4: Hacer Push de los Cambios

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow for auto-deployment"
git push origin main
```

Ahora, cada vez que hagas push a `main`, se compilará automáticamente y se desplegará en GitHub Pages.

---

## 📍 Configuración para URL Base Personalizada

Si tu repositorio no está en la raíz (ej: `github.com/usuario/repo`), necesitas configurar la URL base.

### Opción A: Variable de Entorno en GitHub Actions

Actualiza el workflow:

```yaml
    - name: Build project
      run: npm run build
      env:
        VITE_BASE_URL: /mar-digital-site/
```

### Opción B: Archivo .env

Crea un archivo `.env`:

```env
VITE_BASE_URL=/mar-digital-site/
```

O actualiza `vite.config.js` directamente (ya hecho):

```javascript
export default defineConfig({
	base: process.env.VITE_BASE_URL || '/',
	// ... resto de config
});
```

---

## 🔗 Rutas y React Router

Para que React Router funcione correctamente en GitHub Pages, asegúrate de:

### 1. Usar `BrowserRouter` con `basename` (si es necesario)

En `src/main.jsx`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/index.css';

const basename = process.env.VITE_BASE_URL || '/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </>
);
```

### 2. Crear un archivo de redirección (404.html)

Si usas rutas de React en GitHub Pages, crea `public/404.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mar Digital</title>
    <script type="text/javascript">
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/')
          .replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body></body>
</html>
```

Luego, actualiza `src/App.jsx` o `src/main.jsx` para manejar esto.

---

## 🌐 Dominio Personalizado (Opcional)

Si quieres usar un dominio personalizado (ej: `mardigital.com`):

### Paso 1: Configurar DNS

En tu proveedor de dominio, crea registros:

```
# Para dominio raíz
A    185.199.108.153
A    185.199.109.153
A    185.199.110.153
A    185.199.111.153

# Para subdomain (ej: www.mardigital.com)
CNAME  usuario.github.io
```

### Paso 2: Configurar en GitHub

1. Ve a **Settings** → **Pages**
2. En "Custom domain", ingresa: `mardigital.com`
3. Marca "Enforce HTTPS"
4. Haz clic en **Save**

GitHub creará automáticamente un archivo `CNAME` en la rama `gh-pages`.

---

## ✅ Verificar el Deployment

Después de hacer push:

1. Ve a **Actions** en tu repositorio
2. Verifica que el workflow se ejecutó correctamente
3. Espera a que se complete (generalmente 1-2 minutos)
4. Abre `https://usuario.github.io/mar-digital-site` (o tu dominio personalizado)

---

## 📊 Estructura después del Deploy

```
GitHub Pages
├── Main Branch (Source)
│   └── Código fuente + dist/ (si deployment manual)
└── gh-pages Branch (Generated)
    └── Solo los archivos compilados de dist/
```

---

## 🔍 Solucionar Problemas Comunes

### ❌ La página muestra 404

**Solución:** Verifica que:
- El workflow finalizó correctamente
- La rama `gh-pages` existe
- Los archivos están en la carpeta `dist/`
- Las rutas en React Router son correctas

### ❌ Los estilos se ven rotos

**Solución:** Verifica:
- El `base` en `vite.config.js` es correcto
- Los imports de CSS son relativos

### ❌ Las rutas de React no funcionan

**Solución:** 
- Añade `404.html` en `public/`
- Usa `basename` en BrowserRouter
- Verifica la configuración de `VITE_BASE_URL`

### ❌ El workflow falla

**Solución:**
- Revisa los logs en **Actions**
- Verifica que `npm ci` descarga todas las dependencias
- Comprueba que `npm run build` funciona localmente

---

## 📝 Checklist Final

- [ ] Código subido a GitHub
- [ ] `vite.config.js` actualizado con `base`
- [ ] Workflow de GitHub Actions creado (opcional pero recomendado)
- [ ] GitHub Pages habilitado en Settings
- [ ] Rama `gh-pages` creada
- [ ] Primer deployment ejecutado
- [ ] URL verificada y funcionando
- [ ] Dominio personalizado configurado (si aplica)

---

## 🚀 Resumen de Comandos

```bash
# Compilar localmente
npm run build

# Ver resultado antes de desplegar
npm run preview

# Ver en live
# https://tu-usuario.github.io/mar-digital-site
```

---

## 📚 Recursos Útiles

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router on GitHub Pages](https://github.com/rafgraph/spa-github-pages)

---

**¡Tu sitio está listo para ser desplegado! 🎉**
