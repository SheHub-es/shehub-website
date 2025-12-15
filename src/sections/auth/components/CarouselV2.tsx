"use client";

import { useTranslation } from "@/hooks/useTranslation";
import avatarLaura from "@/assets/images/avatars/avatar_lauraGracia.webp";
import avatarMarta from "@/assets/images/avatars/avatar_martaV.webp";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function CarouselV2() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      img: avatarMarta,
      name: t('carousel.testimonial1.name'),
      role: t('carousel.testimonial1.role'),
      text: t('carousel.testimonial1.text'),
    },
    {
      img: avatarLaura,
      name: t('carousel.testimonial2.name'),
      role: t('carousel.testimonial2.role'),
      text: t('carousel.testimonial2.text'),
    },
    {
      img: avatarLaura,
      name: t('carousel.testimonial3.name'),
      role: t('carousel.testimonial3.role'),
      text: t('carousel.testimonial3.text'),
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % testimonials.length;
      const offset = index * -100;
      container.style.transform = `translateX(${offset}%)`;
    }, 4500);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="overflow-hidden w-full max-w-xl mx-auto mt-4">
      <div
        ref={containerRef}
        className="flex transition-transform duration-700 ease-in-out"
      >
        {testimonials.map((item, i) => (
          <div key={i} className="min-w-full text-center flex flex-col items-center px-4">

            {/* Testimonial Text */}
            <p className="text-[color:var(--color-black)] text-lg md:text-xl tracking-tight leading-relaxed italic max-w-xl">
              &ldquo;{item.text}&rdquo;
            </p>

            {/* Image */}
            <Image
              src={item.img}
              width={120}
              height={100}
              className="rounded-full mt-6 border-6 px] border-black shadow-sm"
              alt={item.name}
            />

            {/* Name */}
            <h3 className="text-gray-900 font-semibold mt-3">{item.name}</h3>

            {/* Role */}
            <p className="text-gray-500 text-sm">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
