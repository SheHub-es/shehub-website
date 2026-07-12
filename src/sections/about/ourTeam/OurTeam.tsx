'use client';

import AnnaPhoto from '@/assets/images/ourteam/Anna.png';
import CristinaPhoto from '@/assets/images/ourteam/Cristina.png';
import JessicaPhoto from '@/assets/images/ourteam/Jessica.png';
import MonicaPhoto from '@/assets/images/ourteam/Monica.png';
import NormaPhoto from '@/assets/images/ourteam/Norma.png';
import { useTranslation } from '@/hooks/useTranslation';
import SectionWrapper from '@/sections/shared/sectionWrapper/SectionWrapper';

import { TeamCard, TeamMember } from './TeamCard';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Mónica Esteban',
    role: 'Partnerships & Tools',
    photo: MonicaPhoto,
    description: 'Our founder, heart and soul behind SheHub. Manages company partnerships and sponsorship opportunities that support our mission..',
    socials: {
      linkedin: 'https://www.linkedin.com/in/monicaestebanponce/',
    },
  },
  {
    id: '2',
    name: 'Anna Sarrià',
    role: 'Product & Projects',
    photo: AnnaPhoto,
    description: 'Oversees the roadmap of what is built in each cohort. Helps with project scopes, goals, or how to align deliverables with SheHub’s strategy.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/anna-sarria/',
    },
  },
  {
    id: '3',
    name: 'Norma Díaz-V',
    role: 'Talent & Projects',
    photo: NormaPhoto,
    description: 'Coordinates mentors, strengthens talent experience and defines development paths to improve learning and collaboration across cohorts.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/normadiazvergara/',
    },
  },
  {
    id: '4',
    name: 'Jessica Arroyo',
    role: 'IT & Tech Support',
    photo: JessicaPhoto,
    description: 'Takes care of development, GitHub, and tech stack. Supports teams with setup, troubleshooting, and keeping  technical foundation solid.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/jessica-arroyo-lebron/',
    },
  },
  {
    id: '5',
    name: 'Cristina Ariso',
    role: 'Governance & Ops',
    photo: CristinaPhoto,
    description: 'Oversees governance and operations, making sure processes, documentation, and structure stay clear, organised and aligned with our long-term vision.',
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
      className="py-24"
      style={{ backgroundColor: '#D6D4FF' }}
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

