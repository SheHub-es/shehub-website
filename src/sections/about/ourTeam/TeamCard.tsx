'use client';

import Image, { StaticImageData } from 'next/image';
import { useId, useState } from 'react';

import IconCircleArrowRight from '@/components/icons/IconCircleArrowRight';
import { useTranslation } from '@/hooks/useTranslation';

/* Cara de la card (frente/dorso). El fondo se aplica en cada cara. */
const CARD_FACE =
  'absolute inset-0 flex flex-col overflow-hidden rounded-[72px] backface-hidden shadow-[0_4px_4px_0_rgba(136,136,136,0.24)]';

/* Gradiente de marca del rol (naranja → rosa → morado). */
const ROLE_GRADIENT =
  'bg-[image:linear-gradient(90deg,#F76702,#E81A60,#7858FF)] bg-clip-text text-transparent';

const ICON_TRANSITION =
  'transition-transform duration-150 ease-[ease] motion-reduce:transition-none';

function LinkedInIcon({ width = 44, height = 44 }: { width?: number; height?: number }) {
  const clipId = useId();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 44 44">
      <g clipPath={`url(#${clipId})`}>
        <path fill="#0E0E0E" d="M36.025 5.5H7.975C6.6 5.5 5.5 6.6 5.5 7.838v28.187c0 1.238 1.1 2.337 2.475 2.337h28.05c1.375 0 2.475-1.1 2.475-2.337V7.837C38.5 6.6 37.4 5.5 36.025 5.5ZM15.263 33.55H10.45V17.875h4.813V33.55Zm-2.338-17.875c-1.513 0-2.888-1.238-2.888-2.888S11.275 9.9 12.925 9.9c1.512 0 2.887 1.237 2.887 2.887s-1.374 2.888-2.887 2.888Zm20.762 17.738h-4.812v-7.7c0-1.788 0-4.263-2.613-4.263-2.612 0-2.887 2.063-2.887 3.988v7.837h-4.813v-15.4H23.1v2.063h.137c.688-1.238 2.338-2.613 4.676-2.613 4.95 0 5.912 3.3 5.912 7.563v8.524h-.138Z"/>
      </g>
      <defs>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0h44v44H0z"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export type TeamMember = {
  id: string;
  name: string;
  roleKey: string;
  photo: StaticImageData;
  socials?: { linkedin?: string };
  descriptionKey?: string;
};

interface TeamCardProps {
  member: TeamMember;
  /** Clases de colocación en la grid (col-span / col-start), inyectadas por OurTeam. */
  className?: string;
}

export function TeamCard({ member, className = '' }: TeamCardProps) {
  const [flipped, setFlipped] = useState(false);
  const { t } = useTranslation();
  const role = t(member.roleKey);
  const description = member.descriptionKey ? t(member.descriptionKey) : undefined;

  return (
    <div
      className={`group flex w-[366px] h-[518px] flex-col items-start py-3 cursor-pointer outline-none perspective-[900px] backface-hidden [-webkit-tap-highlight-color:transparent] focus-visible:rounded-[72px] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-card-focus)] max-md:h-auto max-md:w-[min(366px,calc(100vw_-_32px))] max-md:aspect-[366/518] ${className}`}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${member.name} – ${role}. ${flipped ? t('about.ourTeam.card.clickToSeePhoto') : t('about.ourTeam.card.clickToSeeDetails')}`}
    >
      <div
        className={`relative h-full w-full transform-3d will-change-transform transition-transform duration-600 ease-in-out motion-reduce:transition-none ${flipped ? 'rotate-y-180' : ''}`}
      >
        {/* ── FRONT ── */}
        <div className={`${CARD_FACE} z-[2] bg-background-light`}>
          {/* Photo area */}
          <div className="relative mx-6 mt-6 flex h-[342px] w-[318px] shrink-0 flex-col items-center justify-center gap-2.5 self-stretch overflow-hidden rounded-t-[82px] bg-white px-3 py-[74px]">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 160px, 220px"
              className="object-cover object-top"
              placeholder="blur"
            />
          </div>

          {/* Info row */}
          <div className="flex items-end justify-between gap-1.5 px-3.5 pt-3 pb-3.5 max-md:px-4 max-md:pt-3.5 max-md:pb-4">
            <div className="flex min-w-0 flex-col gap-px">
              <h3 className="m-6 overflow-hidden text-ellipsis whitespace-nowrap text-left font-secondary font-heavy text-size-600 leading-[1.4] text-foreground max-md:text-size-300">
                {member.name}
              </h3>
              <p
                className={`-my-5 mx-5 h-[60px] w-[238px] text-left font-secondary font-heavy text-size-500 leading-6 max-md:text-[13px] ${ROLE_GRADIENT}`}
              >
                {role}
              </p>
            </div>
            <span
              className={`absolute right-3 bottom-3 m-6 flex items-center justify-center rounded-full p-0 cursor-pointer text-purple-600 group-hover:translate-x-0.5 group-hover:text-white ${ICON_TRANSITION}`}
              aria-hidden="true"
            >
              <IconCircleArrowRight width={52} height={52} />
            </span>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className={`${CARD_FACE} z-[1] rotate-y-180 justify-between border border-purple-200 bg-white px-[18px] pt-6 pb-3.5`}
        >
          <div className="flex min-h-0 flex-1 flex-col gap-2.5">
            <h3 className="m-6 overflow-hidden text-ellipsis whitespace-nowrap text-left font-primary font-heavy text-size-600 leading-[1.4] text-foreground">
              {member.name}
            </h3>
            <p
              className={`-my-5 mx-5 h-[60px] w-[238px] text-left font-secondary font-heavy text-size-400 leading-6 ${ROLE_GRADIENT}`}
            >
              {role}
            </p>

            {description && (
              <p className="mx-6 mt-4 flex-1 overflow-y-auto font-secondary font-default text-size-400 leading-7 text-neutral-700">
                {description}
              </p>
            )}

            {member.socials?.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`absolute right-3 bottom-3 m-6 flex items-center justify-center hover:scale-110 [&_svg]:fill-current ${ICON_TRANSITION}`}
                onClick={(e) => e.stopPropagation()}
                aria-label={`${member.name} ${t('about.ourTeam.card.linkedinProfile')}`}
              >
                <LinkedInIcon width={44} height={44} />
              </a>
            )}
          </div>

          <button
            className={`absolute bottom-3 left-3 m-5 flex items-center justify-center p-0 cursor-pointer hover:-translate-x-0.5 ${ICON_TRANSITION}`}
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(false);
            }}
            aria-label={t('about.ourTeam.card.goBack')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="none" viewBox="0 0 52 52">
              <path stroke="#0E0E0E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M26 17.333 17.333 26m0 0L26 34.667M17.333 26h17.334m13 0c0 11.966-9.7 21.667-21.667 21.667-11.966 0-21.667-9.7-21.667-21.667 0-11.966 9.7-21.667 21.667-21.667 11.966 0 21.667 9.7 21.667 21.667Z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
