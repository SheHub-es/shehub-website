'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import IconCircleArrowRight from '@/components/icons/IconCircleArrowRight';
import IconLinkedIn from '@/components/icons/IconLinkedIn';

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
                className="team-card-linkedin"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${member.name} LinkedIn profile`}
              >
                <IconLinkedIn width={24} height={24} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>

          <span className="team-card-arrow team-card-arrow-back" aria-hidden="true">
            <IconCircleArrowRight width={28} height={28} />
          </span>
        </div>
      </div>
    </div>
  );
}
