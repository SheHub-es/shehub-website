import { MemberCarouselCard } from "@/components/ui/carousel/CarouselCard";
import { Review } from "@/components/ui/carousel/CarouselReview";

export type Variant = "review" | "cards";

export type BaseCarouselProps = {
    className?: string;
    loop?: boolean;
    onIndexChange?: (i: number) => void;
};

export type ReviewVariantProps = BaseCarouselProps & {
    variant: "review";
    items: Review[];
    renderItem?: (item: Review, index: number) => React.ReactNode;
};

export type CardsVariantProps = BaseCarouselProps & {
    variant: "cards";
    items: MemberCarouselCard[];
};