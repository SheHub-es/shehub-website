import Avatar from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

export type Review = {
    id: string;
    image: string | StaticImageData;
    name: string;
    quote: string;
    role: string;
};

type ReviewCardProps = {
  review: Review;
  className?: string;
  compact?: boolean;
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, className, compact = false }) => {
    const { image, name, quote, role } = review;

    return (
        <div className={cn("flex flex-col justify-center items-center gap-8", compact ? "w-full max-w-[480px]" : "w-[584px]")}>
            <p className="self-stretch text-size-500 font-heavy font-secondary text-black leading-line-height-body-1 text-center">
                {quote}
            </p>
            <Avatar
                type="image"
                size="xl"
                imageUrl={image}
                alt={name}
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