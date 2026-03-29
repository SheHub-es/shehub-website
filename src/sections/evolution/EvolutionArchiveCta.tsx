'use client'

import { GRADIENT_PRIMARY_SURFACE_CLASS } from '@/lib/brandUi'
import { useTranslation } from '@/hooks/useTranslation'
import { cn, isHttpUrl } from '@/lib/utils'
import Link from 'next/link'
import type { ReactNode } from 'react'

export const evolutionArchiveCtaClassName = cn(
  GRADIENT_PRIMARY_SURFACE_CLASS,
  'inline-flex w-full items-center justify-center rounded-full px-6 py-3 font-secondary text-[length:var(--text-size-400)] shadow-sm sm:w-auto min-h-[44px] text-center no-underline',
)

type Props = {
  href: string
  children: ReactNode
}

export default function EvolutionArchiveCta({ href, children }: Props) {
  const { t } = useTranslation()

  if (isHttpUrl(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={evolutionArchiveCtaClassName}>
        {children}
        <span className="sr-only"> {t('evolution.a11y.opensInNewTab')}</span>
      </a>
    )
  }
  return (
    <Link href={href} className={evolutionArchiveCtaClassName}>
      {children}
    </Link>
  )
}
