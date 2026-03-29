import type { EvolutionEraSlug } from '@/data/evolution/types'

export const EVOLUTION_ERA_SLUGS: EvolutionEraSlug[] = ['teaser', 'intermediate', 'current']

export function isEvolutionEraSlug(value: string): value is EvolutionEraSlug {
  return EVOLUTION_ERA_SLUGS.includes(value as EvolutionEraSlug)
}

/**
 * Primary archive link per era (opens in a new tab when https).
 * Current era has no button: the user is already on this site.
 */
export const evolutionEraArchiveHref: Record<EvolutionEraSlug, string | undefined> = {
  teaser: 'https://teaser.shehub.es/',
  intermediate: 'https://shehub-xvlf.vercel.app/',
  current: undefined,
}
