import ArrowLeft from "@/assets/svg/Athena-icon-circle-arrow-left.svg";
import ArrowRight from "@/assets/svg/Athena-icon-circle-arrow-right.svg";
import { Icon } from "@/components/ui/icon";
import ImagePlaceholder from "@/components/ui/ImagePlaceholders";
import { Review, ReviewCard } from "@/components/ui/ReviewCard";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Dribbble, Linkedin, X } from "lucide-react";
import { StaticImageData } from "next/image";
import * as React from "react";

type Variant = "review" | "cards";

type ArrowsPlacement = "sides" | "bottom-right";

export type PerView = | number | { base: number; sm?: number; md?: number; lg?: number; xl?: number };

export type MemberCardItem = {
    id: string;
    name: string;
    role: string;
    photoUrl?: string | StaticImageData;
    socials?: { linkedin?: string; x?: string; dribbble?: string };
};

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
    defaultVariants: { gap: "lg", align: "start" },
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

function CardItem({ item }: { item: MemberCardItem }) {
    return (
        <div className="w-[18.5rem] gap-8 flex flex-col">
            <ImagePlaceholder
                square={296}
                corner="noCorner"
                imageUrl={item.photoUrl}
                loading={!item.photoUrl}
            />
            <div className="px-4">
                <div className="mt-3">
                    <p className="font-secondary text-size-500 font-bold text-black leading-line-height-body-1">{item.name}</p>
                    <p className="font-secondary text-black text-size-400 leading-line-height-body-2">{item.role}</p>
                </div>

                <div className="flex items-start text-primary">
                    {item.socials?.linkedin ? (
                        <a href={item.socials.linkedin} target="_blank" rel="noreferrer">
                            <Icon icon={Linkedin} size="sm" interactive aria-label="LinkedIn" />
                        </a>
                    ) : (
                        <Icon icon={Linkedin} size="sm" aria-label="LinkedIn" />
                    )}
                    {item.socials?.x ? (
                        <a href={item.socials.x} target="_blank" rel="noreferrer">
                            <Icon icon={X} size="sm" interactive aria-label="X" />
                        </a>
                    ) : (
                        <Icon icon={X} size="sm" aria-label="X" />
                    )}
                    {item.socials?.dribbble ? (
                        <a href={item.socials.dribbble} target="_blank" rel="noreferrer">
                            <Icon icon={Dribbble} size="sm" interactive aria-label="Dribbble" />
                        </a>
                    ) : (
                        <Icon icon={Dribbble} size="sm" aria-label="Dribbble" />
                    )}
                </div>
            </div>
        </div>
    );
}

export function Carousel(props: CarouselProps) {
    const {
        variant,
        items,
        loop = false,
        withDots = variant === "review",
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

    const getPerView = React.useCallback(() => {
        if (typeof perView === "number") return perView;
        return perView.base ?? 1;
    }, [perView]);

    const totalPages = isReview ? totalItems : Math.max(1, Math.ceil(totalItems / getPerView()));

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
            tabIndex={0}
            onKeyDown={onKeyDown}
            className={cn(carouselVariants({}), className)}
            {...rest}
        >
            <div ref={viewportRef} className={cn(viewportVariants(),
                variant === "cards" && arrowsPlacement === "sides" && "px-[132px]")}>
                <div className={cn(trackVariants({ gap: isReview ? "lg" : "md" }), !isReview && "gap-8 w-fit mx-auto"
                )}>
                    {items.map((item, i) => (
                        <div
                            key={(isReview ? (item as Review).id : (item as MemberCardItem).id) ?? i}
                            className={cn(slideVariants({ variant, padded: !isReview }), slideBasisClasses, slideClassName)}
                        >
                            {isReview ? (
                                (props as ReviewCarouselProps).renderItem?.(item as Review, i) ?? <ReviewCard review={item as Review} />
                            ) : (
                                <CardItem item={item as MemberCardItem} />
                            )}
                        </div>
                    ))}
                </div>
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
            {isReview ? (
                <>
                    <Icon
                        icon={ArrowLeft}
                        size="2xl"
                        interactive
                        onClick={prev}
                        aria-label="Previous slide"
                        disabled={!loop && index === 0}
                        className="absolute top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-purple-100 shadow left-4"
                    />
                    <Icon
                        icon={ArrowRight}
                        size="2xl"
                        interactive
                        onClick={next}
                        aria-label="Next slide"
                        disabled={!loop && index === totalPages - 1}
                        className="absolute top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-purple-100 shadow right-4"
                    />
                </>
            ) : (
                <div className="mt-[72px] mx-auto w-[calc(296px*4+72px*3)] flex items-center justify-end gap-2">
                    <Icon
                        icon={ArrowLeft}
                        size="xl"
                        interactive
                        onClick={prev}
                        aria-label="Previous slide"
                        disabled={!loop && index === 0}
                        className="bg-white hover:bg-purple-100 shadow"
                    />
                    <Icon
                        icon={ArrowRight}
                        size="xl"
                        interactive
                        onClick={next}
                        aria-label="Next slide"
                        disabled={!loop && index === totalPages - 1}
                        className="bg-white hover:bg-purple-100 shadow"
                    />
                </div>
            )}

        </section>
    )
}

