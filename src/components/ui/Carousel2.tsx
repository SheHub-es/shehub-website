import { VariantProps, cva } from "class-variance-authority";

import * as React from "react";

import ArrowLeft from "@/assets/images/icons/icon_AthenaCircleArrowLeft.svg";
import ArrowRight from "@/assets/images/icons/icon_AthenaCircleArrowRight.svg";
import { CardItem, MemberCardItem } from "@/components/ui/CardItem";
import { Icon } from "@/components/ui/Icon";
import { Review, ReviewCard } from "@/components/ui/ReviewCard";
import { cn } from "@/lib/utils";

type Variant = "review" | "cards";

type ArrowsPlacement = "sides" | "bottom-right";

export type PerView =
  | number
  | { base: number; sm?: number; md?: number; lg?: number; xl?: number };

type BaseProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof carousel2Variants> & {
    loop?: boolean;
    withDots?: boolean;
    perView?: PerView;
    onIndexChange?: (i: number) => void;
    slideClassName?: string;
    arrowsPlacement?: ArrowsPlacement;
  };

export type ReviewCarousel2Props = BaseProps & {
  variant: "review";
  items: Review[];
  renderItem?: (item: Review, index: number) => React.ReactNode;
};

export type CardsCarousel2Props = BaseProps & {
  variant: "cards";
  items: MemberCardItem[];
};

export type Carousel2Props = ReviewCarousel2Props | CardsCarousel2Props;

const carousel2Variants = cva("relative w-full", {
  variants: {
    tone: { default: "" },
  },
  defaultVariants: {
    tone: "default",
  },
});

const viewportVariants = cva("overflow-hidden w-full");

const trackVariants = cva("flex transition-transform duration-300 ease-in-out");

const slideVariants = cva("shrink-0", {
  variants: {
    variant: {
      review: "w-full flex justify-center",
      cards: "flex justify-center",
    },
  },
  defaultVariants: { variant: "review" },
});

const dotVariants = cva("h-2 w-2 rounded-full transition-colors duration-200", {
  variants: {
    active: {
      true: "bg-[var(--color-black)]",
      false: "bg-[var(--color-black)]/20 hover:bg-[var(--color-black)]/40",
    },
  },
  defaultVariants: { active: false },
});

