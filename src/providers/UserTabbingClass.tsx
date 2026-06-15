'use client'

import { useEffect } from 'react'

/**
 * Adds `user-is-tabbing` on <html> when using Tab (or other focus keys).
 * Any pointer removes it: focus ring/border styling applies only for keyboard users.
 */
export function UserTabbingClass() {
  useEffect(() => {
    const root = document.documentElement

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        root.classList.add('user-is-tabbing')
      }
    }

    const onPointerDown = () => {
      root.classList.remove('user-is-tabbing')
    }

    const capture = true
    const touchOpts: AddEventListenerOptions = { capture, passive: true }
    window.addEventListener('keydown', onKeyDown, capture)
    window.addEventListener('mousedown', onPointerDown, capture)
    window.addEventListener('touchstart', onPointerDown, touchOpts)

    return () => {
      window.removeEventListener('keydown', onKeyDown, capture)
      window.removeEventListener('mousedown', onPointerDown, capture)
      window.removeEventListener('touchstart', onPointerDown, touchOpts)
    }
  }, [])

  return null
}
