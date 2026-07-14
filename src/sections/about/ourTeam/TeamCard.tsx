'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import { useId } from 'react';
import IconCircleArrowRight from '@/components/icons/IconCircleArrowRight';

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
  role: string;
  photo: StaticImageData;
  socials?: { linkedin?: string };
  description?: string;
};

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="team-card-container"
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${member.name} – ${member.role}. Click to ${flipped ? 'see photo' : 'see details'}`}
    >
      <div className={`team-card-inner ${flipped ? 'team-card-flipped' : ''}`}>
        {/* ── FRONT ── */}
        <div className="team-card-face team-card-front">
          {/* Photo area */}
          <div className="team-card-photo-wrapper">
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
          <div className="team-card-info">
            <div className="team-card-text">
              <h3 className="team-card-name">{member.name}</h3>
              <p className="team-card-role">{member.role}</p>
            </div>
            <span className="team-card-arrow" aria-hidden="true">
              <IconCircleArrowRight width={28} height={28} />
            </span>
          </div>
        </div>

        {/* ── BACK ── */}
        <div className="team-card-face team-card-back">
          <div className="team-card-back-content">
            <h3 className="team-card-name">{member.name}</h3>
            <p className="team-card-role">{member.role}</p>

            {member.description && (
              <p className="team-card-description">{member.description}</p>
            )}

            {member.socials?.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="team-card-linkedin-icon"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${member.name} LinkedIn profile`}
              >
                <LinkedInIcon width={44} height={44} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
