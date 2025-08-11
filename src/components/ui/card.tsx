import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';
import { LucideProps } from 'lucide-react';

const cardVariants = cva(
    'transition-all box-border',
    {
        variants: {
            type: {
                clickable:
                    [
                        'w-[13.5rem] h-[7rem] inline-flex', 'items-center', 'justify-center',
                        'gap-7', 'p-[1.5rem]', 'cursor-pointer',
                    ].join(' '),
                nonClickable: ['flex flex-col items-start gap-2.5 p-10 w-[18.5rem] h-[14.25rem]',
                ].join(' '),
                nonClickableWithIcon: ['flex flex-col items-start gap-7 p-10 w-[24.25rem] h-[20rem]'
                ].join(' '),
                nonClickableWithIconAndCorner: ['flex flex-col items-start gap-7 p-8 w-auto h-auto '
                ].join(' '),
                nonClickableWithAvatarAndCorner: ['flex flex-col items-start gap-7 px-8 py-6 w-[11.25rem]'
                ].join(' ')
            },
            color: {
                white: '',
                purple: '',
                lightPurple: ''
            },
            state: {
                default: 'shadow-[var(--color-card-shadow-default)]',
                hover: 'hover:shadow-[var(--color-card-shadow-hover)]',
                disabled:
                    'bg-[var(--color-card-bg-disabled)] text-gray-400 opacity-50 pointer-events-none cursor-not-allowed'
            },
            radius: {
                sm: 'rounded-[34px]',
                md: 'rounded-[48px]',
                lg: 'rounded-[64px]'
            },
            corner: {
                tl: 'rounded-tl-[4px] rounded-tr-[48px] rounded-br-[48px] rounded-bl-[48px]',
                tr: 'rounded-tr-[4px] rounded-tl-[48px] rounded-br-[48px] rounded-bl-[48px]',
                bl: 'rounded-bl-[4px] rounded-tl-[48px] rounded-tr-[48px] rounded-br-[48px]',
                br: 'rounded-br-[4px] rounded-tl-[48px] rounded-tr-[48px] rounded-bl-[48px]',
            }
        },
        compoundVariants: [

            {
                type: 'clickable',
                state: 'disabled',
                class: 'pointer-events-none'
            },

            {
                type: 'clickable',
                color: 'white',
                class: [
                    'bg-[var(--color-card-white-bg-default)]',
                    'text-[var(--color-card-white-text)]',
                    'hover:bg-[var(--color-card-white-bg-hover)]',
                    'hover:shadow-[var(--color-card-shadow-hover)]'
                ].join(' ')
            },

            {
                type: 'clickable',
                color: 'purple',
                class: [
                    'bg-[var(--color-card-clickable-purple-bg-default)]',
                    'text-white',
                    'hover:bg-[var(--color-card-clickable-purple-bg-hover)]',
                    'hover:shadow-[var(--color-card-shadow-hover)]'
                ].join(' ')
            },

            {
                type: ['nonClickable', 'nonClickableWithIcon'],
                color: 'purple',
                class: [
                    'bg-[var(--color-card-non-clickable-purple-bg)]',
                    'text-[var(--color-card-non-clickable-purple-text)]'
                ].join(' ')
            },
            {
                type: ['nonClickable', 'nonClickableWithIcon'],
                color: 'lightPurple',
                class: [
                    'bg-[var(--color-card-non-clickable-light-purple-bg)]',
                    'text-[var(--color-card-non-clickable-light-purple-text)]'
                ].join(' ')
            },
            {
                type: ['nonClickable', 'nonClickableWithIcon', 'nonClickableWithIconAndCorner', 'nonClickableWithAvatarAndCorner'],
                color: 'white',
                class: [
                    'bg-[var(--color-card-white-bg-default)]',
                    'text-[var(--color-card-white-text)]'
                ].join(' ')
            }
        ],
        defaultVariants: {
            type: 'clickable',
            color: 'white',
            state: 'default',
            radius: 'md'
        }
    }
);

