"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import avatarMarta from "@/assets/images/avatars/avatar_martaV.webp";
import avatarLaura from "@/assets/images/avatars/avatar_lauraGracia.webp";


const testimonials = [
  {
    img: avatarMarta,
    name: "Marta V.",
    role: "UX/UI Designer",
    text: `Being part of SheHub has been a game-changer. I’ve connected with talented people,
    worked on real projects that matter, and grown more in a few months than I ever imagined.
    It’s not just experience—it's purpose-driven growth.`,
  },
  {
    img: avatarLaura,
    name: "Laura Medina",
    role: "Frontend Developer",
    text: `The community at SheHub is incredibly supportive. I improved my portfolio with real teamwork
    and mentorship. Highly recommended for anyone who wants to level up.`,
  },
  {
    img: avatarLaura,
    name: "Elena Duarte",
    role: "Product Designer",
    text: `At SheHub I felt valued, challenged, and inspired. The projects helped me land interviews
    with companies I never thought possible.`,
  },
];

export default function CarouselV2() {
  const containerRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <div className="overflow-hidden w-full max-w-xl mx-auto mt-10">
      <div
        ref={containerRef}
        className="flex transition-transform duration-700 ease-in-out"
      >
        {testimonials.map((item, i) => (
          <div key={i} className="min-w-full text-center flex flex-col items-center px-4">

            {/* Testimonial Text */}
            <p className="text-gray-600 text-lg leading-relaxed italic max-w-xl">
              “{item.text}”
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
