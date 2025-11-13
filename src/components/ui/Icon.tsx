import React, { JSX } from "react";
import { LucideProps } from "lucide-react";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

type IconSize = "sm" | "md" | "lg" | "xl" | "2xl" | number;

interface IconProps {
    icon: React.ComponentType<LucideProps> | string | StaticImageData | JSX.Element;
    size?: IconSize;
    interactive?: boolean;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    "aria-label"?: string;
}

const sizeMap: Record<Exclude<IconSize, number>, number> = {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 44,
    "2xl": 52,
};

export const Icon: React.FC<IconProps> = ({
    icon,
    size = "md",
    interactive = false,
    className,
    onClick,
    disabled,
    ...props
}) => {
    const px = typeof size === "number" ? size : sizeMap[size];
    const Wrapper = interactive ? "button" : "span";

    const renderContent = () => {
        if (React.isValidElement(icon)) {
            if (typeof (icon as any).type === "string" && ((icon as any).type as string).toLowerCase() === "svg") {
                const svgEl = icon as React.ReactElement<React.SVGProps<SVGSVGElement>>;
                return React.cloneElement<React.SVGProps<SVGSVGElement>>(svgEl, {
                    width: svgEl.props.width ?? px,
                    height: svgEl.props.height ?? px,
                });
            }
            return icon;
        }
        const isStaticAsset =
            typeof icon === "object" && icon !== null && "src" in (icon as any);
        if (typeof icon === "string" || isStaticAsset) {
            return (
                <Image
                    src={icon as string | StaticImageData}
                    alt={props["aria-label"] ?? "icon"}
                    width={px}
                    height={px}
                />
            );
        }

        const Comp = icon as React.ComponentType<LucideProps>;
        return <Comp size={px} strokeWidth={2} color="currentColor" />;
    };

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
            {renderContent()}
        </Wrapper>
    );
};
