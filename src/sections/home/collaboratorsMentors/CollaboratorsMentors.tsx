"use client";

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
import { useTranslation } from '@/hooks/useTranslation'
import clsx from 'clsx'


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

const gradientSpan = (children: React.ReactNode) => (
  <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--color-gradient-brand)' }}>{children}</span>
);

function CollaboratorsMentors() {
  const { t } = useTranslation();
  const CollaboratorsMentorsCopyProps = [
    {
      sectionHeading: t('home.collabMentors.sectionCollaborators'),
      primaryHeading: <>{t('home.collabMentors.collabHeadingBefore')} {gradientSpan(t('home.collabMentors.collabHeadingWord'))} {t('home.collabMentors.collabHeadingAfter')}</>,
      paragraphText: t('home.collabMentors.collabParagraph'),
      whatYouBringText: t('home.collabMentors.collabWhatYouBring'),
      whatWeOfferText: t('home.collabMentors.collabWhatWeOffer'),
      whatYouBringLabel: t('home.collabMentors.whatYouBring'),
      whatWeOfferLabel: t('home.collabMentors.whatWeOffer'),
      buttonText: t('home.collabMentors.ctaCollaborator'),
      buttonHref: '/collaborators',
      reverse: true as const,
    },
    {
      sectionHeading: t('home.collabMentors.sectionMentors'),
      primaryHeading: <>{gradientSpan(t('home.collabMentors.mentorHeadingHighlight'))} {t('home.collabMentors.mentorHeadingAfter')}</>,
      paragraphText: t('home.collabMentors.mentorParagraph'),
      whatWeOfferText: t('home.collabMentors.mentorWhatWeOffer'),
      whatYouBringText: t('home.collabMentors.mentorWhatYouBring'),
      whatYouBringLabel: t('home.collabMentors.whatYouBring'),
      whatWeOfferLabel: t('home.collabMentors.whatWeOffer'),
      buttonText: t('home.collabMentors.ctaMentor'),
      buttonHref: '/mentors',
    },
  ];

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
