'use client'

import { heritageEraArchiveHref, type HeritageEraSlug } from '@/data/heritage'
import { useTranslation } from '@/hooks/useTranslation'
import SectionWrapper from '@/sections/shared/sectionWrapper/SectionWrapper'
import Link from 'next/link'

const ERA_SLUGS: HeritageEraSlug[] = ['teaser', 'intermediate', 'current']

const archiveCtaClassName =
  'inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#f76702] via-[#f83c85] to-[#7858ff] px-6 py-3 font-secondary text-[length:var(--text-size-400)] !text-[var(--color-button-primary-primary-text)] shadow-sm transition-opacity hover:opacity-90 sm:w-auto min-h-[44px] text-center no-underline'

const teamCtaClassName =
  'inline-flex w-full items-center justify-center rounded-full border border-[var(--color-button-secondary-primary-border)] bg-[var(--color-button-secondary-primary-bg-default)] px-6 py-3 font-secondary text-[length:var(--text-size-400)] transition-colors hover:bg-[var(--color-button-secondary-primary-bg-hover)] sm:w-auto min-h-[44px] text-center no-underline !text-black hover:!text-black'

function HeritageArchiveCta({ href, children }: { href: string; children: React.ReactNode }) {
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={archiveCtaClassName}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={archiveCtaClassName}>
      {children}
    </Link>
  )
}

export default function HeritagePageContent() {
  const { t } = useTranslation()

  const timeline = ERA_SLUGS.map((slug) => ({
    slug,
    label: t(`heritage.timeline.${slug}.label`),
    title: t(`heritage.timeline.${slug}.title`),
    body: t(`heritage.timeline.${slug}.body`),
    ctaArchive: t(`heritage.timeline.${slug}.ctaArchive`),
    archiveHref: heritageEraArchiveHref[slug],
  }))

  return (
    <main className="bg-background text-foreground">
      <SectionWrapper className="bg-background-footer py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="text-accent text-base font-semibold tracking-wide md:text-lg">
            {t('heritage.hero.eyebrow')}
          </p>
          <h1 className="mt-4 font-primary text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl lg:text-6xl">
            {t('heritage.hero.titleBefore')}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'var(--color-gradient-brand)' }}
            >
              {t('heritage.hero.titleHighlight')}
            </span>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-gray-800 font-secondary md:text-xl">
            {t('heritage.hero.intro')}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {timeline.map((item) => (
            <article
              key={item.slug}
              className="flex flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-[0_2px_8px_rgba(14,14,14,0.06)] md:p-8"
            >
              <span
                className="mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold tracking-wide text-white"
                style={{ backgroundImage: 'var(--color-gradient-brand)' }}
              >
                {item.label}
              </span>
              <h2 className="font-primary text-xl font-bold text-black md:text-2xl">{item.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700 font-secondary md:text-base">
                {item.body}
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {item.archiveHref ? (
                  <HeritageArchiveCta href={item.archiveHref}>{item.ctaArchive}</HeritageArchiveCta>
                ) : null}
                <Link href={`/heritage/${item.slug}`} className={teamCtaClassName}>
                  {t('heritage.timeline.ctaTeam')}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </main>
  )
}
