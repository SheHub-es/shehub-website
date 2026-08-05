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
    icon: 'heartHandshake',
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
    icon: 'filePen',
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
    icon: 'handHeart',
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
    icon: 'handHeart',
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
    icon: 'messageHeart',
    photo: CristinaPhoto,
    descriptionKey: 'about.ourTeam.cristina.description',
    socials: {
      linkedin: 'https://www.linkedin.com/in/cristinaariso/',
    },
  },
];

/**
 * Colocación en la grid de 6 columnas (desktop, ≥1024px): las tres primeras
 * ocupan 2 columnas cada una; las dos últimas se centran en la fila inferior.
 * En tablet (768–1023px) la grid es de 2 columnas y el flujo natural ya da
 * el reparto 2 / 2 / 1, así que estas clases no aplican.
 */
const CARD_PLACEMENT = [
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-start-2 lg:col-end-4',
  'lg:col-start-4 lg:col-end-6',
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

      {/*
        Degradado de marca de los iconos de rol. Se declara una sola vez para
        toda la sección y las cards lo referencian por id; los SVG no pueden
        usar background-clip como el texto del rol.
      */}
      <svg aria-hidden="true" focusable="false" width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="team-role-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#F76702" />
            <stop offset="0.5" stopColor="#E81A60" />
            <stop offset="1" stopColor="#7858FF" />
          </linearGradient>
        </defs>
      </svg>

      {/* Team Grid */}
      <div className="grid w-full max-w-[366px] grid-cols-1 justify-center gap-6 md:max-w-none md:grid-cols-2 md:gap-8 lg:max-w-[1200px] lg:grid-cols-6">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={member.id}
            member={member}
            className={`max-lg:justify-self-center ${CARD_PLACEMENT[index] ?? 'lg:col-span-2'}`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

