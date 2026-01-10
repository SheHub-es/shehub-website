import type { TranslationObject } from '@/translations/types';

export const loginFormTranslations: TranslationObject = {
  'login.error.required': {
    es: 'Email y contraseña son obligatorios',
    en: 'Email and password are required',
    ca: 'Email i contrasenya són obligatoris',
  },
  'login.error.failed': {
    es: 'Error en el login',
    en: 'Login error',
    ca: 'Error en el login',
  },
  'login.error.connection': {
    es: 'Error de conexión. Verifica que el servidor esté activo.',
    en: 'Connection error. Check that the server is active.',
    ca: 'Error de connexió. Verifica que el servidor estigui actiu.',
  },
  'login.success': {
    es: 'Login exitoso',
    en: 'Login successful',
    ca: 'Login reeixit',
  },
};