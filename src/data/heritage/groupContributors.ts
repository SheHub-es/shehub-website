import { HERITAGE_ROLE_GROUP_ORDER } from '@/data/heritage/roleGroupOrder'
import type { HeritageContributor, HeritageRoleGroup } from '@/data/heritage/types'

export function groupHeritageContributors(
  people: HeritageContributor[]
): { group: HeritageRoleGroup; people: HeritageContributor[] }[] {
  const buckets = new Map<HeritageRoleGroup, HeritageContributor[]>()
  for (const g of HERITAGE_ROLE_GROUP_ORDER) {
    buckets.set(g, [])
  }
  for (const person of people) {
    const key = buckets.has(person.roleGroup) ? person.roleGroup : 'other'
    buckets.get(key)!.push(person)
  }
  return HERITAGE_ROLE_GROUP_ORDER.map((group) => ({
    group,
    people: buckets.get(group) ?? [],
  })).filter((section) => section.people.length > 0)
}
