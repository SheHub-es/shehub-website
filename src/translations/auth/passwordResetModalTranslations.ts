import type { TranslationObject } from '@/translations/types';

export const passwordResetModalTranslations: TranslationObject = {
  // Close button
  'passwordReset.modal.close': {
    es: 'Cerrar',
    en: 'Close',
    ca: 'Tancar',
  },

  // Forgot Password Section
  'passwordReset.forgot.title': {
    es: 'Recuperar Contraseña',
    en: 'Recover Password',
    ca: 'Recuperar Contrasenya',
  },
  'passwordReset.forgot.description': {
    es: 'Ingresa tu email y te enviaremos un enlace para restablecer tu contraseña',
    en: 'Enter your email and we will send you a link to reset your password',
    ca: 'Introdueix el teu email i t\'enviarem un enllaç per restablir la teva contrasenya',
  },
  'passwordReset.forgot.email.label': {
    es: 'Email',
    en: 'Email',
    ca: 'Email',
  },
  'passwordReset.forgot.email.placeholder': {
    es: 'tu@email.com',
    en: 'your@email.com',
    ca: 'el.teu@email.com',
  },
  'passwordReset.forgot.button.submit': {
    es: 'Enviar Enlace',
    en: 'Send Link',
    ca: 'Enviar Enllaç',
  },
  'passwordReset.forgot.button.loading': {
    es: 'Enviando...',
    en: 'Sending...',
    ca: 'Enviant...',
  },

  // Reset Password Section
  'passwordReset.reset.title': {
    es: 'Crear Nueva Contraseña',
    en: 'Create New Password',
    ca: 'Crear Nova Contrasenya',
  },
  'passwordReset.reset.description': {
    es: 'Ingresa tu nueva contraseña',
    en: 'Enter your new password',
    ca: 'Introdueix la teva nova contrasenya',
  },
  'passwordReset.reset.newPassword.label': {
    es: 'Nueva Contraseña',
    en: 'New Password',
    ca: 'Nova Contrasenya',
  },
  'passwordReset.reset.newPassword.placeholder': {
    es: 'Mínimo 8 caracteres',
    en: 'Minimum 8 characters',
    ca: 'Mínim 8 caràcters',
  },
  'passwordReset.reset.confirmPassword.label': {
    es: 'Confirmar Contraseña',
    en: 'Confirm Password',
    ca: 'Confirmar Contrasenya',
  },
  'passwordReset.reset.confirmPassword.placeholder': {
    es: 'Repite tu contraseña',
    en: 'Repeat your password',
    ca: 'Repeteix la teva contrasenya',
  },
  'passwordReset.reset.button.submit': {
    es: 'Cambiar Contraseña',
    en: 'Change Password',
    ca: 'Canviar Contrasenya',
  },
  'passwordReset.reset.button.loading': {
    es: 'Cambiando...',
    en: 'Changing...',
    ca: 'Canviant...',
  },

  // Error messages
  'passwordReset.error.invalidToken': {
    es: 'Token inválido o expirado',
    en: 'Invalid or expired token',
    ca: 'Token invàlid o expirat',
  },
  'passwordReset.error.validateToken': {
    es: 'Error al validar el token',
    en: 'Error validating token',
    ca: 'Error en validar el token',
  },

  // Accessibility
  'passwordReset.a11y.showPassword': {
    es: 'Mostrar contraseña',
    en: 'Show password',
    ca: 'Mostrar contrasenya',
  },
  'passwordReset.a11y.hidePassword': {
    es: 'Ocultar contraseña',
    en: 'Hide password',
    ca: 'Amagar contrasenya',
  },
};