import { cva } from "class-variance-authority";
import { useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Icon, IconProps } from "@/components/ui/Icon";

interface InputProps {
  id?: string;
  required?: boolean;
  label: string;
  helperText?: string;
  placeholder?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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

const containerClasses = "flex flex-col items-start gap-2 w-full max-w-72 md:max-w-[584px]";
const helperTextClasses =
  "text-neutral-500 font-secondary text-base font-400 leading-6";

const inputWrapperVariants = cva(
  "flex h-12 items-center  self-stretch rounded-xl ps-5 pe-4 py-3 transition-all duration-100",
  {
    variants: {
      status: {
        default: "border-2 border-neutral-300 bg-background-light",
        error: "border-2 border-error bg-background-light",
        success: "border-2 border-success bg-background-light",
      },
      disabled: {
        true: "border-neutral-300 bg-disabled",
        false: "",
      },
    },
    compoundVariants: [
      {
        status: "default",
        disabled: false,
        class: "hover:border-purple-600",
      },
    ],
    defaultVariants: {
      status: "default",
      disabled: false,
    },
  },
);

const inputFieldVariants = cva(
  "flex-1 bg-transparent outline-none text-black placeholder:text-neutral-500",
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
  const [isSelected, setIsSelected] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const generatedId = useId(); //id for
  const inputId = id || generatedId; //if for input
  const helperId = helperText ? `${inputId}-helper` : undefined; //id if helper exists

  const selectedClasses =
    isSelected && !disabled
      ? {
        default: "border-purple-800",
        error: "border-error",
        success: "border-success",
      }[status]
      : "";

  const labelClasses = `${disabled ? "text-neutral-600" : "text-black"} font-secondary text-base font-bold leading-6`;

  const handleMouseDown = () => {
    if (!disabled) {
      setIsSelected(true);
    }
  };

  const handleBlur = () => {
    setIsSelected(false);
  };

  const handleFocus = () => {
    if (!disabled) {
      setIsSelected(true);
    }
  };

  //when tabbing the component the wrapper gets focused and pressing space/enter will focus the input
  const handleWrapperKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === " ") && e.target === e.currentTarget) {
      e.preventDefault();
      inputRef.current?.focus();
    }
  };

  const handleWrapperClick = () => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  };

  return (
    <div className={cn(containerClasses, className)}>
      <label htmlFor={id} className={labelClasses}>
        {label}
        {required && <span aria-label="required"> *</span>}
      </label>

      <div
        className={cn(
          inputWrapperVariants({ status, disabled }),
          selectedClasses,
        )}
        onMouseDown={handleMouseDown}
        onClick={handleWrapperClick}
        tabIndex={disabled ? -1 : 0} //make the wrapper focusable
        onKeyDown={handleWrapperKeyDown}
      >
        <input
          id={inputId}
          type={type}
          name={name}
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          className={cn(inputFieldVariants({ disabled }), inputClassName)}
          style={{
            outline: "none",
            border: "none",
            boxShadow: "none",
          }}
          aria-describedby={helperId}
          aria-invalid={status === "error"}
          {...props}
        />
        {icon && (
          (() => {
            return (
              <Icon
                icon={icon}
                size="sm"
                aria-label={iconAriaLabel}
                className={disabled ? "text-neutral-300" : ""}
              />
            );
          })()
        )}
      </div>

      {helperText && (
        <span
          id={helperId}
          className={helperTextClasses}
          role={status === "error" ? "alert" : undefined}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};
