import { cn } from "@/lib/utils";
import * as React from "react";

// Button component with tokens-based variants
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary-primary"
    | "secondary-primary"
    | "primary-secondary"
    | "secondary-secondary"
    | "primary-tertiary"
    | "secondary-tertiary"
    | "disabled"
    | "gradient";

    // Size and shape props

  size?: "sm" | "lg"; // sm = 40px, lg = 48px
  shape?: "rounded" | "square";
}
// Define the variants, sizes, and shapes for the button

const variants = {

  "primary-primary":
    "bg-[var(--color-button-primary-primary-bg-default)] text-[var(--color-button-primary-primary-text)] hover:bg-[var(--color-button-primary-primary-bg-hover)] hover:text-[var(--color-black-text-hover)] focus:ring-[var(--color-button-primary-primary-bg-focus)] ",

  "secondary-primary":
    "bg-[var(--color-button-secondary-primary-bg-default)] text-[var(--color-button-secondary-primary-text)] border border-[var(--color-button-secondary-primary-border)] hover:bg-[var(--color-button-secondary-primary-bg-hover)] focus:ring-[var(--color-button-secondary-primary-bg-focus)]",

  "primary-secondary":
    "bg-[var(--color-button-primary-secondary-bg-default)] text-[var(--color-button-primary-secondary-text)] hover:bg-[var(--color-button-primary-secondary-bg-hover)] focus:ring-[var(--color-button-primary-secondary-bg-focus)]",

  "secondary-secondary":
    "bg-[var(--color-button-secondary-secondary-bg-default)] text-[var(--color-button-secondary-secondary-text)] border border-[var(--color-button-secondary-secondary-border)] hover:bg-[var(--color-button-secondary-secondary-bg-hover)] focus:ring-[var(--color-button-secondary-secondary-bg-focus)]",

  "primary-tertiary":
    "bg-[var(--color-button-primary-tertairy-bg-default)] text-[var(--color-button-primary-tertairy-text)] hover:bg-[var(--color-button-primary-tertairy-bg-hover)] focus:ring-[var(--color-button-primary-tertairy-bg-focus)]",

  "secondary-tertiary":
    "bg-[var(--color-button-secondary-tertairy-bg-default)] text-[var(--color-button-secondary-tertairy-text)] border border-[var(--color-button-secondary-tertairy-border)] hover:bg-[var(--color-button-secondary-tertairy-bg-hover)] focus:ring-[var(--color-button-secondary-tertairy-bg-focus)]",

disabled:
    "bg-[var(--color-button-disabled-bg)] text-[var(--color-button-disabled-text)] border border-[var(--color-button-disabled-border)] cursor-not-allowed opacity-50",

  gradient:
    "bg-[image:var(--color-button-bg-gradient)] text-white hover:opacity-90 focus:ring-[var(--color-button-primary-primary-bg-focus)]",
};

// Define the sizes and shapes for the button

const sizes = {
  sm: "h-10 px-4 text-[var(--text-size-400)]",
  lg: "h-12 px-5 text-[var(--text-size-400)]",
};

const shapes = {
  square: "rounded-md",
  rounded: "rounded-full",
};

// Button component definition

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary-primary",
  size = "lg",
  shape = "square",
  disabled,
  ...props
}) => {
  return (
    
    <button
      className={cn(
        "inline-flex items-center justify-center font-alt transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        variants[variant],
        sizes[size],
        shapes[shape],
        className
      )}
      disabled={disabled || variant === "disabled"}
      {...props}
    />
  );
};