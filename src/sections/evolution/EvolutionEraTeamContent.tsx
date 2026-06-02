'use client'

import {
  evolutionEraArchiveHref,
  getContributorsForEra,
  groupEvolutionContributors,
} from '@/data/evolution'
import type { EvolutionEraSlug } from '@/data/evolution/types'
import EvolutionTeamPageShell from './EvolutionTeamPageShell'

type Props = {
  era: EvolutionEraSlug
}

export default function EvolutionEraTeamContent({ era }: Props) {
  const people = getContributorsForEra(era)
  const sections = groupEvolutionContributors(people)

  return (
    <EvolutionTeamPageShell
      era={era}
      sections={sections}
      archiveHref={evolutionEraArchiveHref[era]}
    />
  )
}
