/**
 * Validadores reutilizables para formularios.
 * Solo letras, espacios, guiones y apóstrofes (nombres tipo "María", "O'Connor", "Jean-Pierre").
 * Incluye letras con acentos y ñ.
 */
const NAME_PATTERN = /^[\p{L}\s'-]+$/u;

export const NAME_MAX_LENGTH = 100;
export const EMAIL_MAX_LENGTH = 254;

export function isValidName(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length === 0) return false;
  return NAME_PATTERN.test(trimmed);
}

/**
 * Filtra el valor para que solo contenga caracteres permitidos en nombre/apellido.
 * Evita que se puedan escribir números u otros caracteres no válidos.
 */
export function sanitizeNameInput(value: string): string {
  return value
    .split("")
    .filter((char) => /[\p{L}\s'-]/u.test(char))
    .join("");
}

/** Validación básica de formato email (RFC 5322 simplificado). */
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > EMAIL_MAX_LENGTH) return false;
  return EMAIL_REGEX.test(trimmed);
}

/** Trim y límite de longitud para enviar al backend (evitar payloads enormes). */
export function sanitizeForSubmit(value: string, maxLength: number): string {
  return value.trim().slice(0, maxLength);
}
