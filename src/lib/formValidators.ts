const NAME_PATTERN = /^[\p{L}\s'-]+$/u;

export const NAME_MAX_LENGTH = 100;
export const EMAIL_MAX_LENGTH = 254;

export function isValidName(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length === 0) return false;
  return NAME_PATTERN.test(trimmed);
}

export function sanitizeNameInput(value: string): string {
  return value
    .split("")
    .filter((char) => /[\p{L}\s'-]/u.test(char))
    .join("");
}

/** Basic email format validation (simplified RFC 5322). */
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > EMAIL_MAX_LENGTH) return false;
  return EMAIL_REGEX.test(trimmed);
}

export function sanitizeForSubmit(value: string, maxLength: number): string {
  return value.trim().slice(0, maxLength);
}
