'use client';

import { MemberCarouselCard } from '@/components/ui/carousel/CarouselCard';
import { Carousel } from '@/components/ui/carousel/index';
import { useTranslation } from '@/hooks/useTranslation';
import SectionWrapper from '@/sections/shared/sectionWrapper/SectionWrapper';

const teamMembers: MemberCarouselCard[] = [
  {
    id: '1',
    name: 'Full name',
    role: 'Job title',
    socials: {
      linkedin: 'https://linkedin.com/in/example',
    },
  },
  {
    id: '2',
    name: 'Full name',
    role: 'Job title',
    socials: {
      linkedin: 'https://linkedin.com/in/example',
    },
  },
  {
    id: '3',
    name: 'Full name',
    role: 'Job title',
    socials: {
      linkedin: 'https://linkedin.com/in/example',
    },
  },
  {
    id: '4',
    name: 'Full name',
    role: 'Job title',
    socials: {
      linkedin: 'https://linkedin.com/in/example',
    },
  },
  {
    id: '5',
    name: 'Full name',
    role: 'Job title',
    socials: {
      linkedin: 'https://linkedin.com/in/example',
    },
  },
];

export default function OurTeam() {
  const { t } = useTranslation();

  return (
    <SectionWrapper
      id="our-team"
      className="
        bg-background-light
        py-24
      "
      innerClassName="
        flex flex-col
        items-start
        gap-8
        md:gap-12
      "
    >
      {/* Header */}
      <header className="flex flex-col gap-4 w-full">
        <h2 className="font-primary font-heavy text-size-800 md:text-size-900 tracking-tight text-black">
          {t('about.ourTeam.title')}
        </h2>
        <p className="font-secondary text-size-400 md:text-size-500 text-black leading-line-height-body-1 max-w-3xl">
          {t('about.ourTeam.paragraph')}
        </p>
        <p
          className="font-secondary text-size-300 md:text-size-400 text-purple-700 italic"
          role="status"
        >
          {t('underConstruction.teamComingSoon')}
        </p>
      </header>

      {/* Carousel */}
      <div className="w-full">
        <Carousel variant="cards" items={teamMembers} loop={false} />
      </div>
    </SectionWrapper>
  );
}
