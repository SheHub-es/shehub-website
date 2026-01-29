import type { TranslationObject } from '@/translations/types';

export const registerFormTranslations: TranslationObject = {
  // Validation errors
  'register.error.required': {
    es: 'Todos los campos son obligatorios',
    en: 'All fields are required',
    ca: 'Tots els camps són obligatoris',
  },
  'register.error.terms': {
    es: 'Debes aceptar los términos de privacidad para crear una cuenta',
    en: 'You must accept the privacy terms to create an account',
    ca: 'Has d\'acceptar els termes de privacitat per crear un compte',
  },
  'register.error.firstName.invalid': {
    es: 'El nombre solo puede contener letras, espacios, guiones o apóstrofes',
    en: 'First name can only contain letters, spaces, hyphens or apostrophes',
    ca: 'El nom només pot contenir lletres, espais, guions o apòstrofs',
  },
  'register.error.lastName.invalid': {
    es: 'El apellido solo puede contener letras, espacios, guiones o apóstrofes',
    en: 'Last name can only contain letters, spaces, hyphens or apostrophes',
    ca: 'El cognom només pot contenir lletres, espais, guions o apòstrofs',
  },

  // Password validation errors
  'register.error.password.minLength': {
    es: 'La contraseña debe tener al menos 8 caracteres',
    en: 'Password must be at least 8 characters',
    ca: 'La contrasenya ha de tenir almenys 8 caràcters',
  },
  'register.error.password.maxLength': {
    es: 'La contraseña no debe exceder 128 caracteres',
    en: 'Password must not exceed 128 characters',
    ca: 'La contrasenya no ha de superar 128 caràcters',
  },
  'register.error.password.lowercase': {
    es: 'La contraseña debe contener al menos una letra minúscula',
    en: 'Password must contain at least one lowercase letter',
    ca: 'La contrasenya ha de contenir almenys una lletra minúscula',
  },
  'register.error.password.uppercase': {
    es: 'La contraseña debe contener al menos una letra mayúscula',
    en: 'Password must contain at least one uppercase letter',
    ca: 'La contrasenya ha de contenir almenys una lletra majúscula',
  },
  'register.error.password.number': {
    es: 'La contraseña debe contener al menos un número',
    en: 'Password must contain at least one number',
    ca: 'La contrasenya ha de contenir almenys un número',
  },
  'register.error.password.special': {
    es: 'La contraseña debe contener al menos un carácter especial (!@#$%^&*()_+-=[]{}|;:,.<>?)',
    en: 'Password must contain at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)',
    ca: 'La contrasenya ha de contenir almenys un caràcter especial (!@#$%^&*()_+-=[]{}|;:,.<>?)',
  },
  'register.error.password.mismatch': {
    es: 'Las contraseñas no coinciden',
    en: 'Passwords do not match',
    ca: 'Les contrasenyes no coincideixen',
  },

  // General errors
  'register.error.failed': {
    es: 'Error en el registro',
    en: 'Registration error',
    ca: 'Error en el registre',
  },
  'register.error.connection': {
    es: 'Error de conexión. Verifica que el servidor esté activo.',
    en: 'Connection error. Check that the server is active.',
    ca: 'Error de connexió. Verifica que el servidor estigui actiu.',
  },

  // Success message
  'register.success': {
    es: 'Usuario registrado exitosamente',
    en: 'User registered successfully',
    ca: 'Usuari registrat amb èxit',
  },
};