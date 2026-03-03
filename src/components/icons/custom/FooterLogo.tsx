import SheHubLogo from '@/assets/images/logos/sheHub/logo_shehub.png';
import Image from 'next/image';

type FooterLogoProps = {
  width?: number;
  height?: number;
};

export default function FooterLogo({ width = 128, height = 32 }: FooterLogoProps) {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className="relative block"
    >
      <Image
        src={SheHubLogo}
        alt="SheHub Logo for Footer"
        fill
        sizes={`${width}px`}
        className="object-contain"
      />
    </div>
  );
}