# 📋 Instrucciones para Deployment Manual - GitHub Pages

## ✅ Configuración Realizada

He actualizado tu proyecto para que funcione correctamente en GitHub Pages. Aquí están los cambios:

### **Cambios Efectuados:**

1. ✅ **`vite.config.js`** - Base URL configurada a `/mar-digital-site/`
2. ✅ **`src/main.jsx`** - BrowserRouter con basename configurado
3. ✅ **`dist/` compilado** - Archivos listos para GitHub Pages
4. ✅ **`.gitignore`** - Configurado para incluir `dist/`

---

## 🚀 Proceso de Deployment Manual (Paso a Paso)

### **Requisito Previo:**
Asegúrate de que GitHub Pages esté configurado así:
- **Configuración** → **Pages**
- **Branch:** `main`
- **Folder:** `/root`
- **Haz click en Save**

### **Paso 1: Compilar el Proyecto**

Cada vez que hagas cambios, debes compilar:

```bash
npm run build
```

Esto genera la carpeta `/dist/` con los archivos compilados.

### **Paso 2: Subir los Cambios**

```bash
git add -A
git commit -m "Update: descripción de los cambios"
git push origin main
```

### **Paso 3: Verificar el Deployment**

1. Ve a tu repositorio en GitHub
2. Espera 1-2 minutos
3. Abre: `https://tu-usuario.github.io/mar-digital-site/`

---

## 📝 Flujo de Trabajo Recomendado

Cada vez que hagas cambios locales:

```bash
# 1. Hacer cambios en los archivos

# 2. Compilar
npm run build

# 3. Verificar localmente (opcional)
npm run preview

# 4. Si todo está bien, subir a GitHub
git add -A
git commit -m "feat: descripción del cambio"
git push origin main

# GitHub Pages actualizará automáticamente en 1-2 minutos
```

---

## 📊 Estructura del Proyecto para Deployment

```
/mar-digital-site
├── src/                    # Código fuente (NO se sube a GitHub Pages)
├── dist/                   # ✅ ESTO SE SUBE A GITHUB PAGES
│   ├── index.html
│   ├── 404.html
│   ├── assets/
│   └── ...
├── vite.config.js          # Configurado con base: '/mar-digital-site/'
├── package.json
├── .gitignore              # dist/ está incluido aquí
└── ...
```

---

## ❓ ¿Cómo Funciona?

### **Opción Manual:**
1. Haces cambios en `src/`
2. Ejecutas `npm run build`
3. Haces `git push`
4. GitHub Lee `dist/` desde la rama `main`
5. Publica en GitHub Pages ✨

### **Por qué cada commit necesita build:**
- GitHub Pages sirve archivos **estáticos**
- Los archivos `.jsx` deben compilarse a `.js`
- La carpeta `dist/` es lo que GitHub Pages ve

---

## 🔄 Alternativa: Deployment Automático (Recomendado)

Si quieres que se compile y despliegue **automáticamente** sin ejecutar manualmente `npm run build`, cambia a usar GitHub Actions:

```bash
# Actualizar configuración
# Ya tenemos .github/workflows/deploy.yml listo

# Solo hacer push
git add src/
git commit -m "Update pages"
git push origin main

# GitHub Actions se encarga del build automáticamente ✨
```

¿Quieres que activemos esto?

---

## ✅ Checklist de Verificación

- [ ] `npm run build` ejecutado y `/dist/` generado
- [ ] GitHub Pages configurado en Settings
- [ ] `git push origin main` realizado
- [ ] Esperaste 1-2 minutos
- [ ] Puedes acceder a: `https://tu-usuario.github.io/mar-digital-site/`
- [ ] Los estilos y assets se ven correctamente
- [ ] Las rutas funcionan (Home, Servicios, etc.)

---

## 🆘 Solucionar Problemas

### ❌ "Página en blanco o 404"
**Solución:**
```bash
# Verifica que dist/ está en tu repositorio
ls -la dist/

# Recompila
npm run build

# Sube nuevamente
git add -A && git commit -m "Fix: rebuild" && git push
```

### ❌ "Los estilos no se cargan"
**Causa:** Las rutas de assets están mal  
**Verificación:** Abre la Developer Console (F12) y revisa si hay errores 404 en los assets

### ❌ "Las rutas no funcionan"
**Causa:** El `basename` de React Router no coincide  
**Verificación:** Que `src/main.jsx` tenga `basename="/mar-digital-site/"`

### ❌ "Cambios no se ven en el sitio"
**Causa:** Olvidaste ejecutar `npm run build`  
**Solución:** Siempre ejecuta `npm run build` antes de hacer commit

---

## 📱 Verificar que Todo Funciona

Después de hacer push:

```bash
# Ver el historial de git
git log --oneline | head -5

# Verificar que dist/ existe
ls dist/index.html

# Abrir en navegador
open https://tu-usuario.github.io/mar-digital-site/
# o
start https://tu-usuario.github.io/mar-digital-site/
# o
xdg-open https://tu-usuario.github.io/mar-digital-site/  # Linux
```

---

## 🎯 Próximos Pasos

1. ✅ Verifica que la URL funciona
2. ✅ Prueba todas las rutas (/, /servicios, /contacto, etc.)
3. ✅ Comprueba que los estilos se cargan correctamente
4. 📝 Continúa desarrollando tu sitio

---

## 💡 Consejo

**Para desarrollo sin compilar cada vez:**

```bash
# Modo desarrollo local (sin GitHub Pages)
npm run dev

# Abre http://localhost:3000
# Aquí sí tienes HMR (cambios automáticos)

# Cuando termines y quieras desplegar:
npm run build
git push
```

---

¿Necesitas ayuda con algo específico? 🤔
