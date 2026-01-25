"use client";

import { partnersData } from '@/sections/partners/hero/components/PartnerLogos';
import Image, { StaticImageData } from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

const PartnerLogo = ({ src, alt, size = "default" }: { 
  src: string | StaticImageData; 
  alt: string;
  size?: "default" | "large";
}) => {
  const sizeClasses = size === "large" 
    ? "h-12 lg:h-12" 
    : "h-8 md:h-10 lg:h-12";
  
  const minWidth = size === "large" ? "min-w-[140px]" : "min-w-[120px] md:min-w-[140px]";
    
  return (
    <figure className={`flex items-center justify-center px-4 ${minWidth}`}>
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        className={`${sizeClasses} w-auto max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-200`}
      />
    </figure>
  );
};

interface PartnerLogosCarouselProps {
  autoPlay?: boolean;
  size?: "default" | "large";
  className?: string;
}

export default function PartnerLogosCarousel({ 
  autoPlay = true,
  size = "default",
  className = ""
}: PartnerLogosCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const duplicatedPartners = [...partnersData, ...partnersData, ...partnersData];

  useEffect(() => {
    const createEmojiCursor = (emoji: string, size: number = 32) => {
      const canvas = document.createElement('canvas');
      canvas.width = size * 2;
      canvas.height = size * 2;
      const ctx = canvas.getContext('2d');
      if (!ctx) return '';
      
      ctx.font = `${size}px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      ctx.fillText(emoji, size, size);
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      const targetR = 247;
      const targetG = 103;
      const targetB = 2;
      
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        
        if (a > 0) {
          const brightness = (r + g + b) / 3;
          
          if (r > 180 && g > 150 && b < 150) { 
            const factor = 0.6;
            const newR = Math.min(255, r * (1 - factor) + targetR * factor);
            const newG = Math.min(255, g * (1 - factor) + targetG * factor);
            const newB = Math.min(255, b * (1 - factor) + targetB * factor);
            
            data[i] = newR;
            data[i + 1] = newG;
            data[i + 2] = newB;
          }
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      
      return `url(${canvas.toDataURL()}) ${size} ${size}, grab`;
    };

    const grabCursor = createEmojiCursor('👋', 32); 
    const grabbingCursor = createEmojiCursor('✊', 32);
    
    const style = document.createElement('style');
    style.id = 'partner-carousel-cursor-emoji';
    style.textContent = `
      .partner-carousel-grab {
        cursor: ${grabCursor} !important;
      }
      .partner-carousel-grabbing {
        cursor: ${grabbingCursor} !important;
      }
    `;
    
    if (!document.getElementById('partner-carousel-cursor-emoji')) {
      document.head.appendChild(style);
    }

    return () => {
      const existingStyle = document.getElementById('partner-carousel-cursor-emoji');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);


  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    const rect = containerRef.current.getBoundingClientRect();
    setStartX(e.pageX - rect.left);
    setScrollLeft(containerRef.current.scrollLeft);
    setIsPaused(true);
    e.preventDefault();
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      e.preventDefault();
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.pageX - rect.left;
      const walk = (x - startX) * 2.5;
      containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      if (autoPlay) {
        setTimeout(() => setIsPaused(false), 2000);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, startX, scrollLeft, autoPlay]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (!containerRef.current) return;
    e.preventDefault();
    containerRef.current.scrollLeft += e.deltaY * 0.5;
    setIsPaused(true);
    if (autoPlay) {
      setTimeout(() => setIsPaused(false), 2000);
    }
  }, [autoPlay]);

  useEffect(() => {
    if (!autoPlay) return;
    
    const container = containerRef.current;
    if (!container || isPaused) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.3;

    const animate = () => {
      if (!container || isPaused) return;
      
      scrollPosition += scrollSpeed;
      
      const itemWidth = container.scrollWidth / 3;
      
      if (scrollPosition >= itemWidth) {
        scrollPosition = scrollPosition - itemWidth;
      }
      
      container.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    if (autoPlay && !isPaused) {
      animationId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, autoPlay]);

  return (
    <div className={`w-full pb-12 md:pb-16 lg:pb-20 ${className}`}>
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => autoPlay && !isDragging && setIsPaused(true)}
        onMouseLeave={() => {
          if (!isDragging && autoPlay) {
            setIsPaused(false);
          }
        }}
        onTouchStart={() => autoPlay && setIsPaused(true)}
        onTouchEnd={() => {
          if (autoPlay) {
            setTimeout(() => setIsPaused(false), 2000);
          }
        }}
      >
        <div
          ref={containerRef}
          className={`flex items-center overflow-x-auto scrollbar-hide ${
            isDragging ? 'partner-carousel-grabbing' : 'partner-carousel-grab'
          }`}
          onMouseDown={handleMouseDown}
          onWheel={handleWheel}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            userSelect: isDragging ? 'none' : 'auto',
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="shrink-0 flex items-center justify-center"
            >
              <PartnerLogo src={partner.image} alt={partner.alt} size={size} />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
