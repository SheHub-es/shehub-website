"use client";

import { Partner, partnersData } from '@/sections/partners/hero/components/PartnerLogos';
import Image, { StaticImageData } from 'next/image';
import { useMemo } from 'react';

const PartnerLogo = ({ src, alt, isWide }: { 
  src: string | StaticImageData; 
  alt: string;
  isWide?: boolean;
}) => {
  // Wide logos: smaller height to compensate for width
  // Compact logos: larger height for visual balance
  const heightClass = isWide 
    ? "h-8 sm:h-10 md:h-12" 
    : "h-12 sm:h-14 md:h-16";
  
  return (
    <figure className="flex items-center justify-center h-full w-full">
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        className={`${heightClass} w-auto max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-200`}
      />
    </figure>
  );
};

interface PartnerLogosGridProps {
  className?: string;
}

export default function PartnerLogosGrid({ 
  className = ""
}: PartnerLogosGridProps) {
  const distributedPartners = useMemo(() => {
    const result: (Partner & { shouldSpan?: boolean })[] = [];
    const lastIndex = partnersData.length - 1;
    
    for (let i = 0; i < partnersData.length; i++) {
      const current = partnersData[i];
      const isLast = i === lastIndex;
      
      const shouldSpan = isLast;
      
      result.push({ ...current, shouldSpan });
    }
    
    return result;
  }, []);

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <ul
        aria-label="List of SheHub sponsors and partners"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 sm:gap-y-10 md:gap-y-12 gap-x-4 sm:gap-x-6 md:gap-x-8"
        style={{ gridAutoFlow: 'dense' }}
      >
        {distributedPartners.map((partner) => {
          const isWide = partner.isWide ?? false;
          // On mobile: some wide logos span 2 columns to avoid two wide logos together
          const colSpan = partner.shouldSpan 
            ? "col-span-2 sm:col-span-1 md:col-span-1" 
            : "";
          
          return (
            <li
              key={partner.id}
              className={`flex items-center justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px] ${colSpan}`}
            >
              <PartnerLogo src={partner.image} alt={partner.alt} isWide={isWide} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
