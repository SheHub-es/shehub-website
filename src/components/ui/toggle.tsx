import React from "react";

type ToggleOption = {
    label: string;
    value: string;
};

type ToggleProps = {
    options: ToggleOption[];
    selected: string;
    onChange: (value: string) => void;
    disabled?: boolean;
};

export const Toggle = ({ options, selected, onChange, disabled }: ToggleProps) => {
    return (
        <div className="bg-toggle-bg-default outline-2 outline-toggle-border-default rounded-full inline-flex px-0.5 py-0.5">
            {options.map((opt) => {
                const isSelected = selected === opt.value;

                return (
                    <button
                        key={opt.value}
                        onClick={() => onChange(opt.value)}
                        disabled={disabled}
                        className={`w-auto h-8 px-3 rounded-full flex items-center justify-center font-alt ${isSelected ? 'bg-toggle-bg-active text-toggle-text-active border-2 ' : 'text-toggle-text-default'} ${disabled ? 'bg-toggle-bg-disabled text-toggle-text-disabled cursor-not-allowed' : 'hover:bg-toggle-bg-hover hover:text-toggle-text-default'} focus:outline-4 focus:outline-toggle-border-focus transition-all `}
                        role="radio"
                        aria-checked={isSelected}
                    >
                        {opt.label}
                    </button>
                );
            })}
        </div>
    );
};
