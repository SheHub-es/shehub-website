import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
    'transition-all box-border',
    {
        variants: {
            type: {
                clickable:
                    [
                        'w-[296px] inline-flex', 'items-center', 'justify-center',
                        'gap-7', 'p-6', 'cursor-pointer',
                    ].join(' '),
                nonClickable: ['flex flex-col items-start gap-7 p-10 w-[308px]',
                ].join(' '),
                nonClickableWithIcon: ['flex flex-col items-start gap-7 p-10 w-[388px]'
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
        type: ['nonClickable', 'nonClickableWithIcon'],
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

const cardIconVariants = cva('w-[44px]', {
  variants: {
    color: {
      white: 'text-[var(--color-card-white-icon)]',
      purple: 'text-[var(--color-card-non-clickable-purple-icon)]',
      lightPurple: 'text-[var(--color-card-non-clickable-light-purple-icon)]'
    }
  },
  defaultVariants: {
    color: 'white'
  }
});

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
    {
      type: 'nonClickableWithIcon',
      hasIcon: true,
      class: 'gap-5 mt-4'
    }
  ],
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
      nonClickableWithIcon: 'text-size-500 font-secondary'
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
      color: {
        white: 'text-[var(--color-card-white-description)]',
        purple: 'text-[var(--color-card-non-clickable-purple-description)]',
        lightPurple: 'text-[var(--color-card-non-clickable-light-purple-description)]'
      }
    },
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
};

type IconCardProps = BaseProps & {
  type: 'nonClickableWithIcon';
  icon: React.ReactNode;
};

type SimpleCardProps = BaseProps & {
  type?: 'clickable' | 'nonClickable';
  icon?: never;
};

export type CardProps = IconCardProps | SimpleCardProps;

export const Card: React.FC<CardProps> = (props) => {
  const {
    type = 'clickable',
    color = 'white',
    state = 'default',
    radius = 'md',
    title,
    description,
    icon,
    className,
    ...rest
  } = props;

    return (
        <div
            tabIndex={type === 'clickable' && state !== 'disabled' ? 0 : -1}
            className={cn(cardVariants({ type, color, state, radius }), className)}
            {...rest}
        >
            {type === 'nonClickableWithIcon' && icon && (
                <div className={cn('mb-6', cardIconVariants({ color }))}>
                    {icon}
                </div>
            )}

      {(title || description) && (
        <div className={cn(cardContentVariants({ type, hasIcon: type === 'nonClickableWithIcon' }))}>
          {title && (
            <h3 className={cardTitleVariants({ type, color })}>
              {title}
            </h3>
          )}
          {description && (
            <p className={cardDescriptionVariants({ color })}>
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
