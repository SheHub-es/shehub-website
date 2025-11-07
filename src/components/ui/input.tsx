import { cva } from "class-variance-authority";
import { LucideProps } from "lucide-react";

import { useRef, useState } from "react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface InputProps {
  id?: string;
  required?: boolean;
  label: string;
  helperText?: string;
  placeholder?: string;
  icon?: React.FC<LucideProps>;
  iconAriaLabel?: string;
  status?: "default" | "error" | "success";
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const containerClasses = "flex flex-col items-start gap-2 w-[584px]";
const helperTextClasses =
  "text-gray-500 font-nunito text-base font-[var(--font-weight-default)] leading-[var(--spacing-line-height-label-1)]";

const inputWrapperVariants = cva(
  "flex h-12 items-center  self-stretch rounded-xl ps-5 pe-4 py-3 transition-all duration-100",
  {
    variants: {
      status: {
        default:
          "border-2 border-[var(--color-neutral-300)] bg-[var(--color-background-light)]",
        error:
          "border-2 border-[var(--color-error)] bg-[var(--color-background-light)]",
        success:
          "border-2 border-[var(--color-success)] bg-[var(--color-background-light)]",
      },
      disabled: {
        true: "border-[var(--color-neutral-300)] bg-[var(--color-disabled)]",
        false: "",
      },
    },
    compoundVariants: [
      {
        status: "default",
        disabled: false,
        class: "hover:border-[var(--color-purple-600)]",
      },
    ],
    defaultVariants: {
      status: "default",
      disabled: false,
    },
  },
);

const inputFieldVariants = cva(
  "flex-1 bg-transparent outline-none text-[var(--color-black)] placeholder:text-gray-500",
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export const Input: React.FC<InputProps> = ({
  id,
  required = false,
  helperText,
  placeholder,
  label,
  icon,
  iconAriaLabel = "icon",
  status = "default",
  disabled = false,
  className,
  inputClassName,
  type = "text",
  name,
  value,
  onChange,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedClasses =
    isSelected && !disabled
      ? {
          default: `${isFocused ? "border-[var(--color-neutral-300)]" : "border-[var(--color-purple-800)]"}`,
          error: "border-[var(--color-error)]",
          success: "border-[var(--color-success)]",
        }[status]
      : "";

  const focusClass =
    isFocused && !disabled
      ? "ring-3 ring-[var(--color-purple-600)] ring-offset-2 border-[var(--color-purple-600)]"
      : "";
  const labelClasses = `${disabled ? "text-gray-600" : "text-[var(--color-black)]"} font-nunito text-base font-[var(--font-weight-heavy)] leading-[var(--spacing-line-height-label-1)`;

  const handleMouseDown = () => {
    if (!disabled) {
      setIsSelected(true);
    }
  };

  const handleBlur = () => {
    setIsSelected(false);
    setIsFocused(false);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      if (e.relatedTarget !== null) {
        setIsFocused(true);
      }
      setIsSelected(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      setIsFocused(true);
    }
  };

  return (
    <div className={cn(containerClasses, className)}>
      <label className={labelClasses}>
        {label}
        {required && <span aria-label="required"> *</span>}
      </label>

      <div
        className={cn(
          inputWrapperVariants({ status, disabled }),
          focusClass,
          selectedClasses,
        )}
        onMouseDown={handleMouseDown}
      >
        <input
          type={type}
          name={name}
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={cn(inputFieldVariants({ disabled }), inputClassName)}
          style={{
            outline: "none",
            border: "none",
            boxShadow: "none",
          }}
          aria-invalid={status === "error"}
          {...props}
        />
        {icon && (
          <Icon
            icon={icon}
            size="sm"
            aria-label={iconAriaLabel}
            className={disabled ? "text-[var(--color-neutral-300)]" : ""}
          />
        )}
      </div>

      {helperText && (
        <span
          className={helperTextClasses}
          role={status === "error" ? "alert" : undefined}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};
