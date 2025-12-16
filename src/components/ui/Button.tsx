import { cn } from "@/lib/utils";
import * as React from "react";

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

  size?: "sm" | "lg";
  shape?: "rounded" | "square";
}

const variants = {
  "primary-primary":
       "bg-[var(--color-button-primary-primary-bg-default)] !text-[var(--color-button-primary-primary-text)] " +
    "hover:bg-[var(--color-button-primary-primary-bg-hover)] hover:text-[var(--color-button-primary-primary-text-hover)]",

  "secondary-primary":
    "bg-[var(--color-button-secondary-primary-bg-default)] text-[var(--color-button-secondary-primary-text)] " +
    "border border-[var(--color-button-secondary-primary-border)] " +
    "hover:bg-[var(--color-button-secondary-primary-bg-hover)]",

  "primary-secondary":
    "bg-[var(--color-button-primary-secondary-bg-default)] text-[var(--color-button-primary-secondary-text)] " +
    "hover:bg-[var(--color-button-primary-secondary-bg-hover)]",

  "secondary-secondary":
    "bg-[var(--color-button-secondary-secondary-bg-default)] text-[var(--color-button-secondary-secondary-text)] " +
    "border border-[var(--color-button-secondary-secondary-border)] " +
    "hover:bg-[var(--color-button-secondary-secondary-bg-hover)]",

  "primary-tertiary":
    "bg-[var(--color-button-primary-tertiary-bg-default)] text-[var(--color-button-primary-tertiary-text)] " +
    "hover:bg-[var(--color-button-primary-tertiary-bg-hover)]",

  "secondary-tertiary":
    "bg-[var(--color-button-secondary-tertiary-bg-default)] text-[var(--color-button-secondary-tertiary-text)] " +
    "border border-[var(--color-button-secondary-tertiary-border)] " +
    "hover:bg-[var(--color-button-secondary-tertiary-bg-hover)]",

  disabled:
    "bg-[var(--color-button-disabled-bg)] text-[var(--color-button-disabled-text)] " +
    "border border-[var(--color-button-disabled-border)] cursor-not-allowed opacity-50",

  gradient:
 
    "bg-[image:var(--color-button-bg-gradient)] !text-[var(--color-button-primary-primary-text)] hover:opacity-90",
};
 


const sizes = {
    
  sm: "h-10 px-6 py-3 text-[var(--text-size-400)]", 
  lg: "h-12 px-6 py-3 text-[var(--text-size-400)]",
};

const shapes = {
  square: "rounded-md",
  rounded: "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
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
        "inline-flex items-center justify-center font-secondary transition-colors focus-square cursor-pointer", "w-full lg:w-auto",
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

export default Button;
