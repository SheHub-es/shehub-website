import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary-primary"
    | "secondary-primary"
    | "primary-secondary"
    | "secondary-secondary"
    | "primary-tertiary"
    | "secondary-tertiary"
    | "disabled";
  size?: "sm" | "lg"; // sm = 40px, lg = 48px
  shape?: "rounded" | "square";
}

const variants = {
  "primary-primary": "bg-[#2D5BE3] text-white hover:bg-[#1C46C4] focus:ring-[#2D5BE3]",
  "secondary-primary": "bg-[#DCE6FB] text-[#2D5BE3] hover:bg-[#BFD6F9] focus:ring-[#2D5BE3]",
  "primary-secondary": "bg-white text-[#2D5BE3] border border-[#2D5BE3] hover:bg-[#F5F8FE] focus:ring-[#2D5BE3]",
  "secondary-secondary": "bg-white text-[#667085] border border-[#D0D5DD] hover:bg-[#F9FAFB] focus:ring-[#D0D5DD]",
  "primary-tertiary": "bg-transparent text-[#2D5BE3] hover:bg-[#EDF2FD] focus:ring-[#2D5BE3]",
  "secondary-tertiary": "bg-transparent text-[#667085] hover:bg-[#F9FAFB] focus:ring-[#D0D5DD]",
  disabled: "bg-[#F4F4F4] text-[#98A2B3] border border-[#D0D5DD] cursor-not-allowed opacity-50",
};

const sizes = {
  sm: "h-10 px-4 text-sm",  // 40px height
  lg: "h-12 px-5 text-base", // 48px height
};

const shapes = {
  square: "rounded-md",
  rounded: "rounded-full",
};

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
        "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
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
