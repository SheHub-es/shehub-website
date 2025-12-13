import { CardsVariant } from "./CardsVariant";
import { CardsVariantProps, ReviewVariantProps } from "./Carousel.types";
import { ReviewVariant } from "./ReviewVariant";

export type CarouselProps = ReviewVariantProps | CardsVariantProps;

export function Carousel(props: CarouselProps) {
    if (props.variant === "review") {
        return <ReviewVariant {...props} />;
    }

    if (props.variant === "cards") {
        return <CardsVariant {...props} />;
    }

    return null;
}