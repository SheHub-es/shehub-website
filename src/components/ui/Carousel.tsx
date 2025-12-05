import ArrowLeft from "@/assets/images/icons/icon_AthenaCircleArrowLeft.svg";
import ArrowRight from "@/assets/images/icons/icon_AthenaCircleArrowRight.svg";
import { CardItem, MemberCardItem } from "@/components/ui/CardItem";
import { Icon } from "@/components/ui/Icon";
import { Review, ReviewCard } from "@/components/ui/ReviewCard";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

type Variant = "review" | "cards";

type ArrowsPlacement = "sides" | "bottom-right";

export type PerView = | number | { base: number; sm?: number; md?: number; lg?: number; xl?: number };



type BaseProps = React.HTMLAttributes<HTMLElement> & VariantProps<typeof carouselVariants> & {
    loop?: boolean;
    withDots?: boolean;
    perView?: PerView;
    onIndexChange?: (i: number) => void;
    slideClassName?: string
    arrowsPlacement?: ArrowsPlacement;
};

export type ReviewCarouselProps = BaseProps & {
    variant: "review";
    items: Review[];
    renderItem?: (item: Review, index: number) => React.ReactNode;
};

export type CardsCarouselProps = BaseProps & {
    variant: "cards";
    items: MemberCardItem[];
};

export type CarouselProps = ReviewCarouselProps | CardsCarouselProps;

const carouselVariants = cva("relative w-full", {
    variants: {
        tone: { default: "" },
    },
    defaultVariants: {
        tone: "default"
    }
});

const viewportVariants = cva("overflow-hidden w-full");

const trackVariants = cva(" flex snap-x snap-mandatory scroll-smooth", {
    variants: {
        gap: { none: "", sm: "gap-2", md: "gap-4", lg: "gap-8" },
        align: { start: "items-start", center: "items-center", end: "items-end" },
    },
    defaultVariants: { gap: "none", align: "start" },
});

const slideVariants = cva("snap-start shrink-0", {
    variants: {
        variant: { review: "w-full flex justify-center", cards: "" },
        padded: { true: "px-2", false: "" },
    },
    defaultVariants: { variant: "review", padded: false }
});

const dotVariants = cva('h-2 w-2 rounded-full', {
    variants: {
        active: {
            true: "bg-[var(--color-black)]",
            false: "bg-[var(--color-black)]/20"
        },
    },
    defaultVariants: { active: false }
});

//not used, only 1 item in review and 4 in card at the moment
function perViewToClasses(perView: PerView | undefined) {
    const basisMap: Record<number, string> = {
        1: "basis-full",
        2: "basis-1/2",
        3: "basis-1/3",
        4: "basis-1/4",
        6: "basis-1/6",
    };

    const get = (n?: number) => (n && basisMap[n]) || "basis-full";

    if (!perView) return get(1);
    if (typeof perView === "number") return get(perView);

    const { base, sm, md, lg, xl } = perView;
    const classes: string[] = [];
    classes.push(get(base));
    if (sm) classes.push(`sm:${get(sm)}`);
    if (md) classes.push(`md:${get(md)}`);
    if (lg) classes.push(`lg:${get(lg)}`);
    if (xl) classes.push(`xl:${get(xl)}`);
    return classes.join(" ");
}



