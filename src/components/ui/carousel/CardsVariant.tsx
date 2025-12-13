import ArrowLeft from "@/components/icons/IconLeftArrow";
import ArrowRight from "@/components/icons/IconRightArrow";
import { CarouselCard } from "@/components/ui/carousel/CarouselCard";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { CardsVariantProps } from "./Carousel.types";
import { useCarousel } from "./useCarousel";

const dotVariants = (active: boolean) => cn(
    'h-2 w-2 rounded-full transition-colors duration-200',
    active ? "bg-[var(--color-black)]" : "bg-[var(--color-black)]/20"
);

export function CardsVariant({ variant, items, loop = false, className, onIndexChange }: CardsVariantProps) {
    const { viewportRef, index, next, prev, scrollTo } = useCarousel({
        totalItems: items.length,
        loop,
        onIndexChange,
        variant
    });

    // Lógica para determinar cuántos items saltar
    const handleNav = (direction: "next" | "prev") => {
        const isDesktop = window.innerWidth >= 768;
        const step = isDesktop ? 4 : 1; // Aquí defines el salto de 4 en desktop
        direction === "next" ? next(step) : prev(step);
    };

    return (
        <div className={cn("flex flex-col", className)}>
             <div className="relative mx-auto w-80 h-[455px] md:w-full md:h-auto md:max-w-[1280px]">
                {/* Viewport */}
                <div ref={viewportRef} className="overflow-hidden w-full scroll-px-8">
                    <div className="flex snap-x snap-mandatory scroll-smooth gap-8 md:justify-between px-8 md:px-0">
                        {items.map((item, i) => (
                            <div
                                key={item.id ?? i}
                                className="snap-center md:snap-start shrink-0 w-72 flex justify-center md:w-[calc((100%-96px)/4)] md:justify-start"
                            >
                                <CarouselCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>                
                <div className="mt-12 md:mt-[72px] items-center justify-end gap-2 hidden md:flex">
                    <Icon
                        icon={ArrowLeft}
                        size="xl"
                        interactive
                        onClick={() => handleNav("prev")}
                        disabled={!loop && index === 0}
                        className={cn("bg-white hover:bg-purple-100 shadow", !loop && index === 0 && "opacity-50")}
                    />
                    <Icon
                        icon={ArrowRight}
                        size="xl"
                        interactive
                        onClick={() => handleNav("next")}
                        disabled={!loop && index >= items.length - 4} // Deshabilitar si ya no quedan 4 items
                        className={cn("bg-white hover:bg-purple-100 shadow", !loop && index >= items.length - 4 && "opacity-50")}
                    />
                </div>
                <div className="mt-8 flex items-center justify-center gap-2 md:hidden">
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