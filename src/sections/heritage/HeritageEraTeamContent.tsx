'use client'

import {
  getContributorsForEra,
  groupHeritageContributors,
  type HeritageEraSlug,
  type HeritageRoleGroup,
} from '@/data/heritage'
import { useTranslation } from '@/hooks/useTranslation'
import HeritageContributorCard from '@/sections/heritage/HeritageContributorCard'
import SectionWrapper from '@/sections/shared/sectionWrapper/SectionWrapper'
import Link from 'next/link'

const TITLE_KEYS: Record<HeritageEraSlug, string> = {
  teaser: 'heritage.team.title.teaser',
  intermediate: 'heritage.team.title.intermediate',
  current: 'heritage.team.title.current',
}

function roleGroupTranslationKey(group: HeritageRoleGroup): string {
  return `heritage.roleGroup.${group}`
}

type Props = {
  era: HeritageEraSlug
}

export default function HeritageEraTeamContent({ era }: Props) {
  const { t } = useTranslation()
  const people = getContributorsForEra(era)
  const sections = groupHeritageContributors(people)

  return (
    <main className="bg-background text-foreground">
      <SectionWrapper className="bg-background-footer py-10 md:py-14">
        <div className="max-w-3xl">
          <Link
            href="/heritage"
            className="text-sm font-semibold text-purple-700 underline decoration-purple-700/50 underline-offset-4 hover:text-purple-600"
          >
            {t('heritage.team.backLink')}
          </Link>
          <h1 className="mt-6 font-primary text-3xl font-bold leading-tight tracking-tight text-black md:text-4xl lg:text-5xl">
            {t(TITLE_KEYS[era])}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-800 font-secondary md:text-lg">
            {t('heritage.team.intro')}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          {sections.length === 0 ? (
            <p className="text-base italic leading-relaxed text-gray-600 font-secondary">
              {t('heritage.team.emptyEra')}
            </p>
          ) : (
            <div className="space-y-14">
              {sections.map(({ group, people: groupPeople }) => (
                <section key={group} aria-labelledby={`heritage-group-${group}`}>
                  <h2
                    id={`heritage-group-${group}`}
                    className="font-primary text-2xl font-bold text-black md:text-3xl"
                  >
                    {t(roleGroupTranslationKey(group))}
                  </h2>
                  <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {groupPeople.map((person, i) => (
                      <li key={`${person.firstName}-${person.lastName}-${i}`}>
                        <HeritageContributorCard
                          person={person}
                          linkedinAria={t('heritage.contributors.linkedinAria')}
                          githubAria={t('heritage.contributors.githubAria')}
                        />
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>
    </main>
  )
}
