'use client';

import AnnaPhoto from '@/assets/images/ourteam/Anna.png';
import CristinaPhoto from '@/assets/images/ourteam/Cristina.png';
import JessicaPhoto from '@/assets/images/ourteam/Jessica.png';
import MonicaPhoto from '@/assets/images/ourteam/Monica.png';
import NormaPhoto from '@/assets/images/ourteam/Norma.png';
import { useTranslation } from '@/hooks/useTranslation';
import SectionWrapper from '@/sections/shared/sectionWrapper/SectionWrapper';

import { TeamCard, TeamMember } from './TeamCard';
import './TeamCard.css';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Mónica Esteban',
    role: 'Partnerships & Tools',
    photo: MonicaPhoto,
    socials: {
      linkedin: 'https://www.linkedin.com/in/monicaestebanponce/',
    },
  },
  {
    id: '2',
    name: 'Anna Sarrià',
    role: 'Product & Projects',
    photo: AnnaPhoto,
    socials: {
      linkedin: 'https://www.linkedin.com/in/anna-sarria/',
    },
  },
  {
    id: '3',
    name: 'Norma Díaz-V',
    role: 'Talent & Projects',
    photo: NormaPhoto,
    socials: {
      linkedin: 'https://www.linkedin.com/in/normadiazvergara/',
    },
  },
  {
    id: '4',
    name: 'Jessica Arroyo',
    role: 'IT & Tech Support',
    photo: JessicaPhoto,
    socials: {
      linkedin: 'https://www.linkedin.com/in/jessica-arroyo-lebron/',
    },
  },
  {
    id: '5',
    name: 'Cristina Ariso',
    role: 'Governance & Ops',
    photo: CristinaPhoto,
    socials: {
      linkedin: 'https://www.linkedin.com/in/cristinaariso/',
    },
  },
];

export default function OurTeam() {
  const { t } = useTranslation();

  return (
    <SectionWrapper
      id="our-team"
      className="bg-background-light py-24"
      innerClassName="flex flex-col items-center gap-8 md:gap-12"
    >
      {/* Header */}
      <header className="flex flex-col items-center text-center gap-4 w-full max-w-2xl">
        <h2 className="font-primary font-heavy text-size-800 md:text-size-900 tracking-tight text-black">
          {t('about.ourTeam.title')}
        </h2>
        <p className="font-secondary text-size-400 md:text-size-500 text-black leading-line-height-body-1">
          {t('about.ourTeam.paragraph')}
        </p>
      </header>

      {/* Team Grid */}
      <div className="team-grid">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </SectionWrapper>
  );
}

