import { HERITAGE_ERA_SLUGS, isHeritageEraSlug, type HeritageEraSlug } from '@/data/heritage'
import HeritageEraTeamContent from '@/sections/heritage/HeritageEraTeamContent'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const TEAM_PAGE_TITLE: Record<HeritageEraSlug, string> = {
  teaser: 'Equipo · Teaser | SheHub',
  intermediate: 'Equipo · Sitio intermedio | SheHub',
  current: 'Equipo · Sitio actual | SheHub',
}

const TEAM_PAGE_DESCRIPTION: Record<HeritageEraSlug, string> = {
  teaser: 'Personas que participaron en la teaser inicial del sitio SheHub, por rol.',
  intermediate: 'Personas que participaron en la segunda versión del sitio SheHub, por rol.',
  current: 'Personas que participan en la web actual y design system de SheHub, por rol.',
}

type Props = {
  params: Promise<{ era: string }>
}

export function generateStaticParams() {
  return HERITAGE_ERA_SLUGS.map((era) => ({ era }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { era } = await params
  if (!isHeritageEraSlug(era)) {
    return {}
  }
  return {
    title: TEAM_PAGE_TITLE[era],
    description: TEAM_PAGE_DESCRIPTION[era],
  }
}

export default async function HeritageEraPage({ params }: Props) {
  const { era } = await params
  if (!isHeritageEraSlug(era)) {
    notFound()
  }
  return <HeritageEraTeamContent era={era} />
}
