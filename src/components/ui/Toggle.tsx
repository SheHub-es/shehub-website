
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

const Toggle = ({ options, selected, onChange, disabled }: ToggleProps) => {
    return (
        <div className="bg-toggle-bg-default outline-2 outline-toggle-border-default rounded-full inline-flex ">
            {options.map((opt) => {
                const isSelected = selected === opt.value;

                return (
                    <button
                        key={opt.value}
                        onClick={(e) => {
                          onChange(opt.value)
                          ;(e.currentTarget as HTMLButtonElement).blur()
                        }}
                        disabled={disabled}
                        className={`rounded-[50px] flex flex-col items-center justify-center text-size-100 py-1 px-2 gap-2.5 leading-line-height-label-3 font-secondary font-heavy cursor-pointer border transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[var(--color-primary,currentColor)] ${isSelected ? 'border-background-light bg-toggle-bg-active text-toggle-text-active' : 'border-transparent text-toggle-text-default'} ${disabled ? 'bg-toggle-bg-disabled text-toggle-text-disabled cursor-not-allowed' : 'hover:bg-toggle-bg-hover hover:text-toggle-text-default'} `}
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

export default Toggle
