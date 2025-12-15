import ArrowLeft from "@/components/icons/IconLeftArrow";
import ArrowRight from "@/components/icons/IconRightArrow";
import { Icon } from "@/components/ui/Icon";
import { CarouselCard } from "@/components/ui/carousel/CarouselCard";
import { cn } from "@/lib/utils";

import { useCarousel } from "../../../hooks/useCarousel";
import { CardsVariantProps } from "./Carousel.types";

const dotVariants = (active: boolean) =>
  cn(
    "h-2 w-2 rounded-full transition-colors duration-200",
    active ? "bg-[var(--color-black)]" : "bg-[var(--color-black)]/20",
  );

export function CardsVariant({
  variant,
  items,
  loop = false,
  className,
  onIndexChange,
}: CardsVariantProps) {
  const { viewportRef, index, next, prev, scrollTo } = useCarousel({
    totalItems: items.length,
    loop,
    onIndexChange,
    variant,
  });

  const handleNav = (direction: "next" | "prev") => {
    const isDesktop = window.innerWidth >= 1024; //lg breakpoint
    const step = isDesktop ? 4 : 1; //4 items in desktop
    direction === "next" ? next(step) : prev(step);
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="relative mx-auto w-80 h-[455px] lg:w-full lg:h-auto lg:max-w-[1280px]">
        <div ref={viewportRef} className="overflow-hidden w-full scroll-px-8 py-2">
          <div className="flex snap-x snap-mandatory scroll-smooth gap-8 lg:justify-between px-8 lg:px-0">
            {items.map((item, i) => (
              <div
                key={item.id ?? i}
                className="snap-center lg:snap-start shrink-0 w-72 flex justify-center lg:w-[calc((100%-96px)/4)] lg:justify-start"
              >
                <CarouselCard item={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 lg:mt-[72px] items-center justify-end gap-2 hidden lg:flex">
          <Icon
            icon={ArrowLeft}
            size="xl"
            interactive
            onClick={() => handleNav("prev")}
            disabled={!loop && index === 0}
            className={cn(
              "bg-white hover:bg-purple-100 shadow",
              !loop && index === 0 && "opacity-50",
            )}
          />
          <Icon
            icon={ArrowRight}
            size="xl"
            interactive
            onClick={() => handleNav("next")}
            disabled={!loop && index >= items.length - 4}
            className={cn(
              "bg-white hover:bg-purple-100 shadow",
              !loop && index >= items.length - 4 && "opacity-50",
            )}
          />
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 lg:hidden">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === index}
              className={dotVariants(i === index)}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}