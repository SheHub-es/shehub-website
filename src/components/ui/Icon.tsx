import React from "react";
import clsx from "clsx";

type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | number;

export interface IconProps {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    size?: IconSize;
    interactive?: boolean;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    "aria-label"?: string;
}

const sizeMap: Record<Exclude<IconSize, number>, number> = {
    xs: 12,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 44,
    "2xl": 52,
};

export const Icon: React.FC<IconProps> = ({
    icon: IconComponent,
    size = "md",
    interactive = false,
    className,
    onClick,
    disabled,
    ...props
}) => {
    const px = typeof size === "number" ? size : sizeMap[size];
    const Wrapper = interactive ? "button" : "span";


    return (
        <Wrapper
            {...(interactive ? ({ type: "button" } as any) : {})}
            onClick={disabled ? undefined : onClick}
            aria-disabled={interactive ? disabled : undefined}
            className={clsx(
                "flex items-center justify-center rounded-full text-[var(--color-icon-default)]",
                interactive &&
                "cursor-pointer hover:text-[var(--color-icon-hover)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-icon-hover)]",
                disabled && "opacity-40 pointer-events-none",
                className
            )}
            style={{
                width: px >= 44 ? px : 44,
                height: px >= 44 ? px : 44,
            }}
            {...props}
        >
            <IconComponent width={px} height={px} fill="currentColor" stroke="currentColor" />
        </Wrapper>
    );
};
