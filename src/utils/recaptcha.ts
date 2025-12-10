// Archivo de ejemplo: src/utils/recaptcha.ts
// Configuración de reCAPTCHA v3

export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';

if (!RECAPTCHA_SITE_KEY) {
  console.warn('reCAPTCHA Site Key no configurado. Verifica .env');
}
