import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva(
    'transition-all box-border focus-visible:outline-none',
    {
        variants: {
            type: {
                clickable:
                    'inline-flex items-center justify-center gap-7 p-6 cursor-pointer ' +
                    'focus-visible:ring-2 focus-visible:ring-[var(--color-card-focus)] focus-visible:ring-offset-2',
                nonClickable: 'flex flex-col items-start gap-7 p-10',
                nonClickableWithIcon: 'flex flex-col items-start gap-7 p-10'
            },
            color: {
                white: '',
                purple: '',
                lightPurple: ''
            },
            state: {
                default: 'shadow-[var(--color-card-shadow-default)]',
                hover: 'hover:shadow-[var(--color-card-shadow-hover)]',
                focus: 'outline outline-2 outline-[var(--color-card-focus)]',
                disabled:
                    'bg-[var(--color-card-bg-disabled)] text-gray-400 cursor-not-allowed opacity-50 pointer-events-none'
            },
            radius: {
                sm: 'rounded-[34px]',
                md: 'rounded-[48px]',
                lg: 'rounded-[64px]'
            }
        },
        compoundVariants: [
            {
                type: 'clickable',
                state: 'disabled',
                class: 'pointer-events-none'
            },
            /// Clickable white
            { type: 'clickable', color: 'white', class: 'bg-[var(--color-card-white-bg-default)] text-[var(--color-card-white-text)] hover:bg-[var(--color-card-white-bg-hover)]' },
            // Clickable purple
            {
                type: 'clickable',
                color: 'purple',
                class: 'bg-[var(--color-card-clickable-purple-bg-default)] text-white hover:bg-[var(--color-card-clickable-purple-bg-hover)]'
            },
            // Non-clickable purple
            {
                type: 'nonClickable',
                color: 'purple',
                class: 'bg-[var(--color-card-non-clickable-purple-bg)] text-[var(--color-card-non-clickable-purple-text)]'
            },
            // Non-clickable lightPurple
            {
                type: 'nonClickable',
                color: 'lightPurple',
                class: 'bg-[var(--color-card-non-clickable-light-purple-bg)] text-[var(--color-card-non-clickable-light-purple-text)]'
            }
        ],
        defaultVariants: {
            type: 'clickable',
            color: 'white',
            state: 'default',
            radius: 'md'
        }
    }
)

const cardIconVariants = cva('', {
    variants: {
        type: {
            clickable: '',
            nonClickable: '',
            nonClickableWithIcon: ''
        },
        color: {
            white: '',
            purple: '',
            lightPurple: ''
        }
    },
    compoundVariants: [
        { type: 'clickable', color: 'white', class: 'text-[var(--color-card-white-icon)]' },
        { type: 'clickable', color: 'purple', class: 'text-white' },
        { type: 'clickable', color: 'lightPurple', class: 'text-purple-500' },

        { type: 'nonClickable', color: 'white', class: 'text-[var(--color-card-white-icon)]' },
        { type: 'nonClickable', color: 'purple', class: 'text-[var(--color-card-non-clickable-purple-icon)]' },
        { type: 'nonClickable', color: 'lightPurple', class: 'text-[var(--color-card-non-clickable-light-purple-icon)]' }
    ]
})

const cardContentVariants = cva('flex flex-col text-left', {
    variants: {
        type: {
            clickable: 'gap-2',
            nonClickable: 'gap-3',
            nonClickableWithIcon: 'gap-4'
        },
        hasIcon: {
            true: 'mt-2',
            false: ''
        }
    },
    compoundVariants: [
        { type: 'nonClickableWithIcon', hasIcon: true, class: 'gap-5 mt-4' },
    ],
    defaultVariants: {
        type: 'clickable',
        hasIcon: false
    }
})


type CardProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof cardVariants> & {
        icon?: React.ReactNode
        title?: string
        description?: string
    }

export const Card: React.FC<CardProps> = ({
    icon,
    title,
    description,
    type = 'clickable',
    color = 'white',
    state = 'default',
    radius = 'md',
    className,
    ...props
}) => {
    return (
        <div
            tabIndex={type === 'clickable' ? 0 : -1}
            className={cn(
                cardVariants({
                    type,
                    color,
                    state,
                    radius,
                }),
                className
            )}
            {...props}
        >
            {icon && <div className={cn('text-5xl mb-4', cardIconVariants({ type, color }))}>{icon}</div>}

            {(title || description) && (
                <div className={cn(cardContentVariants({
                    type,
                    hasIcon: Boolean(icon)
                }))}>
                    {title && (
                        <h3
                            className={cn(
                                'font-heavy',
                                type === 'nonClickable' ? 'text-size-900' : 'text-size-500'
                            )}
                        >
                            {title}
                        </h3>
                    )}
                    {description && <p className="text-size-300 ">{description}</p>}
                </div>
            )}
        </div>
    )
}
