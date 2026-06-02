"use client";

import Button from '@/components/ui/Button'
import HeroText from '@/sections/home/hero/components/TypewriterAnimation'
import { useTranslation } from '@/hooks/useTranslation'
import Link from 'next/link'

const TextSection = () => {
  const { t } = useTranslation();
  return (
    <div
      className="
        flex flex-col
        justify-center
        text-left
        w-full
        h-auto

        lg:h-[638px]
      "
    >
      <div
        className="
          flex flex-col
          gap-6 md:gap-8
        "
      >
        <span
          className="
            text-black
            font-[var(--font-weight-heavy)]
            text-[length:var(--text-size-400)]
            md:text-[length:var(--text-size-500)]
          "
        >
          {t('home.hero.eyebrow')}
        </span>

        <h1
          className="
            text-black
            font-[var(--font-weight-heavy)]
            tracking-tight
            text-[length:var(--text-size-900)]
            md:text-[length:var(--text-size-1000)]
            flex flex-col
          "
        >
          <div>{t('home.hero.titlePrefix')}</div>

          <div className="relative h-[60px] md:h-[80px]">
            <HeroText
              roleStrings={[
                t('home.hero.roleDev'),
                t('home.hero.roleUX'),
                t('home.hero.rolePM'),
                t('home.hero.roleData'),
                t('home.hero.roleMarketing'),
                t('home.hero.roleQA'),
              ]}
            />
          </div>
        </h1>

        <p
          className="
            text-black
            font-[var(--font-weight-default)]
            text-[length:var(--text-size-400)]
            md:text-[length:var(--text-size-500)]
            leading-[var(--spacing-line-height-body-1)]
            max-w-[90%] md:max-w-none
          "
          style={{ fontFamily: 'var(--font-secondary)' }}
        >
          {t('home.hero.paragraph')}
        </p>
      </div>

      <div
        className="
          mt-[30px]
          flex flex-col sm:flex-row
          gap-[16px]
        "
      >
        <Button
          asChild
          variant="primary-primary"
          size="sm"
          shape="rounded"
          className="w-full sm:w-auto min-w-[188px] min-h-[48px] font-[var(--font-weight-default)]"
          style={{ fontFamily: 'var(--font-secondary)' }}
        >
          <Link href="/join">{t('home.hero.ctaProject')}</Link>
        </Button>

        <Button
          asChild
          variant="secondary-primary"
          size="sm"
          shape="rounded"
          className="w-full sm:w-auto text-black min-w-[166px] min-h-[48px]"
          style={{ fontFamily: 'var(--font-secondary)' }}
        >
          <Link href="/mentors">{t('home.hero.ctaMentor')}</Link>
        </Button>
      </div>
    </div>
  )
}

export default TextSection
