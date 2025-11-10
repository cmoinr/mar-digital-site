# 🚀 Deployment a GitHub Pages - LA FORMA CORRECTA

> ⚠️ **GitHub Pages en subdirectorios es complicado**. Si necesitas algo más sencillo como Render, puedes cambiar en cualquier momento. Pero aquí está la solución CORRECTA.

---

## 🎯 El Problema Que Tenías

```
Failed to load module script: Expected a JavaScript-or-Wasm module script 
but the server responded with a MIME type of "text/jsx"
```

**Causas:**
1. GitHub Pages sirve desde la rama equivocada
2. GitHub Pages procesa con Jekyll por defecto (incompatible con SPA)
3. Las rutas no se resuelven correctamente en subdirectorios
4. Los archivos estáticos no se sirven con el MIME type correcto

---

## ✅ LA SOLUCIÓN CORRECTA (Rama gh-pages)

GitHub Pages funciona mejor cuando:
- Usas una **rama especial `gh-pages`** para los archivos compilados
- Deshabilitas **Jekyll** con `.nojekyll`
- Mantienes el código fuente en `main` limpio

---

## 🚀 Cómo Desplegar (MÁS FÁCIL)

### **Opción A: Script Automático (RECOMENDADO)**

```bash
# Hacer executable
chmod +x deploy.sh

# Desplegar
./deploy.sh
```

**¿Qué hace?**
1. Compila con `npm run build`
2. Crea/actualiza rama `gh-pages`
3. Sube solo `dist/`
4. Vuelve a `main`

---

### **Opción B: Manual (si prefieres control)

```bash
# 1. Compilar
npm run build

# 2. Crear rama gh-pages (primera vez solo)
git checkout --orphan gh-pages
git rm -rf .

# 3. Copiar archivos compilados
cp -r dist/* .
git add -A
git commit -m "deploy: build update"
git push origin gh-pages --force

# 4. Volver a main
git checkout main
```

---

## ⚙️ Configuración en GitHub

1. Ve a: **Settings** → **Pages**
2. **Branch:** `gh-pages`
3. **Folder:** `/root`
4. Haz clic en **Save**

---

## 🔍 Verificar Que Funciona

```bash
# Ver si la rama gh-pages existe
git branch -a

# Ver contenido de gh-pages
git show gh-pages:index.html | head -20
```

---

## 📝 Flujo de Trabajo Típico

```bash
# 1. Editar código en src/
code src/App.jsx

# 2. Hacer commit a main
git add src/
git commit -m "update: cambios en App"
git push origin main

# 3. Desplegar a GitHub Pages
./deploy.sh
# O manualmente: npm run build && (copiar dist/ a gh-pages)

# El sitio actualiza en 1-2 minutos
```

---

## 🎉 Resultado Final

```
main branch        → Código fuente (para desarrollo)
gh-pages branch    → Archivos compilados (para producción)
GitHub Pages       → Sirve desde gh-pages automáticamente
```

---

## ❓ ¿Por Qué Es Así?

GitHub Pages es un **static file server**, originalmente hecho para blogs Jekyll. Para SPA como la tuya:

| Aspecto | Problema | Solución |
|---------|----------|----------|
| Jekyll interfiere | Procesa archivos HTML | `.nojekyll` lo deshabilita |
| Rutas en subdirectorio | No se resuelven | Rama `gh-pages` con base URL correcta |
| MIME types | JSX no se reconoce | Vite compila a JS puro ✅ |
| Actualizar es lento | Necesitas 2 ramas | Script `deploy.sh` lo automatiza |

---

## 💡 Alternativa: Usar Render en Lugar de GitHub Pages

Si prefieres algo **mucho más sencillo**, puedes desplegar a **Render.com**:

```bash
# Es tan simple como:
git push origin main
# ¡Listo! Render compila y despliega automáticamente
```

**Render vs GitHub Pages:**

| Aspecto | GitHub Pages | Render |
|---------|--------------|--------|
| Dificultad | Media-Alta | Muy fácil |
| Costo | Gratis | Gratis (con límites) |
| Compilación | Manual | Automática |
| Configuración | Compleja | Trivial |
| SPA en subdirectorio | Difícil | Fácil |

---

## 🚨 Si Aún No Funciona

Revisa estos puntos:

1. ¿Está `.nojekyll` en la raíz? → `ls -la .nojekyll`
2. ¿La rama `gh-pages` tiene archivos? → `git show gh-pages:index.html`
3. ¿GitHub Pages apunta a `gh-pages`? → Verifica en Settings
4. ¿Limpió cache del navegador? → `Ctrl+Shift+R`

---

**¿Todavía muy complejo? Considera cambiar a Render o Vercel. Son mucho más simples para SPA.** 🚀
