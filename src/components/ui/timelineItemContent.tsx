import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const timelineItemContentVariants = cva(
    "flex flex-col gap-1 pt-4 pb-6 w-60",

    {
        variants: {
            align: {
                left: "text-left items-start",
                right: "text-right items-end",
            },
        },
        defaultVariants: {
            align: "left",
        },
    }
)

export interface TimelineItemContentProps extends VariantProps<typeof timelineItemContentVariants> {
    date: string;
    title: string;
    description?: string;
    className?: string;
    headingLevel?: keyof React.JSX.IntrinsicElements
}

export const TimelineItemContent: React.FC<TimelineItemContentProps> = ({
    date,
    title,
    description,
    align,
    className,
    headingLevel = "h4",
}) => {
    const HeadingTag = headingLevel;

    return (
        <div className={cn(timelineItemContentVariants({ align }), className)}>
            <div className='font-secondary text-size-500 text-neutral-600 leading-line-height-body-1 font-heavy'>
                {date}
            </div>
            <HeadingTag
                className={cn(
                    'font-primary font-heavy dark:text-black text-black text-size-700 leading-line-height-heading-4 '
                )}>
                {title}
            </HeadingTag>
            {description ? (
                <p className='font-secondary text-black text-size-400 leading-line-height-body-2 pt-2'>
                    {description}
                </p>
            ) : null}
        </div>

    )
}