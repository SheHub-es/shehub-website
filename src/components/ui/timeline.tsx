import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { TimelineItemContent } from "@/components/ui/timelineItemContent";

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
}) => {
    const groupedItems =
        variant === "opposite"
            ? Array.from({ length: Math.ceil(items.length / 2) }, (_, i) =>
                items.slice(i * 2, i * 2 + 2)
            )
            : [];

    return (
        <div className={cn(timelineVariants({ variant }), "p-5", className)}>
            {variant === "opposite" ? (
                <ol className="relative flex flex-col">
                    {groupedItems.map((pair, pairIndex) => (
                        <li
                            key={pairIndex}
                            className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start"
                        >
                            <div className="flex justify-end">
                                {pair[0] && (
                                    <TimelineItemContent
                                        date={pair[0].date}
                                        title={pair[0].title}
                                        description={pair[0].description}
                                        align="right"
                                        headingLevel={pair[0].headingLevel ?? "h4"}
                                    />
                                )}
                            </div>

                            <div className="flex justify-center">
                                <div className="relative flex flex-col items-center">
                                    <div className="w-0.5 bg-[var(--color-neutral-300)] h-4" />
                                    <span
                                        aria-hidden="true"
                                        className="m-1.5 h-3 w-3 rounded-full bg-accent"
                                    />
                                    <div className="w-0.5 bg-[var(--color-neutral-300)] h-[196px]" />
                                </div>
                            </div>

                            <div className="flex justify-start">
                                {pair[1] && (
                                    <TimelineItemContent
                                        date={pair[1].date}
                                        title={pair[1].title}
                                        description={pair[1].description}
                                        align="left"
                                        headingLevel={pair[1].headingLevel ?? "h4"}
                                    />
                                )}
                            </div>
                        </li>
                    ))}
                </ol>
            ) : (
                <ol className="relative flex flex-col">
                    {items.map((item, index) => {
                        const side = resolveSideFromVariant(variant, index);
                        const isLeft = side === "left";

                        return (
                            <li
                                key={item.id ?? index}
                                className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start"
                            >
                                {isLeft ? (
                                    <div className="flex justify-end">
                                        <TimelineItemContent
                                            date={item.date}
                                            title={item.title}
                                            description={item.description}
                                            align="right"
                                            headingLevel={item.headingLevel ?? "h4"}
                                        />
                                    </div>
                                ) : (
                                    <div />
                                )}

                                <div className="flex justify-center">
                                    <div className="relative flex flex-col items-center">
                                        <div className="w-0.5 bg-[var(--color-neutral-300)] h-4" />
                                        <span
                                            aria-hidden="true"
                                            className="m-1.5 h-3 w-3 rounded-full bg-accent"
                                        />
                                        <div className="w-0.5 bg-[var(--color-neutral-300)] h-[196px]" />
                                    </div>
                                </div>

                                {!isLeft ? (
                                    <div className="flex justify-start">
                                        <TimelineItemContent
                                            date={item.date}
                                            title={item.title}
                                            description={item.description}
                                            align="left"
                                            headingLevel={item.headingLevel ?? "h4"}
                                        />
                                    </div>
                                ) : (
                                    <div />
                                )}
                            </li>
                        );
                    })}
                </ol>
            )}
        </div>
    );
};
