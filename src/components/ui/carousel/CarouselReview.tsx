import { StaticImageData } from "next/image";

import Avatar from "@/components/ui/Avatar";
import { cn } from "@/lib/utils";

export type Review = {
  id: string;
  image: string | StaticImageData;
  name: string;
  quote: string;
  role: string;
  alt?: string;
};

type CarouselReviewProps = {
  review: Review;
  className?: string;
  compact?: boolean;
  arrows?: React.ReactNode;
};

export const CarouselReview: React.FC<CarouselReviewProps> = ({
  review,
  className,
  compact = false,
  arrows,
}) => {
  const { image, name, quote, role, alt } = review;

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-6 md:gap-8",
        "w-full max-w-[280px]",
        "md:w-full md:max-w-[880px]",
        compact ? "md:max-w-[480px]" : "md:max-w-[800px]",
        className,
      )}
    >
      <p className="self-stretch text-size-500 font-heavy font-secondary text-black leading-line-height-body-1 text-center px-0">
        {quote}
      </p>
      {/* Flechas en móvil - entre texto e imagen, separadas en los extremos */}
      {arrows && (
        <div className="md:hidden w-full flex items-center justify-between -mx-12 relative z-10">
          {arrows}
        </div>
      )}
      <Avatar type="image" size="xl" imageUrl={image} alt={alt ?? name} className="md:hidden -mt-12 relative z-20" />
      <Avatar type="image" size="xl" imageUrl={image} alt={alt ?? name} className="hidden md:block" />

      <div className="flex flex-col items-center justify-center text-black self-stretch text-center text-size-400">
        <p className="font-primary font-heavy leading-line-height-body-3 text-primary">
          {name}
        </p>
        <p className="font-secondary h-line-height-body-2">{role}</p>
      </div>
    </div>
  );
};
