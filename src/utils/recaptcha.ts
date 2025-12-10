// Archivo de ejemplo: src/utils/recaptcha.ts
// Configuración de reCAPTCHA v3

export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';
const IS_DEVELOPMENT = import.meta.env.DEV;

if (!RECAPTCHA_SITE_KEY && !IS_DEVELOPMENT) {
  console.warn('reCAPTCHA Site Key no configurado. Verifica .env');
}

/**
 * Ejecuta reCAPTCHA y retorna el token
 * En desarrollo sin clave válida, retorna un token simulado
 */
export const executeRecaptcha = async (action: string = 'submit'): Promise<string> => {
  // Si estamos en desarrollo y no tenemos una clave válida, retornar token simulado
  if (IS_DEVELOPMENT && !RECAPTCHA_SITE_KEY) {
    console.log('📝 reCAPTCHA: Usando token simulado en desarrollo');
    return 'dev-token-' + Date.now();
  }

  if (!RECAPTCHA_SITE_KEY) {
    throw new Error('reCAPTCHA no está configurado');
  }

  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.grecaptcha) {
      // En desarrollo, retornar token simulado si grecaptcha no está disponible
      if (IS_DEVELOPMENT) {
        console.log('📝 reCAPTCHA: grecaptcha no disponible, usando token simulado');
        resolve('dev-token-' + Date.now());
        return;
      }
      reject(new Error('reCAPTCHA no está cargado'));
      return;
    }

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action })
        .then((token: string) => {
          resolve(token);
        })
        .catch((error: any) => {
          // Si hay error en producción, rechazar; en desarrollo, usar token simulado
          if (IS_DEVELOPMENT) {
            console.log('📝 reCAPTCHA: Error al ejecutar, usando token simulado');
            resolve('dev-token-' + Date.now());
          } else {
            reject(error);
          }
        });
    });
  });
};

// Declaración de tipos para grecaptcha
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

