import Avatar from "@/components/ui/Avatar";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

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
};

export const CarouselReview: React.FC<CarouselReviewProps> = ({ review, className, compact = false }) => {
    const { image, name, quote, role, alt } = review;

    return (
        <div className={cn("flex flex-col items-center gap-8", "w-[240px] max-w-[880px]", "md:w-full", compact ? "md:max-w-[480px]" : "md:max-w-[584px]")}>
            <p className="self-stretch text-size-500 font-heavy font-secondary text-black leading-line-height-body-1 text-center">
                {quote}
            </p>
                <Avatar
                type="image"
                size="xl"
                imageUrl={image}
                alt={alt ?? name}
            />
            
            <div className="flex flex-col items-center justify-center text-black self-stretch text-center text-size-400">
                <p className="font-primary font-heavy leading-line-height-body-3 ">
                    {name}
                </p>
                <p className="font-secondary h-line-height-body-2">
                    {role}
                </p>
            </div>
        </div>
    )
}