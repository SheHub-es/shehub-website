"use client";

import { defaultConsent, getStoredConsent, saveConsent, type ConsentCategory, type ConsentState } from '@/lib/cookieConsent'
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

export type CookieConsentContextType = {
  consent: ConsentState
  hasDecided: boolean
  acceptAll: () => void
  rejectNonEssential: () => void
  updateConsent: (partial: Partial<Record<ConsentCategory, boolean>>) => void
  openPreferences: () => void
  isPreferencesOpen: boolean
  closePreferences: () => void
}

export const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState<ConsentState>(defaultConsent)
  const [hasDecided, setHasDecided] = useState(false)
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false)

  useEffect(() => {
    const stored = getStoredConsent()
    if (stored) {
      setConsent(stored)
      setHasDecided(true)
    }
  }, [])

  const persist = useCallback((next: ConsentState) => {
    setConsent(next)
    setHasDecided(true)
    saveConsent(next)
  }, [])

  const acceptAll = useCallback(() => {
    persist({ necessary: true, analytics: true, functional: true })
  }, [persist])

  const rejectNonEssential = useCallback(() => {
    persist({ necessary: true, analytics: false, functional: false })
  }, [persist])

  const updateConsent = useCallback(
    (partial: Partial<Record<ConsentCategory, boolean>>) => {
      persist({ ...consent, ...partial, necessary: true })
    },
    [consent, persist],
  )

  const openPreferences = useCallback(() => setIsPreferencesOpen(true), [])
  const closePreferences = useCallback(() => setIsPreferencesOpen(false), [])

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasDecided,
        acceptAll,
        rejectNonEssential,
        updateConsent,
        openPreferences,
        isPreferencesOpen,
        closePreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export const useCookieConsentContext = () => {
  const context = useContext(CookieConsentContext)
  if (!context) {
    throw new Error('useCookieConsentContext must be used within a CookieConsentProvider')
  }
  return context
}
