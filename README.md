# Mar Digital

Sitio web moderno y responsivo construido con React, Vite y Tailwind CSS.

> 📚 **Documentación:** Lee la guía completa en [`docs/README.md`](./docs/README.md) para troubleshooting, deployment y más.

---

## 📊 Stack Tecnológico

### Frontend
- **React 18.2.0** - Framework principal para la interfaz de usuario
- **Vite 4.4.5** - Build tool ultrarrápido y dev server
- **React Router DOM 6.16.0** - Gestión de rutas y navegación
- **Tailwind CSS 3.3.3** - Framework de CSS basado en utilidades
- **Framer Motion 10.16.4** - Animaciones fluidas y transiciones
- **Radix UI** - Componentes accesibles y sin estilos predefinidos
- **Lucide React** - Iconos vectoriales modernos
- **React Helmet** - Gestión del head HTML (meta tags, títulos)

### Herramientas de Desarrollo
- **Node.js** - Runtime de JavaScript
- **PostCSS** - Procesamiento avanzado de CSS
- **Autoprefixer** - Prefijos automáticos para compatibilidad
- **ESLint** - Linter para mantener calidad de código
- **Babel** - Transformación de código JavaScript
- **Terser** - Minificación de JavaScript

### Características Especiales
El proyecto incluye plugins personalizados de Vite:
- ✏️ **Editor Visual en Línea** - Edición directa de componentes
- 🔄 **Modo de Selección** - Selección interactiva de elementos
- 🌐 **Restauración de Rutas en Iframes** - Soporte mejorado para iframes
- 🎨 **Editor React Inline** - Edición de código React en tiempo real

---

## 🚀 Inicio Rápido

### Requisitos Previos
- Node.js 16+ instalado
- npm o yarn como gestor de paquetes

### Instalación

1. **Clonar el repositorio** (si es necesario)
   ```bash
   git clone <repository-url>
   cd mar-digital-site
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

### Ejecutar en Desarrollo

```bash
npm run dev
```

El servidor estará disponible en: **`http://localhost:3000`**

La aplicación incluye:
- Hot Module Replacement (HMR) - Recarga instantánea al editar código
- Editor visual integrado en modo desarrollo
- Manejo automático de errores con overlay

---

## 📦 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Preview de la compilación de producción
npm run preview
```

### Detalles de los Scripts

- **`npm run dev`** - Inicia Vite en puerto 3000 con acceso desde cualquier host (`::`)
- **`npm run build`** - Genera la compilación optimizada. Ejecuta `generate-llms.js` antes de compilar (sin fallar si hay error)
- **`npm run preview`** - Simula un servidor de producción en puerto 3000 para probar la compilación final

---

## 📁 Estructura del Proyecto

```
mar-digital-site/
├── docs/                          # 📚 Documentación (README, guías, troubleshooting)
├── src/
│   ├── pages/                     # Páginas principales
│   │   ├── Home.jsx
│   │   ├── Business.jsx
│   │   ├── Creative.jsx
│   │   ├── Contact.jsx
│   │   └── Services.jsx
│   ├── components/                # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── HeroImage.jsx
│   │   ├── ui/                   # Componentes de UI base
│   │   │   ├── button.jsx
│   │   │   ├── input.jsx
│   │   │   └── ...
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── dist/                          # Build compilado para GitHub Pages
├── public/                        # Archivos estáticos
├── plugins/                       # Plugins personalizados de Vite
├── tools/                         # Herramientas de build
├── index.html                     # HTML principal
├── vite.config.js                 # Configuración de Vite
├── tailwind.config.js             # Configuración de Tailwind
├── postcss.config.js              # Configuración de PostCSS
├── package.json                   # Dependencias
└── README.md                      # Este archivo
```

---

## 🎨 Páginas Principales

El proyecto incluye las siguientes páginas:

- **Home** (`/`) - Página de inicio principal
- **Business** (`/business`) - Soluciones empresariales
- **Creative** (`/creative`) - Servicios creativos
- **Services** (`/services`) - Catálogo de servicios
- **Contact** (`/contact`) - Formulario de contacto

---

## 🔧 Configuración

### Vite (`vite.config.js`)
- Puerto por defecto: **3000**
- Alias: `@` apunta a `./src`
- CORS habilitado
- Incluye plugins personalizados en desarrollo

### Tailwind CSS (`tailwind.config.js`)
- Configuración de diseño personalizado
- Soporte para animaciones

### PostCSS (`postcss.config.js`)
- Autoprefixer para compatibilidad cross-browser
- Tailwind CSS processor

---

## 📌 Dependencias Principales

### Runtime
- `react` y `react-dom` - Framework UI
- `react-router-dom` - Enrutamiento
- `framer-motion` - Animaciones
- `@radix-ui/*` - Componentes accesibles
- `tailwindcss` y `tailwind-merge` - Estilos
- `lucide-react` - Iconos
- `class-variance-authority` - Variantes de clases CSS
- `clsx` - Utilitario de clases condicionales

### DevDependencies
- `@vitejs/plugin-react` - Plugin de React para Vite
- `@babel/*` - Herramientas de transformación de código
- `eslint` y `eslint-config-react-app` - Linting
- `terser` - Minificación

---

## 💡 Características Especiales

### Editor Visual
El proyecto incluye un editor visual integrado que permite:
- Editar componentes en tiempo real
- Seleccionar elementos interactivamente
- Cambios instantáneos con HMR

### Manejo de Errores
La aplicación monitorea:
- Errores de Vite (overlay visual)
- Errores de runtime (window.onerror)
- Errores de consola (console.error)
- Errores de fetch (network requests)

### Navegación Mejorada
Soporte especial para:
- Navegación en iframes
- Restauración de rutas
- Manejo de URLs externas

---

## 🌐 Variables de Entorno

Para producción, se pueden configurar las siguientes variables:
- `TEMPLATE_BANNER_SCRIPT_URL` - URL del script de banner
- `TEMPLATE_REDIRECT_URL` - URL de redirección

---

## 📚 Recursos Útiles

- [Documentación de React](https://react.dev)
- [Documentación de Vite](https://vitejs.dev)
- [Documentación de Tailwind CSS](https://tailwindcss.com)
- [Documentación de React Router](https://reactrouter.com)
- [Documentación de Framer Motion](https://www.framer.com/motion)
- [Documentación de Radix UI](https://www.radix-ui.com)

---

## 🚀 Deployment

Para desplegar a producción:

1. **Compilar la aplicación**
   ```bash
   npm run build
   ```

2. **Servir la carpeta `dist/`**
   La carpeta `dist/` contiene la compilación optimizada lista para producción.

### Plataformas Recomendadas
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

---

## 📝 Notas de Desarrollo

### Hot Module Replacement (HMR)
Durante el desarrollo, los cambios en el código se reflejan instantáneamente en el navegador sin necesidad de recargar la página.

### Alias de Importación
Puedes usar `@` para importar desde la carpeta `src`:
```javascript
import { MyComponent } from '@/components/MyComponent';
```

### Estilos Globales
Los estilos globales se definen en `src/index.css` y se aplican a toda la aplicación.

---

## 📄 Licencia

Especificar aquí si corresponde.

---

## 👥 Contribuciones

Para contribuir al proyecto, por favor:
1. Crea una rama para tu feature
2. Realiza tus cambios
3. Abre un Pull Request

---

## 📞 Contacto

Para más información sobre el proyecto, contacta al equipo de Mar Digital.

---

**Última actualización:** Noviembre 2025
