
import * as React from "react";
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

const dropdownButtonVariants = cva(

 "flex min-w-[44px] min-h-[44px] justify-center items-center w-[206px] h-12 rounded-[12px] pl-3 text-black font-secondary text-size-400 spacing-line-height-body-3",
  {
    variants: {
      type: {
        outlined: "border border-neutral-300 bg-background-light ",
        ghost: "bg-transparent border-none",
      },
      state: {
        default: "",
        hover: "hover:bg-primary-hover",
      },
    },
    
    defaultVariants: {
      type: "outlined",
      state: "default",
    },
  }
);

type DropdownOption = string | { label: string; disabled?: boolean };

interface DropdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect">,
  VariantProps<typeof dropdownButtonVariants> {
  label?: string;
  options?: string[];
  onSelect?: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label = "Dropdown Button",
  options = [
    { label: "Dropdown Item 1" },
    { label: "Dropdown Item 2" },
    { label: "Dropdown Item 3"}, 
    { label: "Dropdown Item 4", disabled: true }, //disabled example
  ],
  onSelect = (option) => console.log("Selected:", option),
  className,
  type,
  state,
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
          className={cn(dropdownButtonVariants({ type, state }))}
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <span className="hover:text-primary">
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
              "origin-top absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[206px] z-50 flex flex-col items-stretch p-3 rounded-2xl border border-neutral-300 bg-neutral-50 shadow-card-shadow-default"
           )}

            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
        >
            <div className="py-1" role="none">
              {(options ?? []).map((option) => {
                  const label =
                    typeof option === "string" ? option : option.label;
                  const isDisabled =
                    typeof option === "object" && option.disabled;

                  return (
                    <button
                      key={label}
                      className={cn(
                        "block w-full text-black font-secondary text-size-400 text-left px-2 py-3 spacing-line-height-body-3 rounded transition-colors",
                        isDisabled
                          ? "text-gray-600 text-size-400 cursor-not-allowed opacity-70"
                          : "hover:bg-primary-hover"
                      )}
                      role="menuitem"
                      tabIndex={-1}
                      disabled={isDisabled}
                      onClick={() => !isDisabled && handleOptionClick(label)}
                    >
                      {label}
                    </button>
                  );
              })}
            </div>
        </div>
      )}
    </div>
  );
}
export default Dropdown;