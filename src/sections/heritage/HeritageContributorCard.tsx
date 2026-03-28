import IconLinkedIn from '@/components/icons/IconLinkedIn'
import { Icon } from '@/components/ui/Icon'
import type { HeritageContributor } from '@/data/heritage/types'
import { Github } from 'lucide-react'

type Props = {
  person: HeritageContributor
  linkedinAria: string
  githubAria: string
}

export default function HeritageContributorCard({ person, linkedinAria, githubAria }: Props) {
  const fullName = `${person.firstName} ${person.lastName}`
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_2px_8px_rgba(14,14,14,0.06)]">
      <h3 className="font-primary text-lg font-bold text-black">{fullName}</h3>
      <p className="mt-1 text-sm leading-relaxed text-gray-700 font-secondary">{person.role}</p>
      <div className="mt-4 flex items-center gap-4">
        {person.linkedinUrl ? (
          <a
            href={person.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 transition-opacity hover:opacity-80"
            aria-label={`${linkedinAria} ${fullName}`}
          >
            <Icon icon={IconLinkedIn} size="md" />
          </a>
        ) : null}
        {person.githubUrl ? (
          <a
            href={person.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 transition-opacity hover:opacity-80"
            aria-label={`${githubAria} ${fullName}`}
          >
            <Github className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden />
          </a>
        ) : null}
      </div>
    </article>
  )
}
