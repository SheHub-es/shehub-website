import { EVOLUTION_ROLE_GROUP_ORDER } from '@/data/evolution/roleGroupOrder'
import type { EvolutionContributor, EvolutionRoleGroup } from '@/data/evolution/types'

export function groupEvolutionContributors(
  people: EvolutionContributor[]
): { group: EvolutionRoleGroup; people: EvolutionContributor[] }[] {
  const buckets = new Map<EvolutionRoleGroup, EvolutionContributor[]>()
  for (const g of EVOLUTION_ROLE_GROUP_ORDER) {
    buckets.set(g, [])
  }
  for (const person of people) {
    const key = buckets.has(person.roleGroup) ? person.roleGroup : 'other'
    buckets.get(key)!.push(person)
  }
  return EVOLUTION_ROLE_GROUP_ORDER.map((group) => ({
    group,
    people: buckets.get(group) ?? [],
  })).filter((section) => section.people.length > 0)
}
