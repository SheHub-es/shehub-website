import type { Language } from '@/translations/types'

export type EvolutionEraSlug = 'teaser' | 'intermediate' | 'current'

/** Título de rol en tarjeta, por idioma de la UI. */
export type EvolutionContributorRole = Record<Language, string>

/** Section order on the team page (leadership first, then disciplines). */
export type EvolutionRoleGroup =
  | 'cohortLead'
  | 'cohortMentor'
  | 'techLeadDevelopment'
  | 'productManager'
  | 'projectManager'
  | 'design'
  | 'frontend'
  | 'backend'
  | 'data'
  | 'qa'
  | 'other'

export type EvolutionContributor = {
  firstName: string
  lastName: string
  /** Visible title on the card (one string per language). */
  role: EvolutionContributorRole
  roleGroup: EvolutionRoleGroup
  linkedinUrl?: string
  githubUrl?: string
}

/** Role groups where a GitHub profile link is shown. */
export const EVOLUTION_GITHUB_ROLE_GROUPS: ReadonlySet<EvolutionRoleGroup> = new Set([
  'techLeadDevelopment',
  'frontend',
  'backend',
  'data',
  'qa',
])
