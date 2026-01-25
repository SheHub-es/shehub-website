import { TimelineItemContent } from "@/components/ui/TimelineItemContent";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

export type TimelineItemData = {
    id?: string;
    date: string;
    title: string;
    description?: string;
    headingLevel?: keyof React.JSX.IntrinsicElements;
};

export const timelineVariants = cva("relative mx-auto w-full max-w-4xl", {
    variants: {
        variant: {
            left: "",
            right: "",
            alternate: "",
            opposite: "",
        },
    },
    defaultVariants: {
        variant: "alternate",
    },
});

export interface TimelineProps extends VariantProps<typeof timelineVariants> {
    items: TimelineItemData[];
    className?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
}

const resolveSideFromVariant = (
    variant: TimelineProps["variant"],
    index: number
): "left" | "right" => {
    const safeVariant = variant ?? "left";

    switch (safeVariant) {
        case "left":
            return "left";
        case "right":
            return "right";
        case "alternate":
            return index % 2 === 0 ?  "right" : "left" ;
        default:
            return "left";
    }
};

export const Timeline: React.FC<TimelineProps> = ({
    items,
    variant = "alternate",
    className,
    ariaLabel,
    ariaLabelledBy,
}) => {
    const groupedItems =
        variant === "opposite"
            ? Array.from({ length: Math.ceil(items.length / 2) }, (_, i) =>
                items.slice(i * 2, i * 2 + 2)
            )
            : [];

    return (
        <div 
            className={cn(timelineVariants({ variant }), "p-5", className)}
            role="list"
            aria-label={ariaLabel || "Timeline de eventos"}
            aria-labelledby={ariaLabelledBy}
            style={{ minHeight: '1px' }}
        >
            {variant === "opposite" ? (
                <ol className="relative flex flex-col" role="list">
                    {groupedItems.map((pair, pairIndex) => {
                        const isLast = pairIndex === groupedItems.length - 1;
                        return (
                            <li
                                key={pairIndex}
                                className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start gap-4 md:gap-0"
                                role="listitem"
                                aria-posinset={pairIndex + 1}
                                aria-setsize={groupedItems.length}
                            >
                                {/* Mobile: First item */}
                                {pair[0] && (
                                    <>
                                        <div className="flex justify-center md:hidden mb-2" aria-hidden="true">
                                            <div className="relative flex flex-col items-center w-full max-w-md">
                                                <div className="w-0.5 bg-[var(--color-neutral-300)] h-4" />
                                                <span
                                                    aria-hidden="true"
                                                    className="m-1.5 h-3 w-3 rounded-full bg-accent"
                                                    role="presentation"
                                                />
                                                {!isLast && (
                                                    <div className="w-0.5 bg-[var(--color-neutral-300)] flex-1 min-h-[80px]" />
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex justify-center md:justify-end md:col-span-1 px-4 md:px-0">
                                            <div className="w-full max-w-md md:max-w-none md:w-auto">
                                                <TimelineItemContent
                                                    id={pair[0].id ? `timeline-item-${pair[0].id}` : `timeline-item-${pairIndex}-0`}
                                                    date={pair[0].date}
                                                    title={pair[0].title}
                                                    description={pair[0].description}
                                                    align="left"
                                                    headingLevel={pair[0].headingLevel ?? "h4"}
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Desktop: Central line */}
                                <div className="hidden md:flex justify-center" aria-hidden="true">
                                    <div className="relative flex flex-col items-center">
                                        <div className="w-0.5 bg-[var(--color-neutral-300)] h-4" />
                                        <span
                                            aria-hidden="true"
                                            className="m-1.5 h-3 w-3 rounded-full bg-accent"
                                            role="presentation"
                                        />
                                        {!isLast && (
                                            <div className="w-0.5 bg-[var(--color-neutral-300)] h-[196px]" />
                                        )}
                                    </div>
                                </div>

                                {/* Mobile: Second item */}
                                {pair[1] && (
                                    <div className="flex justify-center md:justify-start md:col-span-1 px-4 md:px-0">
                                        <div className="w-full max-w-md md:max-w-none md:w-auto">
                                            <TimelineItemContent
                                                id={pair[1].id ? `timeline-item-${pair[1].id}` : `timeline-item-${pairIndex}-1`}
                                                date={pair[1].date}
                                                title={pair[1].title}
                                                description={pair[1].description}
                                                align="left"
                                                headingLevel={pair[1].headingLevel ?? "h4"}
                                            />
                                        </div>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ol>
            ) : (
                <ol className="relative flex flex-col" role="list">
                    {items.map((item, index) => {
                        const side = resolveSideFromVariant(variant, index);
                        const isLeft = side === "left";
                        const isLast = index === items.length - 1;

                        return (
                            <li
                                key={item.id ?? index}
                                className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start"
                                role="listitem"
                                aria-posinset={index + 1}
                                aria-setsize={items.length}
                            >
                                {/* Mobile: Single column layout, centered */}
                                <div className="flex justify-center md:hidden mb-2" aria-hidden="true">
                                    <div className="relative flex flex-col items-center w-full max-w-md">
                                        <div className="w-0.5 bg-[var(--color-neutral-300)] h-4" />
                                        <span
                                            aria-hidden="true"
                                            className="m-1.5 h-3 w-3 rounded-full bg-accent"
                                            role="presentation"
                                        />
                                        {!isLast && (
                                            <div className="w-0.5 bg-[var(--color-neutral-300)] flex-1 min-h-[80px]" />
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-center md:justify-end md:col-span-1 px-4 md:px-0">
                                    <div className="w-full max-w-md md:max-w-none md:w-auto">
                                        {isLeft ? (
                                            <TimelineItemContent
                                                id={item.id ? `timeline-item-${item.id}` : `timeline-item-${index}`}
                                                date={item.date}
                                                title={item.title}
                                                description={item.description}
                                                align="left"
                                                headingLevel={item.headingLevel ?? "h4"}
                                            />
                                        ) : (
                                            <div className="hidden md:block" />
                                        )}
                                    </div>
                                </div>

                                {/* Desktop: Central line */}
                                <div className="hidden md:flex justify-center" aria-hidden="true">
                                    <div className="relative flex flex-col items-center">
                                        <div className="w-0.5 bg-[var(--color-neutral-300)] h-4" />
                                        <span
                                            aria-hidden="true"
                                            className="m-1.5 h-3 w-3 rounded-full bg-accent"
                                            role="presentation"
                                        />
                                        {!isLast && (
                                            <div className="w-0.5 bg-[var(--color-neutral-300)] h-[196px]" />
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-center md:justify-start md:col-span-1 px-4 md:px-0">
                                    <div className="w-full max-w-md md:max-w-none md:w-auto">
                                        {!isLeft ? (
                                            <TimelineItemContent
                                                id={item.id ? `timeline-item-${item.id}` : `timeline-item-${index}`}
                                                date={item.date}
                                                title={item.title}
                                                description={item.description}
                                                align="left"
                                                headingLevel={item.headingLevel ?? "h4"}
                                            />
                                        ) : (
                                            <div className="hidden md:block" />
                                        )}
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            )}
        </div>
    );
};
