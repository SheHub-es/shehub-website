
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
                        onClick={() => onChange(opt.value)}
                        disabled={disabled}
                        className={`rounded-[50px] flex flex-col items-center justify-center text-size-100 py-1 px-2 gap-2.5 leading-line-height-label-3 font-secondary font-heavy ${isSelected ? 'bg-toggle-bg-active border border-background-light text-toggle-text-active' : 'text-toggle-text-default'} ${disabled ? 'bg-toggle-bg-disabled text-toggle-text-disabled cursor-not-allowed' : 'hover:bg-toggle-bg-hover hover:text-toggle-text-default'} focus:ring-4 focus:ring-toggle-border-focus transition-all `}
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

export default Toggle;