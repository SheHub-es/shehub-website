'use client'

import DocumentTitle from '@/components/layout/DocumentTitle'
import type { EvolutionContributor, EvolutionEraSlug, EvolutionRoleGroup } from '@/data/evolution/types'
import { useTranslation } from '@/hooks/useTranslation'
import SectionWrapper from '@/sections/shared/sectionWrapper/SectionWrapper'
import Link from 'next/link'
import EvolutionArchiveCta from './EvolutionArchiveCta'
import EvolutionContributorCard from './EvolutionContributorCard'

const TITLE_KEYS: Record<EvolutionEraSlug, string> = {
  teaser: 'evolution.team.title.teaser',
  intermediate: 'evolution.team.title.intermediate',
  current: 'evolution.team.title.current',
}

const ERA_BADGE_KEYS: Record<EvolutionEraSlug, string> = {
  teaser: 'evolution.team.eraBadge.teaser',
  intermediate: 'evolution.team.eraBadge.intermediate',
  current: 'evolution.team.eraBadge.current',
}

function EvolutionRoleSection({
  group,
  people,
}: {
  group: EvolutionRoleGroup
  people: EvolutionContributor[]
}) {
  const { t } = useTranslation()

  return (
    <section className="scroll-mt-10" aria-labelledby={`evolution-group-${group}`}>
      <div className="overflow-hidden rounded-2xl border border-black/6 bg-white shadow-[0_2px_24px_rgba(15,15,42,0.06)]">
        <header
          className="flex flex-col gap-4 border-b border-purple-100/80 bg-linear-to-r from-purple-50/90 via-white to-orange-50/40 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8 md:py-6"
          id={`evolution-group-${group}-header`}
        >
          <div className="flex min-w-0 items-start gap-3 md:items-center md:gap-4">
            <span className="mt-1 h-9 w-1 shrink-0 rounded-full bg-purple-400/90 md:mt-0 md:h-10" aria-hidden />
            <h3
              id={`evolution-group-${group}`}
              className="font-primary text-lg font-bold leading-tight tracking-tight text-black md:text-xl"
            >
              {t(`evolution.roleGroup.${group}`)}
            </h3>
          </div>
          <p className="shrink-0 pl-4 text-sm text-purple-950/55 font-secondary md:pl-0 md:text-right">
            <span className="font-semibold tabular-nums text-purple-900">{people.length}</span>
            <span className="mx-1.5 text-purple-300" aria-hidden>
              ·
            </span>
            {t('evolution.team.peopleListed')}
          </p>
        </header>

        <ul className="grid list-none gap-3 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-2 xl:grid-cols-3 xl:gap-4 xl:p-6">
          {people.map((person, i) => (
            <li key={`${person.firstName}-${person.lastName}-${i}`}>
              <EvolutionContributorCard person={person} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

type Props = {
  era: EvolutionEraSlug
  sections: { group: EvolutionRoleGroup; people: EvolutionContributor[] }[]
  archiveHref?: string
}

/**
 * Shared layout for all three eras: hero aligned with the evolution page and role blocks in an editorial list style.
 */
export default function EvolutionTeamPageShell({ era, sections, archiveHref }: Props) {
  const { t } = useTranslation()

  return (
    <main className="bg-background text-foreground">
      <DocumentTitle translationKey={TITLE_KEYS[era]} />
      <SectionWrapper className="bg-background-footer py-6 md:py-10">
        <header className="mx-auto max-w-3xl lg:max-w-5xl">
          <Link
            href="/evolution"
            className="group mb-4 inline-flex items-center gap-2 font-secondary text-sm font-semibold text-purple-700 transition-colors hover:text-purple-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 rounded-md -ml-0.5 pl-0.5"
          >
            <span className="text-lg leading-none transition-transform group-hover:-translate-x-0.5" aria-hidden>
              ←
            </span>
            {t('evolution.team.backToEvolution')}
          </Link>
          <p className="text-base font-semibold tracking-wide text-purple-700 md:text-lg">
            {t('evolution.hero.eyebrow')}
          </p>

          <p className="mt-2">
            <span className="inline-flex rounded-full border border-purple-200/80 bg-purple-50 px-4 py-1.5 text-xs font-bold tracking-wide text-purple-900 shadow-sm">
              {t(ERA_BADGE_KEYS[era])}
            </span>
          </p>

          <h1 className="mt-3 max-w-3xl font-primary text-3xl font-bold leading-[1.15] tracking-tight text-black md:text-4xl lg:text-5xl">
            {t(TITLE_KEYS[era])}
          </h1>

          {archiveHref ? (
            <div className="mt-4 max-w-xl">
              <EvolutionArchiveCta href={archiveHref}>
                {t(`evolution.timeline.${era}.ctaArchive`)}
              </EvolutionArchiveCta>
            </div>
          ) : null}
        </header>
      </SectionWrapper>

      <SectionWrapper
        className="bg-(--color-neutral-50) py-6 md:py-10"
        aria-labelledby={`evolution-team-${era}-contributors`}
      >
        <div className="mx-auto max-w-3xl lg:max-w-5xl">
          <h2 id={`evolution-team-${era}-contributors`} className="sr-only">
            {t('evolution.team.contributorsSectionHeading')}
          </h2>
          {sections.length === 0 ? (
            <p
              role="status"
              className="rounded-2xl border border-black/5 bg-white px-6 py-10 text-center text-base leading-relaxed text-gray-600 font-secondary shadow-sm"
            >
              {t('evolution.team.emptyEra')}
            </p>
          ) : (
            <div className="flex flex-col gap-5 md:gap-6">
              {sections.map(({ group, people }) => (
                <EvolutionRoleSection key={group} group={group} people={people} />
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>
    </main>
  )
}
