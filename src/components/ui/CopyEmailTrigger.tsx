'use client'

import Button from '@/components/ui/Button'
import { useTranslation } from '@/hooks/useTranslation'
import { useCallback, useRef, useState } from 'react'

export const SHEHUB_INFO_EMAIL = 'info@shehub.es'

type CopyEmailTriggerProps = {
  className?: string
  children: React.ReactNode
}

export function CopyEmailTrigger({ className, children }: CopyEmailTriggerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [copied, setCopied] = useState(false)
  const { t } = useTranslation()

  const open = () => {
    setCopied(false)
    dialogRef.current?.showModal()
  }

  const close = useCallback(() => {
    dialogRef.current?.close()
    setCopied(false)
  }, [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SHEHUB_INFO_EMAIL)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        className={className}
        aria-haspopup="dialog"
        title={t('copyEmail.openLabel')}
      >
        {children}
      </button>

      <dialog
        ref={dialogRef}
        className="fixed left-1/2 top-1/2 z-100 w-[min(calc(100vw-2rem),22rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-black/10 bg-white p-6 text-black shadow-xl backdrop:bg-black/40 open:flex open:flex-col open:gap-4"
        onClick={(e) => {
          if (e.target === dialogRef.current) close()
        }}
        aria-labelledby="copy-email-title"
      >
        <h2 id="copy-email-title" className="font-(--font-weight-heavy) text-lg text-black">
          {t('copyEmail.title')}
        </h2>
        <p className="text-sm leading-relaxed text-gray-700 font-secondary">
          {t('copyEmail.description')}
        </p>
        <p className="rounded-lg bg-purple-50 px-3 py-2 font-mono text-sm font-medium text-purple-900">
          {SHEHUB_INFO_EMAIL}
        </p>
        {copied && (
          <p className="text-sm font-medium text-green-700" role="status">
            {t('copyEmail.copied')}
          </p>
        )}
        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
          <Button type="button" variant="secondary-primary" shape="rounded" size="sm" onClick={close}>
            {t('copyEmail.close')}
          </Button>
          <Button type="button" variant="primary-primary" shape="rounded" size="sm" onClick={copy}>
            {t('copyEmail.copy')}
          </Button>
        </div>
      </dialog>
    </>
  )
}
