// src/components/ui/carousel/ReviewVariant.tsx
import ArrowLeft from "@/components/icons/IconLeftArrow";
import ArrowRight from "@/components/icons/IconRightArrow";
import { Icon } from "@/components/ui/Icon";
import { CarouselReview, Review } from "@/components/ui/carousel/CarouselReview"; // Asumo que exportas Review y CarouselReview aquí
import { cn } from "@/lib/utils";
import { ReviewVariantProps } from "./Carousel.types";
import { useCarousel } from "./useCarousel";

const dotVariants = (active: boolean) => cn(
    'h-2 w-2 rounded-full',
    active ? "bg-[var(--color-black)]" : "bg-[var(--color-black)]/20"
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
    // En reviews, totalPages es igual a totalItems (siempre 1 item por vista)
    const totalPages = totalItems;
    
    // El hook maneja el estado del índice y la lógica de scroll
    const { viewportRef, index, next, prev, scrollTo } = useCarousel({
        totalItems,
        loop,
        onIndexChange,
        variant
    });

    // En Review, siempre navegamos 1 paso a la vez
    const handleNext = () => next(1);
    const handlePrev = () => prev(1);

    // Los puntos y flechas se muestran si hay más de 1 ítem
    const withDots = totalItems > 1;

    return (
        <div className={cn("relative mx-auto", className)}>
            {/* Contenedor principal para centrar y limitar ancho */}
            <div className={cn("w-[343px] min-h-[416px] py-2 mx-auto", "md:w-full md:max-w-[1280px] md:min-h-0 md:py-0")}>
               {/* Contenedor de flechas y contenido */}
                <div className="flex items-center gap-4">
                    {/* Flecha Izquierda */}
                    <Icon
                        icon={ArrowLeft}
                        size="2xl"
                        interactive
                        onClick={handlePrev}
                        aria-label="Previous slide"
                        disabled={!loop && index === 0}
                        className={cn(
                            "flex-shrink-0 bg-white hover:bg-purple-100 shadow",
                            (!loop && index === 0) && "opacity-50 cursor-not-allowed"
                        )}
                    />
                    
                    {/* Viewport y Track (Donde ocurre el scroll) */}
                    <div ref={viewportRef} className="overflow-hidden w-full">
                        <div className={cn("flex snap-x snap-mandatory scroll-smooth", "gap-0 items-start")}>
                            {items.map((item, i) => (
                                <div
                                    key={item.id ?? i}
                                    className={cn("snap-start shrink-0 w-full flex justify-center")}
                                >
                                    {renderItem?.(item, i) ?? <CarouselReview review={item as Review} />}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Flecha Derecha */}
                    <Icon
                        icon={ArrowRight}
                        size="2xl"
                        interactive
                        onClick={handleNext}
                        aria-label="Next slide"
                        disabled={!loop && index === totalPages - 1}
                        className={cn(
                            "flex-shrink-0 bg-white hover:bg-purple-100 shadow",
                            (!loop && index === totalPages - 1) && "opacity-50 cursor-not-allowed"
                        )}
                    />
                </div>
                
                {/* Dots/Paginación */}
                {withDots && (
                    <div className="mt-4 flex items-center justify-center gap-2">
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
        </div>
    );
}