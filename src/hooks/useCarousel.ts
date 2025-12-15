import { useCallback, useEffect, useRef, useState } from "react";

interface UseCarouselProps {
  totalItems: number;
  loop: boolean;
  onIndexChange?: (i: number) => void;
  variant: "review" | "cards";
}

export function useCarousel({
  totalItems,
  loop,
  onIndexChange,
  variant,
}: UseCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  //scroll for all variants
  const scrollTo = useCallback(
    (nextIndex: number) => {
      //clamping
      let targetIndex = nextIndex;

      if (!loop) {
        targetIndex = Math.max(0, Math.min(nextIndex, totalItems - 1));
      } else {
        //rewind behaviour
        if (nextIndex < 0) targetIndex = totalItems - 1;
        else if (nextIndex >= totalItems) targetIndex = 0;
      }

      setIndex(targetIndex);
      onIndexChange?.(targetIndex);

      const viewport = viewportRef.current;
      if (!viewport) return;

      if (variant === "cards") {
        const firstItem = viewport.firstElementChild
          ?.firstElementChild as HTMLElement;
        if (firstItem) {
          const style = window.getComputedStyle(
            viewport.firstElementChild as Element,
          );
          const gap = parseFloat(style.columnGap) || 32;
          const itemWidth = firstItem.offsetWidth;

          //width + gap * index
          const scrollPos = targetIndex * (itemWidth + gap);

          viewport.scrollTo({ left: scrollPos, behavior: "smooth" });
          return;
        }
      }

      //fallback for review variant (100% width)
      viewport.scrollTo({
        left: targetIndex * viewport.clientWidth,
        behavior: "smooth",
      });
    },
    [loop, totalItems, onIndexChange, variant],
  );

  const next = (step: number = 1) => scrollTo(index + step);
  const prev = (step: number = 1) => scrollTo(index - step);

  useEffect(() => {
    const t = setTimeout(() => scrollTo(0), 50);
    return () => clearTimeout(t);
  }, []);

  return { viewportRef, index, next, prev, scrollTo };
}
