import React from "react";
import { LucideProps } from "lucide-react";
import clsx from "clsx";

type IconSize = "sm" | "md" | "lg" | "xl" | "2xl" | number;

interface IconProps {
    icon: React.FC<LucideProps>;
    size?: IconSize;
    interactive?: boolean;
    className?: string;
    onClick?: () => void;
    "aria-label"?: string;
}

const sizeMap: Record<Exclude<IconSize, number>, number> = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    "2xl": 44,
};

export const Icon: React.FC<IconProps> = ({
    icon: IconComponent,
    size = "md",
    interactive = false,
    className,
    onClick,
    ...props
}) => {
    const px = typeof size === "number" ? size : sizeMap[size];
    const Wrapper = interactive ? "button" : "span";

    return (
        <Wrapper
            onClick={onClick}
            className={clsx(
                "flex items-center justify-center rounded-full",
                "text-[var(--color-icon-default)]",
                interactive &&
                "cursor-pointer hover:text-[var(--color-icon-hover)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-icon-hover)]",
                className
            )}
            style={{
                width: px >= 44 ? px : 44,
                height: px >= 44 ? px : 44,
            }}
            {...props}
        >
            <IconComponent size={px} strokeWidth={2} color="currentColor"/>
        </Wrapper>
    );
};
