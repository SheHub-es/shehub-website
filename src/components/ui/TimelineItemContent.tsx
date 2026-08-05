import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const timelineItemContentVariants = cva(
    "flex flex-col gap-1 pt-4 pb-6",

    {
        variants: {
            align: {
                left: "text-left items-start",
                right: "text-right items-end",
                center: "text-center items-center",
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
    headingLevel?: keyof React.JSX.IntrinsicElements;
    id?: string;
    emphasizeTitle?: boolean;
}

export const TimelineItemContent: React.FC<TimelineItemContentProps> = ({
    date,
    title,
    description,
    align,
    className,
    headingLevel = "h4",
    id,
    emphasizeTitle = false,
}) => {
    const HeadingTag = headingLevel;
    const descriptionId = id ? `${id}-description` : undefined;

    return (
        <article
            className={cn(timelineItemContentVariants({ align }), className)}
            id={id}
            tabIndex={0}
            aria-labelledby={id ? `${id}-title` : undefined}
            aria-describedby={description && descriptionId ? descriptionId : undefined}
        >
            <time 
                className='font-secondary text-size-500 text-neutral-600 leading-line-height-body-1 font-heavy'
                dateTime={date}
            >
                {date}
            </time>
            <HeadingTag
                id={id ? `${id}-title` : undefined}
                className={cn(
                    'font-primary font-heavy text-size-700 leading-line-height-heading-4',
                    emphasizeTitle ? 'text-primary' : 'dark:text-black text-black'
                )}
            >
                {title}
            </HeadingTag>
            {description ? (
                <p 
                    id={descriptionId}
                    className='font-secondary text-black text-size-400 leading-line-height-body-2 pt-2'
                >
                    {description}
                </p>
            ) : null}
        </article>

    )
}