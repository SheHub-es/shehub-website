import CollaboratorArrowOrange from '@/assets/images/graphics/icon_collaboratorOrange.svg'
import DiamondImage from '@/assets/images/graphics/icon_diamond.svg'
import MentorArrowPink from '@/assets/images/graphics/icon_mentorPink.svg'
import PurpleRectangle from '@/assets/images/graphics/icon_purpleRectangle.svg'
import PurpleTrianglesIcon from '@/assets/images/graphics/icon_purpleTriangles.svg'
import SmileIcon from '@/assets/images/graphics/icon_smile.svg'
import SwirlArrowImage from '@/assets/images/graphics/icon_swirlArrow.svg'
import CollaboratorPlaceholder from '@/assets/images/photos/photo_collaboratorPlaceholder.webp'
import CollaboratorComputerClockImage from '@/assets/images/photos/photo_computerClockPlaceholder.webp'
import CollaboratorComputerImage from '@/assets/images/photos/photo_computerPlaceholder.webp'
import MentorPlaceholder from '@/assets/images/photos/photo_mentorPlaceholder.webp'
import ImageSection from '@/sections/home/collaboratorsMentors/components/ImageSection'
import TextSection from '@/sections/home/collaboratorsMentors/components/TextSection'
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper"
import clsx from 'clsx'

const CollaboratorsMentorsCopyProps = [
    {
        sectionHeading: "Collaborators",
        primaryHeading: <>Work as a <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--color-gradient-brand)' }}>collaborator</span> in a real tech project and build your portfolio</>,
        paragraphText: "Collaborate in multidisciplinary teams to design, build, and deliver real product features. Gain hands-on experience and create a portfolio that showcases your skills, process, and tangible results.",
        whatYouBringText: "As a collaborator, you can share your expertise, tools, or projects with a highly engaged community — and grow your impact while doing it.",
        whatWeOfferText: "We support you with visibility, feedback loops, mentorships and a trusted space to co-create with purpose-driven women.",
        buttonText: "Become a collaborator",
        reverse: true
    },
    {
        sectionHeading: "Mentors",
        primaryHeading: <><span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--color-gradient-brand)' }}>Mentor a team</span> and grow as a leader</>,
        paragraphText: "You’ve walked the path — now help someone take their next step. SheHub connects experienced professionals with emerging talent in tech and digital fields.",
        whatWeOfferText: "We make it easy and rewarding, offering a structured yet flexible experience, ongoing support, and a community that values mutual learning and care.",
        whatYouBringText: "As a mentor, your insights can spark real growth in someone’s journey — and you’ll grow too.",
        buttonText: 'Become a mentor',
    },
]

const CollaboratorsMentorsImagesProps = [
    {
        centralImage: PurpleRectangle,
        mainImage: CollaboratorPlaceholder,
        smallImage: CollaboratorComputerImage,
        arrowIcon: CollaboratorArrowOrange,
        bigIcon: PurpleTrianglesIcon,
        smallIcon: SmileIcon,
        variant: "left" as const,
    },
    {
        centralImage: PurpleRectangle,
        mainImage: MentorPlaceholder,
        smallImage: CollaboratorComputerClockImage,
        arrowIcon: MentorArrowPink,
        bigIcon: SwirlArrowImage,
        smallIcon: DiamondImage,
        variant: "right" as const
    },
]

function CollaboratorsMentors() {
  return (
    <SectionWrapper className="flex flex-col py-12 md:py-10 gap-[40px] md:gap-[80px]">
      {CollaboratorsMentorsCopyProps.map((copy, i) => {
        const img = CollaboratorsMentorsImagesProps[i];
        return (
          <section
            key={i}
            className={clsx(
              "flex flex-col md:flex-row w-full py-[24px] md:py-[64px] gap-10 md:gap-16",
              copy.reverse ? "md:flex-row-reverse" : ""
            )} >
            <div className="flex-1 flex items-start md:items-center justify-start w-full md:w-auto px-4 md:px-0 order-2 md:order-0 min-w-0">
              <div className="w-full max-w-full">
                <TextSection {...copy} />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center w-full md:w-auto order-1 md:order-0 mb-10 md:mb-0">
              <ImageSection {...img} />
            </div>
          </section>
        );
      })}
    </SectionWrapper>
  )
}

export default CollaboratorsMentors
