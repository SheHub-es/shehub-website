'use client'

import { evolutionEraArchiveHref, type EvolutionEraSlug } from '@/data/evolution'
import DocumentTitle from '@/components/layout/DocumentTitle'
import EvolutionArchiveCta from './EvolutionArchiveCta'
import { useTranslation } from '@/hooks/useTranslation'
import SectionWrapper from '@/sections/shared/sectionWrapper/SectionWrapper'
import { Layers, LayoutTemplate, Sparkles, type LucideIcon } from 'lucide-react'
import Link from 'next/link'

const ERA_SLUGS: EvolutionEraSlug[] = ['teaser', 'intermediate', 'current']

const ERA_ICONS: Record<EvolutionEraSlug, LucideIcon> = {
  teaser: Sparkles,
  intermediate: Layers,
  current: LayoutTemplate,
}

/** Hero pills: aligned with design-system profile list (long reference list). */
const HERO_PROFILE_KEYS = [
  'evolution.hero.profile.productManager',
  'evolution.hero.profile.productData',
  'evolution.hero.profile.projectManager',
  'evolution.hero.profile.productDesigner',
  'evolution.hero.profile.uxUiDesigner',
  'evolution.hero.profile.accessibilityDesigner',
  'evolution.hero.profile.mentors',
  'evolution.hero.profile.front',
  'evolution.hero.profile.back',
  'evolution.hero.profile.marketing',
] as const

/** Era icons and labels: soft lavender, no heavy gradient */
const eraIconPreviewClass =
  'flex size-11 shrink-0 items-center justify-center rounded-2xl border border-purple-200/80 bg-purple-50 text-purple-700 shadow-sm'
const eraIconCardClass =
  'mb-5 flex size-12 items-center justify-center rounded-2xl border border-purple-200/80 bg-purple-50 text-purple-700 shadow-sm transition-[transform,border-color] group-hover:scale-[1.02] group-hover:border-purple-300/90'
const eraBadgeClass =
  'mb-3 inline-flex w-fit rounded-full border border-purple-200/80 bg-purple-50 px-3 py-1 text-xs font-bold tracking-wide text-purple-900'

const teamCtaClassName =
  'inline-flex w-full items-center justify-center rounded-full border border-[var(--color-button-secondary-primary-border)] bg-[var(--color-button-secondary-primary-bg-default)] px-6 py-3 font-secondary text-[length:var(--text-size-400)] transition-colors hover:bg-[var(--color-button-secondary-primary-bg-hover)] sm:w-auto min-h-[44px] text-center no-underline !text-black hover:!text-black'

export default function EvolutionPageContent() {
  const { t } = useTranslation()

  const timeline = ERA_SLUGS.map((slug) => ({
    slug,
    label: t(`evolution.timeline.${slug}.label`),
    title: t(`evolution.timeline.${slug}.title`),
    body: t(`evolution.timeline.${slug}.body`),
    ctaArchive: t(`evolution.timeline.${slug}.ctaArchive`),
    archiveHref: evolutionEraArchiveHref[slug],
  }))

  return (
    <main className="bg-background text-foreground">
      <DocumentTitle translationKey="evolution.metaTitle" />
      <SectionWrapper className="bg-background-footer py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <header>
            <p className="text-accent text-base font-semibold tracking-wide md:text-lg">
              {t('evolution.hero.eyebrow')}
            </p>
            <h1 className="mt-4 font-primary text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl lg:text-6xl">
              {t('evolution.hero.titleBefore')}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'var(--color-gradient-brand)' }}
              >
                {t('evolution.hero.titleHighlight')}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-800 font-secondary md:text-lg">
              {t('evolution.hero.intro')}
            </p>
            <p
              id="evolution-profiles-heading"
              className="mt-8 text-xs font-semibold uppercase tracking-wider text-gray-500 font-secondary"
            >
              {t('evolution.hero.rolesCaption')}
            </p>
            <ul className="mt-3 flex max-w-2xl flex-wrap gap-2" aria-labelledby="evolution-profiles-heading">
              {HERO_PROFILE_KEYS.map((key) => (
                <li key={key}>
                  <span className="inline-block rounded-full border border-black/8 bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm backdrop-blur-sm font-secondary md:text-sm">
                    {t(key)}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#evolution-timeline"
              className="mt-10 inline-block text-sm font-semibold text-purple-800 underline decoration-purple-300 underline-offset-4 transition-colors hover:text-purple-950 hover:decoration-purple-500 font-secondary"
            >
              {t('evolution.hero.skipToTimeline')}
            </a>
          </header>

          <aside
            className="relative overflow-hidden rounded-3xl border border-black/6 bg-white/70 p-8 shadow-[0_8px_30px_rgba(88,28,135,0.06)] backdrop-blur-md md:p-10"
            aria-labelledby="evolution-preview-heading"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-purple-400/20 blur-3xl"
              aria-hidden
            />
            <h2
              id="evolution-preview-heading"
              className="relative font-primary text-sm font-bold uppercase tracking-wider text-gray-500"
            >
              {t('evolution.hero.previewHeading')}
            </h2>
            <ol className="relative mt-6 space-y-0">
              {ERA_SLUGS.map((slug, index) => {
                const Icon = ERA_ICONS[slug]
                const isLast = index === ERA_SLUGS.length - 1
                return (
                  <li key={slug} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={eraIconPreviewClass}>
                        <Icon className="size-5" strokeWidth={2} aria-hidden />
                      </div>
                      {!isLast ? (
                        <div className="my-1 min-h-[28px] w-px flex-1 bg-purple-200/90" aria-hidden />
                      ) : null}
                    </div>
                    <div className={isLast ? 'pb-0' : 'pb-2'}>
                      <p className="text-xs font-bold tracking-wide text-gray-500 font-secondary">{t(`evolution.timeline.${slug}.label`)}</p>
                      <h3 className="mt-1 font-primary text-base font-bold text-black md:text-lg">{t(`evolution.timeline.${slug}.title`)}</h3>
                    </div>
                  </li>
                )
              })}
            </ol>
          </aside>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="evolution-timeline"
        className="scroll-mt-8 py-16 md:py-20"
        aria-labelledby="evolution-timeline-heading"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="evolution-timeline-heading" className="sr-only">
            {t('evolution.timeline.sectionHeading')}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
          {timeline.map((item) => {
            const Icon = ERA_ICONS[item.slug]
            return (
            <article
              key={item.slug}
              className="group flex flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-[0_2px_8px_rgba(14,14,14,0.06)] transition-shadow hover:shadow-[0_10px_32px_rgba(88,28,135,0.08)] md:p-8"
            >
              <div className={eraIconCardClass}>
                <Icon className="size-6" strokeWidth={2} aria-hidden />
              </div>
              <span className={eraBadgeClass}>{item.label}</span>
              <h3 className="font-primary text-xl font-bold text-black md:text-2xl">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700 font-secondary md:text-base">
                {item.body}
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {item.archiveHref ? (
                  <EvolutionArchiveCta href={item.archiveHref}>{item.ctaArchive}</EvolutionArchiveCta>
                ) : null}
                <Link href={`/evolution/${item.slug}`} className={teamCtaClassName}>
                  {t('evolution.timeline.ctaTeam')}
                </Link>
              </div>
            </article>
            )
          })}
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}
