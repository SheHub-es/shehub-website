import ArrowLeft from "@/components/icons/IconLeftArrow";
import ArrowRight from "@/components/icons/IconRightArrow";
import { Icon } from "@/components/ui/Icon";
import {
    CarouselReview,
    Review,
} from "@/components/ui/carousel/CarouselReview";
import { cn } from "@/lib/utils";

import { useCarousel } from "../../../hooks/useCarousel";
import { ReviewVariantProps } from "./Carousel.types";

const dotVariants = (active: boolean) =>
  cn(
    "h-2 w-2 rounded-full",
    active ? "bg-[var(--color-black)]" : "bg-[var(--color-black)]/20",
  );

export function ReviewVariant(props: ReviewVariantProps) {
  const {
    variant,
    items,
    loop = false,
    className,
    onIndexChange,
    renderItem,
  } = props;

  const totalItems = items.length;
  //Review: totalPages = totalItems (1 item)
  const totalPages = totalItems;
  const { viewportRef, index, next, prev, scrollTo } = useCarousel({
    totalItems,
    loop,
    onIndexChange,
    variant,
  });

  //Review
  const handleNext = () => next(1);
  const handlePrev = () => prev(1);
  const withDots = totalItems > 1;
  
  // Determine disabled states
  const isLeftDisabled = !loop && index === 0;
  const isRightDisabled = !loop && index === totalPages - 1;

  return (
    <div className={cn("relative mx-auto", className)}>
      {/* Container to limit widht */}
      <div
        className={cn(
          "w-full max-w-[343px] min-h-[416px] py-2 mx-auto",
          "md:w-full md:max-w-[1280px] md:min-h-0 md:py-0",
        )}
      >
        {/* Desktop: flechas a los lados */}
        <div className="hidden md:flex items-center gap-4">
          <Icon
            icon={ArrowLeft}
            size="2xl"
            interactive
            onClick={handlePrev}
            aria-label="Previous slide"
            disabled={isLeftDisabled}
            className={cn(
              "shrink-0",
              isLeftDisabled
                ? "text-[#E7E7E7] cursor-not-allowed"
                : "text-black hover:text-purple-600",
              "focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2",
            )}
          />
          {/* Scroll */}
          <div ref={viewportRef} className="overflow-hidden w-full">
            <div
              className={cn(
                "flex snap-x snap-mandatory scroll-smooth",
                "gap-0 items-start",
              )}
            >
              {items.map((item, i) => (
                <div
                  key={item.id ?? i}
                  className={cn(
                    "snap-start shrink-0 w-full flex justify-center",
                  )}
                >
                  {renderItem?.(item, i) ?? (
                    <CarouselReview review={item as Review} />
                  )}
                </div>
              ))}
            </div>
          </div>
          <Icon
            icon={ArrowRight}
            size="2xl"
            interactive
            onClick={handleNext}
            aria-label="Next slide"
            disabled={isRightDisabled}
            className={cn(
              "shrink-0",
              isRightDisabled
                ? "text-[#E7E7E7] cursor-not-allowed"
                : "text-black hover:text-purple-600",
              "focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2",
            )}
          />
        </div>

        {/* Mobile: flechas entre texto e imagen */}
        <div className="md:hidden">
          {/* Scroll */}
          <div ref={viewportRef} className="overflow-hidden w-full">
            <div
              className={cn(
                "flex snap-x snap-mandatory scroll-smooth",
                "gap-0 items-start",
              )}
            >
              {items.map((item, i) => {
                const mobileArrows = (
                  <>
                    <Icon
                      icon={ArrowLeft}
                      size="2xl"
                      interactive
                      onClick={handlePrev}
                      aria-label="Previous slide"
                      disabled={isLeftDisabled}
                      className={cn(
                        "shrink-0",
                        isLeftDisabled
                          ? "text-[#E7E7E7] cursor-not-allowed"
                          : "text-black hover:text-purple-600",
                        "focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2",
                      )}
                    />
                    <Icon
                      icon={ArrowRight}
                      size="2xl"
                      interactive
                      onClick={handleNext}
                      aria-label="Next slide"
                      disabled={isRightDisabled}
                      className={cn(
                        "shrink-0",
                        isRightDisabled
                          ? "text-[#E7E7E7] cursor-not-allowed"
                          : "text-black hover:text-purple-600",
                        "focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2",
                      )}
                    />
                  </>
                );

                return (
                  <div
                    key={item.id ?? i}
                    className={cn(
                      "snap-start shrink-0 w-full flex justify-center",
                    )}
                  >
                    {renderItem?.(item, i) ?? (
                      <CarouselReview review={item as Review} arrows={mobileArrows} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {withDots && (
        <div className="mt-4 flex items-center justify-center gap-2 w-full">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === index}
              className={dotVariants(i === index)}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
