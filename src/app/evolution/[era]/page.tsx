import { EVOLUTION_ERA_SLUGS, isEvolutionEraSlug, type EvolutionEraSlug } from '@/data/evolution'
import EvolutionEraTeamContent from '@/sections/evolution/EvolutionEraTeamContent'
import { getLanguageFromCookies, getServerTranslation } from '@/lib/serverTranslation'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const TEAM_TITLE_KEY: Record<EvolutionEraSlug, string> = {
  teaser: 'evolution.team.title.teaser',
  intermediate: 'evolution.team.title.intermediate',
  current: 'evolution.team.title.current',
}

const TEAM_DESC_KEY: Record<EvolutionEraSlug, string> = {
  teaser: 'evolution.team.metaDescription.teaser',
  intermediate: 'evolution.team.metaDescription.intermediate',
  current: 'evolution.team.metaDescription.current',
}

type Props = {
  params: Promise<{ era: string }>
}

export function generateStaticParams() {
  return EVOLUTION_ERA_SLUGS.map((era) => ({ era }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { era } = await params
  if (!isEvolutionEraSlug(era)) {
    return {}
  }
  const lang = await getLanguageFromCookies()
  return {
    title: getServerTranslation(lang, TEAM_TITLE_KEY[era]),
    description: getServerTranslation(lang, TEAM_DESC_KEY[era]),
  }
}

export default async function EvolutionEraPage({ params }: Props) {
  const { era } = await params
  if (!isEvolutionEraSlug(era)) {
    notFound()
  }
  return <EvolutionEraTeamContent era={era} />
}