export function Carousel(props: CarouselProps) {
    const {
        variant,
        items,
        loop = false,
        withDots: withDotsProps,
        perView = variant === "review" ? 1 : 4,
        onIndexChange,
        className,
        slideClassName,
        arrowsPlacement = variant === "review" ? "sides" : "bottom-right",
        ...rest
    } = props as CarouselProps;

    const viewportRef = React.useRef<HTMLDivElement>(null);
    const [index, setIndex] = React.useState(0);

    const isReview = variant === "review";
    const totalItems = items.length;
    
    const withDots = withDotsProps ?? (variant === "review" || (variant === "cards" && totalItems > 1));

    const totalPages = totalItems; //mobile 1 per page

    const goTo = React.useCallback((nextIndex: number) => {
        const clamped = loop ? (nextIndex + totalPages) % totalPages : Math.max(0, Math.min(nextIndex, totalPages - 1));
        setIndex(clamped);
        onIndexChange?.(clamped);
        const viewport = viewportRef.current;
        if (!viewport) return;
        viewport.scrollTo({
            left: clamped * viewport.clientWidth,
            behavior: "smooth",
        });
    }, [loop, totalPages, onIndexChange])

    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    const onKeyDown: React.KeyboardEventHandler<HTMLElement> = (e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
    };

    React.useEffect(() => {
        goTo(0)
    }, []);

    const slideBasisClasses = isReview ? "w-full" : "basis-auto"

    return (
        <section
            role="region"
            aria-roledescription="carousel"
            aria-label={`${variant} carousel`}
            //tabIndex={0}
            onKeyDown={onKeyDown}
            className={cn(carouselVariants({}), className)}
            {...rest}
        >
            {/*REVIEW VARIANT*/}
            {isReview ? (
                //Max-w for avoid arrows expanding with more items
                <div className={cn("relative mx-auto", "w-[343px] min-h-[416px] py-2", "md:w-full md:max-w-[1280px] md:min-h-0 md:py-0")}>
                    <div className="flex items-center gap-4">
                        <Icon
                            icon={ArrowLeft}
                            size="2xl"
                            interactive
                            onClick={prev}
                            aria-label="Previous slide"
                            disabled={!loop && index === 0}
                            className={cn(
                                "flex-shrink-0 bg-white hover:bg-purple-100 shadow",
                                (!loop && index === 0) && "opacity-50 cursor-not-allowed"
                            )}
                        />
                        <div ref={viewportRef} className={cn(viewportVariants())}>
                            <div className={cn(trackVariants({ gap: "none" }))}>
                                {items.map((item, i) => (
                                    <div
                                        key={(item as Review).id ?? i}
                                        className={cn(slideVariants({ variant, padded: false }), slideBasisClasses, slideClassName)}
                                    >
                                        {(props as ReviewCarouselProps).renderItem?.(item as Review, i) ?? <ReviewCard review={item as Review} />}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Icon
                            icon={ArrowRight}
                            size="2xl"
                            interactive
                            onClick={next}
                            aria-label="Next slide"
                            disabled={!loop && index === totalPages - 1}
                            className={cn(
                                "flex-shrink-0 bg-white hover:bg-purple-100 shadow",
                                (!loop && index === totalPages - 1) && "opacity-50 cursor-not-allowed"
                            )}
                        />
                    </div>
                    {withDots && (
                        <div className="mt-4 flex items-center justify-center gap-2">
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    aria-label={`Go to slide ${i + 1}`}
                                    aria-selected={i === index}
                                    className={dotVariants({ active: i === index })}
                                    onClick={() => goTo(i)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                //CARDS VARIANT
                <div className="flex flex-col">
                    <div className={cn(
                        "relative mx-auto",
                        "w-72 h-[455px]",
                        "md:w-full md:h-auto md:max-w-[1280px]"
                    )}>
                        <div ref={viewportRef} className={cn(viewportVariants())}>
                            <div className={cn(trackVariants({ gap: "lg" }))}>
                                {items.map((item, i) => (
                                    <div
                                        key={(item as MemberCardItem).id ?? i}
                                        className={cn(
                                            "snap-start shrink-0 w-full",
                                            "md:w-[calc((100%-96px)/4)]" //4 items with gap-8 (32px*3=96px)
                                        )}
                                    >
                                        <CardItem item={item as MemberCardItem} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cn("mt-12 md:mt-[72px] flex items-center justify-end gap-2", "hidden md:flex")}>
                            <Icon
                                icon={ArrowLeft}
                                size="xl"
                                interactive
                                onClick={prev}
                                aria-label="Previous slide"
                                disabled={!loop && index === 0}
                                className={cn(
                                    "bg-white hover:bg-purple-100 shadow",
                                    (!loop && index === 0) && "opacity-50 cursor-not-allowed"
                                )}
                            />
                            <Icon
                                icon={ArrowRight}
                                size="xl"
                                interactive
                                onClick={next}
                                aria-label="Next slide"
                                disabled={!loop && index === totalPages - 1}
                                className={cn(
                                    "bg-white hover:bg-purple-100 shadow",
                                    (!loop && index === totalPages - 1) && "opacity-50 cursor-not-allowed"
                                )}
                            />
                        </div>
                    </div>
                    {withDots && (
                        <div className={cn(
                            "flex items-center justify-center gap-2",
                            "mt-2 md:hidden"
                        )}>
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    aria-label={`Go to slide ${i + 1}`}
                                    aria-selected={i === index}
                                    className={dotVariants({ active: i === index })}
                                    onClick={() => goTo(i)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </section>
    )
}

