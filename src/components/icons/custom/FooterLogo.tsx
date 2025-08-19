// src/components/icons/custom/FooterLogo.tsx

import Image from 'next/image';

type FooterLogoProps = {
  width?: number;
  height?: number;
};

// This is a dedicated logo component for the footer, with the correct sizing.
export default function FooterLogo({ width = 128, height = 32 }: FooterLogoProps) {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className="relative block"
    >
      <Image
        src="/logo-shehub.png"
        alt="SheHub Logo for Footer"
        fill
        priority
        sizes={`${width}px`}
        className="object-contain"
      />
    </div>
  );
}