import type { HeritageEraSlug } from '@/data/heritage/types'

export const HERITAGE_ERA_SLUGS: HeritageEraSlug[] = ['teaser', 'intermediate', 'current']

export function isHeritageEraSlug(value: string): value is HeritageEraSlug {
  return HERITAGE_ERA_SLUGS.includes(value as HeritageEraSlug)
}

/**
 * Enlace principal por etapa (abre en nueva pestaña si es https).
 * La etapa actual no lleva botón: el usuario ya está en este sitio.
 */
export const heritageEraArchiveHref: Record<HeritageEraSlug, string | undefined> = {
  teaser: 'https://teaser.shehub.es/',
  intermediate: 'https://shehub-xvlf.vercel.app/',
  current: undefined,
}
