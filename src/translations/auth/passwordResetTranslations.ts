import type { TranslationObject } from '@/translations/types';

export const passwordResetTranslations: TranslationObject = {
  // Forgot Password errors
  'passwordReset.forgot.error.send': {
    es: 'Error al enviar el email. Intenta nuevamente.',
    en: 'Error sending email. Please try again.',
    ca: 'Error en enviar l\'email. Torna-ho a provar.',
  },

  // Reset Password errors
  'passwordReset.reset.error.mismatch': {
    es: 'Las contraseñas no coinciden',
    en: 'Passwords do not match',
    ca: 'Les contrasenyes no coincideixen',
  },
  'passwordReset.reset.error.length': {
    es: 'La contraseña debe tener al menos 8 caracteres',
    en: 'Password must be at least 8 characters',
    ca: 'La contrasenya ha de tenir almenys 8 caràcters',
  },
  'passwordReset.reset.error.failed': {
    es: 'Error al restablecer la contraseña',
    en: 'Error resetting password',
    ca: 'Error en restablir la contrasenya',
  },
};