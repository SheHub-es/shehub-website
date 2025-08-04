import { cn } from "@/lib/utils";
import * as React from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: "inline" | "standalone";
}

// This component is used to create styled links with different variants

const variants = {

    // Inline link styles

    inline: cn(
        "text-[var(--color-purple-500)] underline underline-offset-2 decoration-1",
        "hover:text-[var(--color-purple-600)]",
        "focus:outline focus:outline-2 focus:outline-[var(--color-purple-200)] focus:outline-offset-2",
        "active:text-[var(--color-neutral-900)] visited:text-[var(--color-purple-700)]",
        "transition-colors duration-200 px-1 py-2 inline-block"
    ),

    // Standalone link styles

    standalone: cn(
        "text-[var(--color-purple-500)]",
        "hover:underline hover:text-[var(--color-purple-600)]",
        "focus:outline focus:outline-2 focus:outline-[var(--color-purple-200)] focus:outline-offset-2",
        "active:text-[var(--color-neutral-900)] visited:text-[var(--color-purple-950)]",
        "transition-colors duration-200 inline-flex items-center justify-center gap-1 min-h-[44px] px-2"
    ),
};

// Exported Link component that applies the styles based on the variant prop

export const Link: React.FC<LinkProps> = ({
    className,
    variant = "inline",
    ...props
}) => {
    return (
        <a
            {...props}
            className={cn(variants[variant], className)}
        />
    );
};
