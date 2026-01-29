import { cn } from "@/lib/utils";
import * as React from "react";
import { useId } from "react";

export interface TextAreaProps {
    id?: string,
    label: string,
    placeholder?: string,
    helperText?: string,
    disabled?: boolean,
    required?: boolean,
    status?: "default" | "error" | "success",
    className?: string,
    name?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

export const TextArea: React.FC<TextAreaProps> = ({
    id,
    label,
    placeholder,
    helperText,
    disabled,
    required = false,
    status = "default",
    className,
    name,
    value,
    onChange,
}) => {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const helperId = helperText ? `${textareaId}-helper` : undefined;

    return (
        <div className={cn("flex flex-col gap-2 items-start w-full", className)}>
            <label 
                htmlFor={textareaId}
                className="text-black font-secondary text-size-300 leading-line-height-label-1 font-heavy"
            >
                {label}
                {required && <span aria-label="required"> *</span>}
            </label>
            <textarea 
                id={textareaId}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full h-[157px] flex p-3 items-start self-stretch rounded-[12px] border-2 border-gray-300 bg-white gap-2.5 placeholder:text-size-400 placeholder:font-default placeholder:leading-line-height-body-2 text-gray-500 placeholder:text-gray-500 hover:border-purple-600 selection:border-purple-800 disabled:bg-disabled placeholder:disabled:text-gray-600 disabled:cursor-not-allowed focus-visible:outline-[0.25rem] focus-visible:outline-purple-600 focus-visible:outline-offset-[0.125rem] focus-visible:relative" 
                placeholder={placeholder} 
                disabled={disabled}
                required={required}
                aria-describedby={helperId}
                aria-invalid={status === "error"}
                aria-required={required}
            />
            {helperText && (
                <span 
                    id={helperId}
                    role={status === "error" ? "alert" : undefined}
                    className="text-gray-600 leading-line-height-label-1 font-default text-size-300 font-secondary"
                >
                    {helperText}
                </span>
            )}
        </div>
    )
}