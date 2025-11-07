
import * as React from "react";
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

const dropdownButtonVariants = cva(

 "flex min-w-[44px] min-h-[44px] justify-center items-center w-[206px] h-12 rounded-[12px] pl-3 text-[var(--color-content-primary,#0E0E0E)] font-nunito text-[18px] font-normal not-italic leading-[24px] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--color-accent)] ",
  {
    variants: {
      type: {
        outlined: "border border-[var(--color-surface-border,#D1D1D1)] bg-[var(--color-background-light)] ",
        ghost: "bg-transparent border-none",
      },
      state: {
        default: "",
        hover: " hover:bg-[var(--color-primary-hover)]",
        disabled:
          "bg-[var(--color-disabled)] text-gray-400 opacity-50 pointer-events-none cursor-not-allowed",
      },
    },
    
    defaultVariants: {
      type: "outlined",
      state: "default",
    },
  }
);

interface DropdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect">,
  VariantProps<typeof dropdownButtonVariants> {
  label?: string;
  options?: string[];
  onSelect?: (option: string) => void;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label = "Dropdown Button",
  options = ["Dropdown Item 1", "Dropdown Item 2", "Dropdown Item 3", "Dropdown Item 4"],
  onSelect = (option) => console.log("Selected:", option),
  className,
  type,
  state,
  disabled,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    // setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };


  return (
    <div 
      ref={dropdownRef} 
      className={cn("relative flex justify-center overflow-visible", className)} 
      {...props}
    >
      <div>
        <button
          id="menu-button"
          type="button"
          className={cn(
            dropdownButtonVariants({ type, state }),
          )}
       
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen}
          disabled={disabled}
        >
          <span className="hover:text-[var(--color-content-hover,#6230F7)] transition-colors duration-150">
            {selectedOption || label}
          </span>

          {isOpen ? (
          <ChevronUp className=" w-11 h-11 p-2 " />
        ) : (
          <ChevronDown className=" w-11 h-11 p-2 " />
        )}
        </button>
      </div>

      {isOpen && (
        <div
            className={cn(
        "origin-top absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[206px] z-50 focus:outline-none flex flex-col items-stretch p-3 rounded-2xl border border-[var(--color-surface-border,#D1D1D1)] bg-[var(--color-background-light,#FEFEFE)] shadow-[0_4px_16px_0_rgba(14,14,14,0.08)]"
    )}

          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {(options ?? []).map((option) => (
              <button
                key={option}
                className=" block w-full text-[var(--color-content-primary,#0E0E0E)] font-nunito text-[18px] hover:bg-[var(--color-primary-hover)] font-normal not-italic text-left px-2 py-3 leading-[24px] rounded focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--color-accent)]" 
                role="menuitem"
                tabIndex={-1}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Dropdown;