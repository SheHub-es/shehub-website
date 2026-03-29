'use client'

import IconGitHub from '@/components/icons/IconGitHub'
import LinkedinLogo from '@/components/icons/custom/LinkedinLogo'
import { EVOLUTION_GITHUB_ROLE_GROUPS } from '@/data/evolution'
import type { EvolutionContributor } from '@/data/evolution/types'
import { useLanguage } from '@/hooks/useLanguage'
import { useTranslation } from '@/hooks/useTranslation'

const iconSlotClass =
  'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple-200/60 bg-white/90 text-purple-700 shadow-sm transition-colors hover:border-purple-300 hover:bg-white hover:text-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]'

const iconSlotMutedClass =
  'inline-flex h-11 w-11 shrink-0 cursor-default items-center justify-center rounded-full border border-dashed border-purple-200/45 bg-purple-50/50 text-purple-400'

type Props = {
  person: EvolutionContributor
}

export default function EvolutionContributorCard({ person }: Props) {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const fullName = `${person.firstName} ${person.lastName}`
  const roleLabel = person.role[language] ?? person.role.es
  const linkedinAria = t('evolution.contributors.linkedinAria')
  const githubAria = t('evolution.contributors.githubAria')
  const linkedinMissing = t('evolution.contributors.linkedinUnavailable')
  const githubMissing = t('evolution.contributors.githubUnavailable')
  const showGithub = EVOLUTION_GITHUB_ROLE_GROUPS.has(person.roleGroup)

  return (
    <article className="group rounded-xl border border-purple-200/35 bg-purple-50/80 px-5 py-4 shadow-none transition-[background-color,border-color,box-shadow] duration-200 hover:border-purple-300/50 hover:bg-purple-100/90 hover:shadow-[0_6px_20px_rgba(88,28,135,0.08)] md:px-6 md:py-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <h3 className="font-primary text-base font-bold leading-snug text-black md:text-lg">{fullName}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-purple-950/70 font-secondary">{roleLabel}</p>
        </div>

        <div className="flex shrink-0 items-center gap-2.5 sm:pt-0.5">
          {person.linkedinUrl ? (
            <a
              href={person.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={iconSlotClass}
            >
              <span className="sr-only">
                {linkedinAria} {fullName}. {t('evolution.a11y.opensInNewTab')}
              </span>
              <LinkedinLogo className="h-[22px] w-[22px]" aria-hidden />
            </a>
          ) : (
            <span className={iconSlotMutedClass} title={linkedinMissing}>
              <LinkedinLogo className="h-[22px] w-[22px] opacity-45" aria-hidden />
              <span className="sr-only">
                {linkedinMissing} — {fullName}
              </span>
            </span>
          )}

          {showGithub ? (
            person.githubUrl ? (
              <a
                href={person.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={iconSlotClass}
              >
                <span className="sr-only">
                  {githubAria} {fullName}. {t('evolution.a11y.opensInNewTab')}
                </span>
                <IconGitHub className="h-[22px] w-[22px]" aria-hidden />
              </a>
            ) : (
              <span className={iconSlotMutedClass} title={githubMissing}>
                <IconGitHub className="h-[22px] w-[22px] opacity-45" aria-hidden />
                <span className="sr-only">
                  {githubMissing} — {fullName}
                </span>
              </span>
            )
          ) : null}
        </div>
      </div>
    </article>
  )
}
