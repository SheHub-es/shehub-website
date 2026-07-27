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
    roleKey: 'about.ourTeam.monica.role',
    photo: MonicaPhoto,
    descriptionKey: 'about.ourTeam.monica.description',
    socials: {
      linkedin: 'https://www.linkedin.com/in/monicaestebanponce/',
    },
  },
  {
    id: '2',
    name: 'Anna Sarrià',
    roleKey: 'about.ourTeam.anna.role',
    photo: AnnaPhoto,
    descriptionKey: 'about.ourTeam.anna.description',
    socials: {
      linkedin: 'https://www.linkedin.com/in/anna-sarria/',
    },
  },
  {
    id: '3',
    name: 'Norma Díaz-Vergara',
    roleKey: 'about.ourTeam.norma.role',
    photo: NormaPhoto,
    descriptionKey: 'about.ourTeam.norma.description',
    socials: {
      linkedin: 'https://www.linkedin.com/in/normadiazvergara/',
    },
  },
  {
    id: '4',
    name: 'Jessica Arroyo',
    roleKey: 'about.ourTeam.jessica.role',
    photo: JessicaPhoto,
    descriptionKey: 'about.ourTeam.jessica.description',
    socials: {
      linkedin: 'https://www.linkedin.com/in/jessica-arroyo-lebron/',
    },
  },
  {
    id: '5',
    name: 'Cristina Ariso',
    roleKey: 'about.ourTeam.cristina.role',
    photo: CristinaPhoto,
    descriptionKey: 'about.ourTeam.cristina.description',
    socials: {
      linkedin: 'https://www.linkedin.com/in/cristinaariso/',
    },
  },
];

/**
 * Colocación en la grid de 6 columnas (≥768px): las tres primeras ocupan 2
 * columnas cada una; las dos últimas se centran en la fila inferior.
 */
const CARD_PLACEMENT = [
  'md:col-span-2',
  'md:col-span-2',
  'md:col-span-2',
  'md:col-start-2 md:col-end-4',
  'md:col-start-4 md:col-end-6',
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
      <div className="grid w-full max-w-[1200px] grid-cols-1 justify-center gap-6 md:grid-cols-6 md:gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={member.id}
            member={member}
            className={`max-md:justify-self-center ${CARD_PLACEMENT[index] ?? 'md:col-span-2'}`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

