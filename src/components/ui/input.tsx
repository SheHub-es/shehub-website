import { Icon } from "@/components/ui/icon";
import { cn } from '@/lib/utils';
import { cva } from "class-variance-authority";
import { LucideProps } from "lucide-react";

interface InputProps {
    label: string;
    helperText?: string;
    placeholder?: string;
    icon?: React.FC<LucideProps>;
    iconAriaLabel?: string;
    status?: 'default' | 'error' | 'success';
    state?: 'default' | 'hover' | 'selected' | 'focus' | 'disabled';
    className?: string;
    inputClassName?: string;
    type?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

//text-content-primary: text-[var(--color-black)]
//text-content-secondary: text-[var(--color-black)]
//var(--Color-Gray-500: text-[var(--color-???)] esta no esta en tokens
//bg-bakcground-light: bg-[var(--color-background-light)]
//border-surface-border: --color-neutral-300
//--color-state-hover-content: [var(--color-purple-600)]
//--color-state-active: [var(--color-purple-800)]
//--color-state-focus: [var(--color-purple-600)]
//--color-state-disable: --color-disabled

const containerClasses = "flex flex-col items-start gap-1 w-[584px]";
const labelClasses = "text-[var(--color-black)] font-nunito text-base font-[var(--font-weight-heavy)] leading-[var(--spacing-line-height-label-1)]"; // 16px = text-base, 24px line-height = leading-6
const helperTextClasses = "text-gray-500 font-nunito text-base font-[var(--font-weight-default)] leading-[var(--spacing-line-height-label-1)]";

//input + icon
const inputWrapperVariants = cva(
    "flex h-12 items-center  self-stretch rounded-xl ps-5 pe-4 py-3", // 48px = h-12, 12px = rounded-xl, padding converted
    {
        variants: {
            status: {
                default: "border-2 border-[var(--color-neutral-300)] bg-[var(--color-background-light)]",
                error: "border-2 border-[var(--color-error)] bg-[var(--color-background-light)]", 
                success: "border-2 border-[var(--color-success)] bg-[var(--color-background-light)]"
            },
            state: {
                default: "",
                hover: "hover:border-[var(--color-purple-600)]",
                selected: "border-[var(--color-purple-800)]",
                focus: "focus-within:border-5 focus-within:border-[var(--color-purple-600)]",
                disabled: "border-[var(--color-neutral-300)] bg-[var(--color-disabled)] cursor-not-allowed"
            }
        },
        compoundVariants: [
            //no hover on error or success status, so it keeps the current color
            {
                status: ["error", "success"],
                state: "hover",
                class: "hover:border-current"
            },
            //no selected on error or success status, so it keeps the current color
            {
                status: ["error", "success"],
                state: "selected",
                class: "border-current"
            },
            //disable affects all status
            {
                state: "disabled",
                class: "border-[var(--color-neutral-300)] bg-state-disabled-background"
            }
        ],
        //if there's no prop for status or state, then it's deafult
        defaultVariants: {
            status: "default",
            state: "default"
        }
    }
);

//input variant for disabled
const inputFieldVariants = cva(
    "flex-1 bg-transparent outline-none text-[var(--color-black)] placeholder:text-gray-500",
    {
        variants: {
            disabled: {
                true: "cursor-not-allowed",
                false: ""
            }
        },
        defaultVariants: {
            disabled: false
        }
    }
);

export const Input: React.FC<InputProps> = ({
    helperText,
    placeholder,
    label,
    icon,
    iconAriaLabel = "icon",
    status = 'default',
    state = 'default',
    className,
    inputClassName,
    type = "text",
    name,
    value,
    onChange,
    ...props
}) => {
    const isDisabled = state === 'disabled';

    return (
        <div className={cn(containerClasses, className)}>
            <label className={labelClasses}>
                {label}
            </label>
            
            <div className={cn(inputWrapperVariants({ status, state }))}>
                <input 
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={isDisabled}
                    className={cn(inputFieldVariants({ disabled: isDisabled }), inputClassName)}
                    {...props}
                />
                {icon && (
                    <Icon 
                        icon={icon} 
                        size="sm" 
                        aria-label={iconAriaLabel}
                        className={isDisabled ? "text-[var(--color-black)]" : ""}
                    />
                )}
            </div>
            
            {helperText && (
                <span className={helperTextClasses}>
                    {helperText}
                </span>
            )}
        </div>
    );
};

//const inputVariants = cva(
  // {/*all base styles? background white border rounded etc*/},
  /*       {
            variants: {
                type: {
                    noHandleNoIcon: [].join(' '),
                    withHandleNoIcon: [].join(' '),
                    noHandleWhitIcon: [].join(' '),
                    withHandleWithIcon: [].join(' ')                  
                },
                status: {
                    default: [/*border: 2px solid var(--color-surface-border, #D1D1D1); background: var(--color-background-light, #FEFEFE);*///],
                //    error: [/*border: 2px solid var(--color-functional-error, #DB3327); background: var(--color-background-light, #FEFEFE);*/],                    
               //     success: [/*border: 2px solid var(--color-functional-success, #0D875E); background: var(--color-background-light, #FEFEFE);*/],*/
                /*},
                state: {
                 //   default: [/*border: 2px solid var(--color-surface-border, #D1D1D1);*///],
    //                hover: [/*border: 2px solid var(--color-state-hover-content, #6230F7); error and success same as error and success*/],                    
      //              selected: [/*border: 2px solid var(--color-state-active, #4618BF); error and success same as status*/],
        //            focus: [/*border: 5px solid var(--color-state-focus, #6230F7), all three*/],
          //          disabled: [/*border: 2px solid var(--color-surface-border, #D1D1D1); background: var(--color-state-disabled-background, #E7E7E7);*/],
//                },
 //           }
   //     }
//)*/


/*
type (text, number, email, etc)
placeholder
name?? (mejor label creo)
label
icon (opcional, ver cómo funciona en card)
state (afecta a estilos)
status (afecta a comportamiento y estilos)



helpertext (fuera del input, no es parte de él)
Value dinámico --> gestionarlo
*/