import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar traducciones por namespace (cada vista/módulo)
import commonES from './locales/es/common.json';
import servicesES from './locales/es/services.json';
import contactES from './locales/es/contact.json';
import briefsES from './locales/es/briefs.json';
import blogES from './locales/es/blog.json';
import creativeES from './locales/es/creative.json';
import businessES from './locales/es/business.json';
import homeES from './locales/es/home.json';
import footerES from './locales/es/footer.json';

import commonEN from './locales/en/common.json';
import servicesEN from './locales/en/services.json';
import contactEN from './locales/en/contact.json';
import briefsEN from './locales/en/briefs.json';
import creativeEN from './locales/en/creative.json';
import businessEN from './locales/en/business.json';
import blogEN from './locales/en/blog.json';
import homeEN from './locales/en/home.json';
import footerEN from './locales/en/footer.json';

const resources = {
  es: {
    common: commonES,
    services: servicesES,
    contact: contactES,
    briefs: briefsES,
    blog: blogES,
    creative: creativeES,
    business: businessES,
    home: homeES,
    footer: footerES
  },
  en: {
    common: commonEN,
    services: servicesEN,
    contact: contactEN,
    briefs: briefsEN,
    creative: creativeEN,
    business: businessEN,
    blog: blogEN,
    home: homeEN,
    footer: footerEN
  }
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto
    defaultNS: 'common', // Namespace por defecto
    fallbackNS: 'common', // Namespace de respaldo
    debug: false,
    interpolation: {
      escapeValue: false // React ya escapa por defecto
    },
    detection: {
      // Orden de detección: primero localStorage, luego navegador
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'] // Guardar preferencia en localStorage
    }
  });

export default i18n;