const cardContentVariants = cva('flex flex-col text-left', {
    variants: {
        type: {
            clickable: 'gap-2',
            nonClickable: 'gap-3',
            nonClickableWithIcon: 'gap-4',
            nonClickableWithIconAndCorner: 'gap-2',
            nonClickableWithAvatarAndCorner: 'gap-2'
        },
        hasIcon: {
            true: '',
            false: ''
        }
    },
    defaultVariants: {
        type: 'clickable',
        hasIcon: false
    }
});

const cardTitleVariants = cva('font-heavy', {
    variants: {
        type: {
            clickable: 'text-size-500',
            nonClickable: 'text-size-900 font-primary',
            nonClickableWithIcon: 'text-size-500 font-secondary',
            nonClickableWithIconAndCorner: 'text-size-900 font-primary',
            nonClickableWithAvatarAndCorner: 'text-size-900 font-primary'
        },
        color: {
            white: 'text-[var(--color-card-white-title)]',
            purple: 'text-[var(--color-card-non-clickable-purple-title)]',
            lightPurple: 'text-[var(--color-card-non-clickable-light-purple-title)]'
        }
    },
    defaultVariants: {
        type: 'clickable',
        color: 'white'
    }
});

const cardDescriptionVariants = cva(
    [
        'text-size-300',
        'font-secondary'
    ].join(' '),
    {
        variants: {
            type: {
                clickable: '',
                nonClickable: '',
                nonClickableWithIcon: '',
                nonClickableWithIconAndCorner: '',
                nonClickableWithAvatarAndCorner: '',
            },
            color: {
                white: 'text-[var(--color-card-white-description)]',
                purple: 'text-[var(--color-card-non-clickable-purple-description)]',
                lightPurple: 'text-[var(--color-card-non-clickable-light-purple-description)]'
            }
        },
        compoundVariants: [
            {
                type: ['nonClickableWithIconAndCorner', 'nonClickableWithAvatarAndCorner'],
                color: 'white',
                class: 'text-[var(--color-card-white-title)]'
            },
        ],
        defaultVariants: {
            color: 'white'
        }
    }
);

type BaseProps = React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    description?: string;
    color?: 'white' | 'purple' | 'lightPurple';
    state?: 'default' | 'hover' | 'disabled';
    radius?: 'sm' | 'md' | 'lg';
    corner?: Corner;
};

type IconCardProps = BaseProps & {
    type: 'nonClickableWithIcon' | 'nonClickableWithIconAndCorner';
    icon: React.FC<LucideProps>;
    iconArielLabel?: string;
};

type SimpleCardProps = BaseProps & {
    type?: 'clickable' | 'nonClickable';
    icon?: never;
};

type Corner = 'tl' | 'tr' | 'bl' | 'br';

type AvatarCardProps = BaseProps & {
    type: 'nonClickableWithAvatarAndCorner';
    avatars: React.ReactNode;
    icon?: never;
};

export type CardProps = IconCardProps | SimpleCardProps | AvatarCardProps;

export const Card: React.FC<CardProps> = (props) => {
    const {
        type = 'clickable',
        color = 'white',
        state = 'default',
        radius = 'md',
        corner,
        title,
        description,
        icon,
        className,
        ...rest
    } = props as any;

    return (
        <div
            tabIndex={type === 'clickable' && state !== 'disabled' ? 0 : -1}
            className={cn(cardVariants({ type, color, state, radius, corner }), className)}
            {...rest}
        >
            {(type === 'nonClickableWithIcon' || type === 'nonClickableWithIconAndCorner') && icon && (
                <div>
                    <Icon
                        icon={icon}
                        size="2xl"
                        aria-label={(props as any).iconArielLabel ?? 'Card icon'}
                    />
                </div>
            )}

            {type === 'nonClickableWithAvatarAndCorner' && (
                <div>{(props as any).avatars}</div>
            )}

            {(title || description) && (
                <div className={cn(cardContentVariants({
                    type,
                    hasIcon:
                        type === 'nonClickableWithIcon' ||
                        type === 'nonClickableWithIconAndCorner' ||
                        type === 'nonClickableWithAvatarAndCorner'
                }))}>
                    {title && (
                        <h3 className={cardTitleVariants({ type: type as any, color })}>
                            {title}
                        </h3>
                    )}
                    {description && (
                        <p className={cardDescriptionVariants({ color, type })}>
                            {description}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};
