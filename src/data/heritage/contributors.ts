import type { HeritageContributor, HeritageEraSlug } from '@/data/heritage/types'

/**
 * Personas por etapa del sitio. Añade filas con `roleGroup` para que aparezcan bajo el bloque correcto.
 *
 * Ejemplo (repite en cada era si aplica, p. ej. tech lead en todas):
 * {
 *   firstName: 'Nombre',
 *   lastName: 'Apellido',
 *   role: 'Tech Lead de desarrollo',
 *   roleGroup: 'techLeadDevelopment',
 *   linkedinUrl: 'https://www.linkedin.com/in/...',
 *   githubUrl: 'https://github.com/...',
 * }
 */
const teaser: HeritageContributor[] = []

const intermediate: HeritageContributor[] = []

/** Sitio actual: varias cohorts; sigue en desarrollo — añade aquí a cada participante. */
const current: HeritageContributor[] = []

export const heritageContributorsByEra: Record<HeritageEraSlug, HeritageContributor[]> = {
  teaser,
  intermediate,
  current,
}

export function getContributorsForEra(era: HeritageEraSlug): HeritageContributor[] {
  return heritageContributorsByEra[era]
}
