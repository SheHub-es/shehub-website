import { cn } from '@/lib/cn';
import Image from 'next/image';

import { StaticImageData } from 'next/image';

interface AnimatedImageProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
  delay?: string;
  isDecorative?: boolean;
}

export const AnimatedImage = ({
  src,
  alt,
  width,
  height,
  className,
  delay = '0s',
  isDecorative = false
}: AnimatedImageProps) => {
  return (
    <div 
      className={cn(
        'fade-in',
        className
      )}
      style={{ animationDelay: delay }}
      aria-hidden={isDecorative}
    >
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height}
        className="object-cover"
      />
    </div>
  );
};

export default AnimatedImage;
