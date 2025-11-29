#!/bin/bash

# =====================================================
# Script de Deployment a GitHub Pages
# =====================================================
# 
# Uso: ./deploy.sh
# 
# Este script:
# 1. Compila el proyecto con npm run build
# 2. Crea/actualiza la rama gh-pages
# 3. Sube solo los archivos compilados de dist/
# 4. Mantiene el código fuente en main limpio
#
# =====================================================

set -e  # Exit on error

echo "🚀 Iniciando deployment a GitHub Pages..."

# Verificar que estamos en main
if [ "$(git rev-parse --abbrev-ref HEAD)" != "main" ]; then
    echo "❌ Error: Debes estar en la rama 'main'"
    exit 1
fi

# Paso 1: Compilar
echo "📦 Compilando proyecto..."
npm run build
echo "✅ Compilación completada"

# Paso 2: Crear rama gh-pages si no existe
if ! git show-ref --quiet refs/heads/gh-pages; then
    echo "📝 Creando rama gh-pages..."
    git checkout --orphan gh-pages
    git rm -rf .
    echo "✅ Rama gh-pages creada"
else
    echo "🔄 Usando rama gh-pages existente..."
    git checkout gh-pages
    git rm -rf .
fi

# Paso 3: Copiar archivos compilados
echo "📂 Copiando archivos compilados..."
cp -r dist/* .
echo "✅ Archivos copiados"

# Paso 4: Hacer commit
echo "📝 Haciendo commit..."
git add -A
git commit -m "deploy: build from $(date)" || echo "No hay cambios para commitear"
echo "✅ Commit realizado"

# Paso 5: Push a gh-pages
echo "🌐 Subiendo a GitHub (gh-pages)..."
git push origin gh-pages --force
echo "✅ Push completado"

# Paso 6: Volver a main
echo "🔙 Volviendo a rama main..."
git checkout main
echo "✅ Volvemos a main"

echo ""
echo "=============================================="
echo "✨ ¡Deployment completado exitosamente!"
echo "=============================================="
echo ""
echo "Tu sitio está disponible en:"
echo "🌐 https://cmoinr.github.io/mar-digital-site/"
echo ""
echo "Nota: GitHub Pages puede tardar 1-2 minutos en actualizar"
echo ""
