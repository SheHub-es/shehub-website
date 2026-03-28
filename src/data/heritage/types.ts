export type HeritageEraSlug = 'teaser' | 'intermediate' | 'current'

/** Orden de secciones en la página de equipo (líderazgo primero, luego disciplinas). */
export type HeritageRoleGroup =
  | 'cohortLead'
  | 'techLeadDevelopment'
  | 'productManager'
  | 'projectManager'
  | 'design'
  | 'frontend'
  | 'backend'
  | 'data'
  | 'qa'
  | 'other'

export type HeritageContributor = {
  firstName: string
  lastName: string
  /** Título visible (ej. «Product Manager», «Diseño UI»). */
  role: string
  roleGroup: HeritageRoleGroup
  linkedinUrl?: string
  githubUrl?: string
}