export function Carousel2(props: Carousel2Props) {
  const {
    variant,
    items,
    loop = false,
    withDots: withDotsProps,
    perView = variant === "review" ? 1 : 4,
    onIndexChange,
    className,
    slideClassName,
    arrowsPlacement = variant === "review" ? "sides" : "sides",
    ...rest
  } = props as Carousel2Props;

  const trackRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const isReview = variant === "review";
  const totalItems = items.length;

  // Calculate how many items per slide
  const itemsPerSlide = React.useMemo(() => {
    if (isReview) return 1;
    if (typeof perView === "number") return perView;
    return perView.base ?? 4;
  }, [isReview, perView]);

  const totalSlides = Math.ceil(totalItems / itemsPerSlide);
  const withDots = withDotsProps ?? totalSlides > 1;

  const goToSlide = React.useCallback(
    (slideIndex: number) => {
      if (isTransitioning) return;

      let targetIndex = slideIndex;
      if (loop) {
        targetIndex = ((slideIndex % totalSlides) + totalSlides) % totalSlides;
      } else {
        targetIndex = Math.max(0, Math.min(slideIndex, totalSlides - 1));
      }

      setIsTransitioning(true);
      setCurrentIndex(targetIndex);
      onIndexChange?.(targetIndex);

      const track = trackRef.current;
      if (track) {
        const slideWidth = track.scrollWidth / totalSlides;
        track.style.transform = `translateX(-${targetIndex * slideWidth}px)`;
      }

      // Reset transition flag after animation completes
      setTimeout(() => setIsTransitioning(false), 300);
    },
    [isTransitioning, totalSlides, loop, onIndexChange],
  );

  const goToPrevious = () => {
    const nextIndex = loop ? currentIndex - 1 : Math.max(0, currentIndex - 1);
    goToSlide(nextIndex);
  };

  const goToNext = () => {
    const nextIndex = loop
      ? currentIndex + 1
      : Math.min(totalSlides - 1, currentIndex + 1);
    goToSlide(nextIndex);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLElement> = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNext();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrevious();
    }
    if (e.key >= "1" && e.key <= "9") {
      e.preventDefault();
      const slideNumber = parseInt(e.key, 10) - 1;
      if (slideNumber < totalSlides) {
        goToSlide(slideNumber);
      }
    }
  };

  // Initialize carousel
  React.useEffect(() => {
    goToSlide(0);
  }, []);

  // Handle window resize for responsive behavior
  React.useEffect(() => {
    const handleResize = () => {
      goToSlide(currentIndex);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, goToSlide]);

  const canGoPrevious = loop || currentIndex > 0;
  const canGoNext = loop || currentIndex < totalSlides - 1;

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label={`${variant} carousel with ${totalSlides} slides`}
      //tabIndex={0}
      onKeyDown={onKeyDown}
      className={cn(carousel2Variants({}), className)}
      {...rest}
    >
      {/*REVIEW VARIANT */}
      {isReview ? (
        //Max-w for avoid arrows expanding with more items
        <div className="relative max-w-[1280px] mx-auto">
          <div className="flex items-center gap-4">
            <Icon
              icon={ArrowLeft}
              size="2xl"
              interactive
              onClick={goToPrevious}
              aria-label={`Previous slide. Currently showing slide ${currentIndex + 1} of ${totalSlides}`}
              disabled={!canGoPrevious || isTransitioning}
              className={cn(
                "flex-shrink-0 bg-white hover:bg-purple-100 shadow transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
                (!canGoPrevious || isTransitioning) &&
                  "opacity-50 cursor-not-allowed",
              )}
            />
            <div className={viewportVariants()}>
              <div
                ref={trackRef}
                className={trackVariants()}
                style={{
                  width: `${totalSlides * 100}%`,
                }}
                aria-live="polite"
                aria-atomic="false"
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className={cn(slideVariants({ variant }), slideClassName)}
                    style={{ width: `${100 / totalSlides}%` }}
                    aria-hidden={slideIndex !== currentIndex}
                  >
                    {(() => {
                      const item = items[slideIndex] as Review;
                      return item
                        ? ((props as ReviewCarousel2Props).renderItem?.(
                            item,
                            slideIndex,
                          ) ?? <ReviewCard review={item} />)
                        : null;
                    })()}
                  </div>
                ))}
              </div>
            </div>
            <Icon
              icon={ArrowRight}
              size="2xl"
              interactive
              onClick={goToNext}
              aria-label={`Next slide. Currently showing slide ${currentIndex + 1} of ${totalSlides}`}
              disabled={!canGoNext || isTransitioning}
              className={cn(
                "flex-shrink-0 bg-white hover:bg-purple-100 shadow transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
                (!canGoNext || isTransitioning) &&
                  "opacity-50 cursor-not-allowed",
              )}
            />
          </div>

          {/* Navigation Dots for Review */}
          {withDots && (
            <div
              className="mt-6 flex items-center justify-center gap-2"
              role="tablist"
              aria-label="Carousel navigation"
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  role="tab"
                  aria-label={`Go to slide ${slideIndex + 1} of ${totalSlides}`}
                  aria-selected={slideIndex === currentIndex}
                  aria-controls={`carousel-slide-${slideIndex}`}
                  className={cn(
                    dotVariants({ active: slideIndex === currentIndex }),
                    "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
                  )}
                  onClick={() => goToSlide(slideIndex)}
                  disabled={isTransitioning}
                />
              ))}
            </div>
          )}

          {/* Navigation Arrows for Review: on the sides */}
          {/*<Icon
                        icon={ArrowLeft}
                        size="2xl"
                        interactive
                        onClick={goToPrevious}
                        aria-label={`Previous slide. Currently showing slide ${currentIndex + 1} of ${totalSlides}`}
                        disabled={!canGoPrevious || isTransitioning}
                        className={cn(
                            "absolute top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-purple-100 shadow transition-opacity duration-200 left-4",
                            (!canGoPrevious || isTransitioning) && "opacity-50 cursor-not-allowed"
                        )}
                    />
                    <Icon
                        icon={ArrowRight}
                        size="2xl"
                        interactive
                        onClick={goToNext}
                        aria-label={`Next slide. Currently showing slide ${currentIndex + 1} of ${totalSlides}`}
                        disabled={!canGoNext || isTransitioning}
                        className={cn(
                            "absolute top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-purple-100 shadow transition-opacity duration-200 right-4",
                            (!canGoNext || isTransitioning) && "opacity-50 cursor-not-allowed"
                        )}
                    />*/}
        </div>
      ) : (
        //CARDS VARIANT
        <div className="flex flex-col">
          {/* Carousel Content Container */}
          <div className={viewportVariants()}>
            <div
              ref={trackRef}
              className={trackVariants()}
              style={{
                width: `${totalSlides * 100}%`,
              }}
              aria-live="polite"
              aria-atomic="false"
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className={cn(slideVariants({ variant }), slideClassName)}
                  style={{ width: `${100 / totalSlides}%` }}
                  aria-hidden={slideIndex !== currentIndex}
                >
                  <div className="flex justify-center gap-8">
                    {items
                      .slice(
                        slideIndex * itemsPerSlide,
                        (slideIndex + 1) * itemsPerSlide,
                      )
                      .map((item, itemIndex) => (
                        <CardItem
                          key={
                            (item as MemberCardItem).id ??
                            slideIndex * itemsPerSlide + itemIndex
                          }
                          item={item as MemberCardItem}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots for Responsive Cards? */}
          {withDots && (
            <div
              className="mt-6 flex items-center justify-center gap-2"
              role="tablist"
              aria-label="Carousel navigation"
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  role="tab"
                  aria-label={`Go to slide ${slideIndex + 1} of ${totalSlides}`}
                  aria-selected={slideIndex === currentIndex}
                  aria-controls={`carousel-slide-${slideIndex}`}
                  className={cn(
                    dotVariants({ active: slideIndex === currentIndex }),
                    "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
                  )}
                  onClick={() => goToSlide(slideIndex)}
                  disabled={isTransitioning}
                />
              ))}
            </div>
          )}

          {/* Navigation Arrows for Cards: below items, bottom right */}
          <div className="mt-[72px] w-full max-w-[1280px] mx-auto flex justify-end gap-2">
            <Icon
              icon={ArrowLeft}
              size="xl"
              interactive
              onClick={goToPrevious}
              aria-label={`Previous slide. Currently showing slide ${currentIndex + 1} of ${totalSlides}`}
              disabled={!canGoPrevious || isTransitioning}
              className={cn(
                "bg-white hover:bg-purple-100 shadow transition-opacity duration-200",
                (!canGoPrevious || isTransitioning) &&
                  "opacity-50 cursor-not-allowed",
              )}
            />
            <Icon
              icon={ArrowRight}
              size="xl"
              interactive
              onClick={goToNext}
              aria-label={`Next slide. Currently showing slide ${currentIndex + 1} of ${totalSlides}`}
              disabled={!canGoNext || isTransitioning}
              className={cn(
                "bg-white hover:bg-purple-100 shadow transition-opacity duration-200",
                (!canGoNext || isTransitioning) &&
                  "opacity-50 cursor-not-allowed",
              )}
            />
          </div>
        </div>
      )}
    </section>
  );
}
