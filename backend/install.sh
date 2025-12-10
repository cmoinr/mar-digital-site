#!/bin/bash

# Script para instalar y configurar el backend de Mar Digital

echo "🚀 Instalando backend de Mar Digital..."

# Crear ambiente virtual
cd backend
python -m venv venv

# Activar ambiente virtual
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    # Windows
    source venv/Scripts/activate
else
    # Linux/Mac
    source venv/bin/activate
fi

# Instalar dependencias
pip install --upgrade pip
pip install -r requirements.txt

echo "✅ Backend instalado correctamente!"
echo ""
echo "📝 Próximos pasos:"
echo "1. Copiar .env.example a .env: cp .env.example .env"
echo "2. Configurar variables de entorno en .env"
echo "3. Ejecutar servidor: python main.py"
echo ""
echo "📚 Para más detalles, ver: backend/README.md"
