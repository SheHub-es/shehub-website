import Collaborator from "@/sections/home/collaboratorsMentors/Collaborator"
import Mentor from "@/sections/home/collaboratorsMentors/Mentor"
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper"

export default function CollaboratorsMentors() {
  return (
    <SectionWrapper className="flex flex-col gap-32 md:gap-40">
      <Collaborator />
      <Mentor />
    </SectionWrapper>
  )
}
