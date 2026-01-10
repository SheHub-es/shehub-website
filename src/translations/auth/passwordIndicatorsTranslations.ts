import type { TranslationObject } from '@/translations/types';

export const passwordIndicatorsTranslations: TranslationObject = {
  // Password Match Indicator
  'password.match.success': {
    es: 'Las contraseñas coinciden',
    en: 'Passwords match',
    ca: 'Les contrasenyes coincideixen',
  },
  'password.match.error': {
    es: 'Las contraseñas no coinciden',
    en: 'Passwords do not match',
    ca: 'Les contrasenyes no coincideixen',
  },

  // Password Strength Indicator
  'password.strength.title': {
    es: 'Requisitos de contraseña:',
    en: 'Password requirements:',
    ca: 'Requisits de contrasenya:',
  },
  'password.strength.length': {
    es: '8-128 caracteres',
    en: '8-128 characters',
    ca: '8-128 caràcters',
  },
  'password.strength.lowercase': {
    es: 'Una letra minúscula (a-z)',
    en: 'One lowercase letter (a-z)',
    ca: 'Una lletra minúscula (a-z)',
  },
  'password.strength.uppercase': {
    es: 'Una letra mayúscula (A-Z)',
    en: 'One uppercase letter (A-Z)',
    ca: 'Una lletra majúscula (A-Z)',
  },
  'password.strength.number': {
    es: 'Un número (0-9)',
    en: 'One number (0-9)',
    ca: 'Un número (0-9)',
  },
  'password.strength.special': {
    es: 'Un carácter especial (!@#$...)',
    en: 'One special character (!@#$...)',
    ca: 'Un caràcter especial (!@#$...)',
  },
};