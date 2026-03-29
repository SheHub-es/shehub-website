import type { EvolutionRoleGroup } from '@/data/evolution/types'

/**
 * Block order in “Who made it possible”.
 * Cohort mentors are listed last.
 */
export const EVOLUTION_ROLE_GROUP_ORDER: EvolutionRoleGroup[] = [
  'productManager',
  'techLeadDevelopment',
  'frontend',
  'backend',
  'data',
  'qa',
  'design',
  'projectManager',
  'cohortLead',
  'other',
  'cohortMentor',
]
