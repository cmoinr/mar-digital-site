# Sistema de Briefs - Mar Digital

## Descripción

Sistema de formularios multi-paso personalizados para capturar información detallada de proyectos según el tipo de servicio solicitado.

## Estructura de Archivos

### Componentes

- **`src/components/ui/modal.jsx`**: Componente Modal reutilizable con animaciones de Framer Motion
- **`src/components/BriefFormModal.jsx`**: Componente principal del formulario multi-paso que maneja la lógica y renderizado

### Configuración

- **`src/utils/briefConfig.js`**: Configuración centralizada de todos los campos por tipo de brief

### Tipos de Brief Disponibles

1. **Web Design** (`web-design`)
   - Datos del cliente
   - Detalles del proyecto web
   - Estilo visual
   - Funciones y herramientas
   - Observaciones finales

2. **Branding** (`branding`)
   - Datos del cliente
   - Detalles del proyecto de marca
   - Estilo visual
   - Entregables
   - Observaciones finales

3. **Social Media** (`social-media`)
   - Datos del cliente
   - Detalles del proyecto
   - Estilo visual
   - Necesidades de contenido
   - Observaciones finales

4. **Marketing Digital** (`marketing`)
   - Datos del cliente
   - Detalles del proyecto
   - Detalles de configuración
   - Objetivos
   - Observaciones finales

5. **Consultoría Business** (`consulting`)
   - Datos del cliente
   - Detalles del proyecto
   - Alcance
   - Recursos
   - Observaciones finales

## Características

- ✅ Formularios multi-paso con barra de progreso
- ✅ Validación de campos requeridos
- ✅ Campos personalizados según tipo de servicio
- ✅ Diseño responsive y accesible
- ✅ Animaciones fluidas con Framer Motion
- ✅ i18n completo (español e inglés)
- ✅ Estética coherente con el diseño de la web

## Tipos de Campos Soportados

- `text`: Campo de texto simple
- `email`: Campo de email con validación
- `tel`: Campo de teléfono
- `textarea`: Área de texto multilínea
- `select`: Lista desplegable
- `radio`: Opciones de selección única
- `checkbox`: Opciones de selección múltiple

## Uso

```jsx
import BriefFormModal from '@/components/BriefFormModal';
import { briefTypes } from '@/utils/briefConfig';

// En el componente
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBrief, setSelectedBrief] = useState(null);

// Abrir modal
setSelectedBrief(briefTypes.WEB_DESIGN);
setIsModalOpen(true);

// Renderizar
<BriefFormModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  briefType={selectedBrief}
/>
```

## Traducciones

Las traducciones están ubicadas en:
- `src/locales/es/briefs.json`
- `src/locales/en/briefs.json`

Todas las etiquetas, placeholders y opciones están completamente traducidas.

## Próximos Pasos

- [ ] Implementar integración con backend para envío de briefs
- [ ] Agregar función de adjuntar archivos
- [ ] Implementar auto-guardado de progreso
- [ ] Agregar analytics de formularios completados
- [ ] Implementar notificaciones por email al equipo

## Notas Técnicas

- Modal usa `AnimatePresence` de Framer Motion para transiciones suaves
- El modal previene scroll del body cuando está abierto
- Se puede cerrar con la tecla ESC
- Diseño optimizado para mobile-first
- Scrollbar personalizado en el contenido del modal
