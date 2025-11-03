import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { TimelineItemContent } from '@/components/ui/timelineItemContent';

export const timelineItemVariants = cva(
    "relative flex items-start gap-2 w-full",
    {
        variants: {
            side: {
                left: "flex-row text-left",
                right: "flex-row-reverse text-right",
            }
        },
        defaultVariants: {
            side: "left"
        }
    }
)

export interface TimelineItemProps extends VariantProps<typeof timelineItemVariants> {
    date: string;
    title: string;
    description?: string;
    className?: string;
    headingLevel?: keyof React.JSX.IntrinsicElements;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
    side,
    date,
    title,
    description,
    headingLevel,
    className,
}) => {
    const isLeft = side === "left";

    return (
        <li className={cn(timelineItemVariants({ side }), className)}>
            <div className='relative flex flex-col items-center'>
                <div className='w-0.5 bg-[var(--color-neutral-300)] h-4'/>
                    <span className={cn(
                        "m-1.5 h-3 w-3 rounded-full bg-accent"
                    )}
                        aria-hidden="true" />
                    <div className='w-0.5 dark:bg-[var(--color-neutral-300)] bg-[var(--color-neutral-300)] h-[196px]'/>
                    </div>
                    <TimelineItemContent
                    date={date}
                    title={title}
                    description={description}
                    align={isLeft ? "left" : "right"}
                    headingLevel= {headingLevel ?? "h4"}
                    className={cn(
                        "w-60 pt-4 pb-6"
                    )}
                    />
        </li>
    )
}