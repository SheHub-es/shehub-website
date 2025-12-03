import * as React from "react"

export interface TextAreaProps {
    label: string,
    placeholder: string,
    helperText?: string,
    disabled?: boolean,
    className?: string
}

export const TextArea: React.FC<TextAreaProps> = ({
    label,
    placeholder,
    helperText,
    disabled,
    className
}) => {
    return (
        <div className="flex-col gap-1 inline-flex items-start">
            <label className="text-black font-secondary text-size-300 leading-line-height-label-1 font-heavy">{label}</label>
            <textarea className="w-[288px] lg:w-[584px] h-[157px] flex p-3 items-start self-stretch rounded-[12px] border-2 border-gray-300 bg-white gap-2.5 placeholder:text-size-400 placeholder:font-default placeholder:leading-line-height-body-2 text-gray-500 placeholder:text-gray-500 hover:border-purple-600 selection:border-purple-800 disabled:bg-disabled placeholder:disabled:text-gray-600 disabled:cursor-not-allowed focus-visible:outline-[0.25rem] focus-visible:outline-purple-600 focus-visible:outline-offset-[0.125rem] focus-visible:relative" placeholder={placeholder} disabled={disabled}/>
            {helperText && (
                <span className="text-gray-600 leading-line-height-label-1 font-default text-size-300 font-secondary">{helperText}</span>
            )}
        </div>
    )
}