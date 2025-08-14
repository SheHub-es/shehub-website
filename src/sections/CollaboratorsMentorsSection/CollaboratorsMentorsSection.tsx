import SectionWrapper from '@/components/layout/section-wrapper/SectionWrapper'
import ImageSection from '@/sections/CollaboratorsMentorsSection/elements/ImageSection'
import TextSection from '@/sections/CollaboratorsMentorsSection/elements/TextSection'
import clsx from 'clsx'
import CollaboratorArrowOrange from '../../assets/svg/collaborator-orange.svg'
import CollaboratorPlaceholder from '../../assets/svg/collaborator-placeholder.svg'
import CollaboratorComputerClockImage from '../../assets/svg/computer-clock-placeholder.svg'
import CollaboratorComputerImage from '../../assets/svg/computer-placeholder.svg'
import DiamondImage from '../../assets/svg/diamond-image.svg'
import MentorArrowPink from '../../assets/svg/mentor-pink.svg'
import MentorPlaceholder from '../../assets/svg/mentor-placeholder.svg'
import PurpleRectangle from '../../assets/svg/purple-rectangle.svg'
import PurpleTrianglesIcon from '../../assets/svg/purple-triangles.svg'
import SmileIcon from '../../assets/svg/smile-image.svg'
import SwirlArrowImage from '../../assets/svg/swirl-arrow-image.svg'

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

function CollaboratorsMentorsSection() {
  return (
    <SectionWrapper className="flex flex-col gap-[80px]">
      {CollaboratorsMentorsCopyProps.map((copy, i) => {
        const img = CollaboratorsMentorsImagesProps[i];
        return (
          <section
            key={i}
            className={clsx("flex w-full py-[64px]", copy.reverse ? "flex-row-reverse" : "flex-row")} >
            <div className="flex-1 flex items-center justify-center">
              <TextSection {...copy} />
            </div>
            <div className="flex-1 flex items-cente justify-center">
              <ImageSection {...img} />
            </div>
          </section>
        );
      })}
    </SectionWrapper>
  )
}

export default CollaboratorsMentorsSection