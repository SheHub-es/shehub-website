'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { useTranslation } from '@/hooks/useTranslation'
import { useEffect } from 'react'

const TITLE_SUFFIX = ' | SheHub'

type Props = {
  translationKey: string
}

/** Sync document.title with the active language (server metadata only reads the initial cookie). */
export default function DocumentTitle({ translationKey }: Props) {
  const { t } = useTranslation()
  const { language } = useLanguage()

  // Context `t` is not stable; when `language` changes the effect re-reads the correct translation.
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const base = t(translationKey).trim()
    if (base) {
      document.title = `${base}${TITLE_SUFFIX}`
    }
  }, [language, translationKey])
  /* eslint-enable react-hooks/exhaustive-deps */

  return null
}
