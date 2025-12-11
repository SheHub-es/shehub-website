import Avatar, { AvatarItem, type AvatarSize } from '@/components/ui/Avatar';
import { AvatarGroup, AvatarGroupVariants } from '@/components/ui/AvatarGroup';
import { Icon, IconProps } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import Image, { type StaticImageData } from 'next/image';
import * as React from 'react';

interface CardVariantProps extends VariantProps<typeof cardVariants> {
    title?: string;
    description?: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    className?: string;
}

const cardVariants = cva(
    'transition-all box-border',
    {
        variants: {
            type: {
                clickable:
                    [
                        'w-[13.5rem] h-[7rem] inline-flex items-center justify-center gap-7 p-8 cursor-pointer !rounded-[8px]',
                    ].join(' '),
                nonClickable: ['flex flex-col items-start gap-2.5 p-10 w-[18.5rem]',
                ].join(' '),
                nonClickableWithIcon: ['flex flex-col items-start gap-7 p-10 w-[24.375rem] h-[18rem]'
                ].join(' '),
                nonClickableWithIconAndCorner: ['flex flex-col items-start self-start gap-7 p-8 w-auto h-auto '
                ].join(' '),
                nonClickableWithAvatarAndCorner: ['flex flex-col items-start self-start gap-7 px-8 py-6 w-[11.25rem]'
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
                sm: 'rounded-[32px]',
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
                white: 'text-card-white-description',
                purple: 'text-card-non-clickable-purple-description',
                lightPurple: 'text-card-non-clickable-light-purple-description'
            },
            tone: {
                default: '',
                impact: ''
            }
        },
        compoundVariants: [
            {
                type: ['nonClickableWithIconAndCorner', 'nonClickableWithAvatarAndCorner'],
                color: 'white',
                class: 'text-card-white-title'
            },
            {
                tone: 'impact',
                color: 'white',
                class: 'text-card-white-title'
            }
        ],
        defaultVariants: {
            color: 'white',
            tone: 'default'
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
    tone?: 'default' | 'impact';
};

type ClickableCardProps = {
    type: 'clickable';
    color?: 'white' | 'purple' | 'lightPurple';
    state?: 'default' | 'hover' | 'disabled';
    radius?: 'sm' | 'md' | 'lg';
    corner?: never;
    title?: never;
    description?: never;
    icon?: never;
    avatars?: never;
    logoSrc: string | StaticImageData;
    logoAlt?: string;
};


type IconCardProps = BaseProps & {
    type: 'nonClickableWithIcon' | 'nonClickableWithIconAndCorner';
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    iconArialLabel?: string;
};

type SimpleCardProps = BaseProps & {
    type?: 'clickable' | 'nonClickable';
    icon?: never;
};

type Corner = 'tl' | 'tr' | 'bl' | 'br';

type AvatarCardProps = BaseProps & {
    type: 'nonClickableWithAvatarAndCorner';
    avatarsData: AvatarItem[];
    avatarSize?: AvatarSize;
    overlap?: boolean;
    maxAvatars?: number;
    avatarGroupVariant?: AvatarGroupVariants
    groupSize?: number
    icon?: never;
};

export type CardProps = IconCardProps | ClickableCardProps | SimpleCardProps | AvatarCardProps;

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
        tone = 'default',
        ...rest
    } = props as any;

    return (
        <div
            tabIndex={type === 'clickable' && state !== 'disabled' ? 0 : -1}
            className={cn(cardVariants({ type, color, state, radius, corner }), className)}
            {...rest}
        >

            {type === 'clickable' && (
                <div
                    aria-label={(props as ClickableCardProps).logoAlt ?? 'Logo'}
                    className=" relative w-full h-full overflow-hidden flex items-center justify-center [&_img]:max-w-full [&_img]:max-h-full [&_img]:h-auto"
                >
                    <Image
                        src={(props as ClickableCardProps).logoSrc}
                        alt={(props as ClickableCardProps).logoAlt ?? 'Logo'}
                        fill
                        className="object-contain"
                    />
                </div>
            )}

            {(type === 'nonClickableWithIcon' || type === 'nonClickableWithIconAndCorner') && icon && (
                <div>
                    {(() => {
                        return (
                            <Icon
                                icon={icon}
                                size="xl"
                                aria-label={(props as any).iconArialLabel ?? "Card icon"}
                            />
                        );
                    })()}
                </div>
            )}

            {type === 'nonClickableWithAvatarAndCorner' && (
                <AvatarGroup
                avatars={(props as AvatarCardProps).avatarsData}
                size={(props as AvatarCardProps).avatarSize ?? 'sm'}
                overlap={(props as AvatarCardProps).overlap ?? true}
                maxAvatars={(props as AvatarCardProps).maxAvatars}
                variant={(props as AvatarCardProps).avatarGroupVariant}
                />
            )}

            {(type !== 'clickable' && (title || description)) && (
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
                        <p className={cardDescriptionVariants({ color, type, tone })}>
                            {description}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};
