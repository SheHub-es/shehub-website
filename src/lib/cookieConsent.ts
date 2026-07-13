import { getCookie, setCookie } from '@/lib/cookies'

export type ConsentCategory = 'necessary' | 'analytics' | 'functional'
export type ConsentState = Record<ConsentCategory, boolean>

const CONSENT_COOKIE = 'cookie_consent'
const CONSENT_MAX_AGE = 60 * 60 * 24 * 90 // 3 months

export const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  functional: false,
}

const isConsentState = (value: unknown): value is ConsentState => {
  if (!value || typeof value !== 'object') return false
  const record = value as Record<string, unknown>
  return (
    typeof record.necessary === 'boolean' &&
    typeof record.analytics === 'boolean' &&
    typeof record.functional === 'boolean'
  )
}

export function getStoredConsent(): ConsentState | null {
  const raw = getCookie(CONSENT_COOKIE)
  if (!raw) return null

  try {
    const parsed: unknown = JSON.parse(raw)
    if (!isConsentState(parsed)) return null
    return { ...parsed, necessary: true }
  } catch {
    return null
  }
}

export function saveConsent(state: ConsentState) {
  const toSave: ConsentState = { ...state, necessary: true }
  setCookie(CONSENT_COOKIE, JSON.stringify(toSave), CONSENT_MAX_AGE)
}
