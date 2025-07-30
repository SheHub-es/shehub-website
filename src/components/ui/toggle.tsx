
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
    <div
      className={`
        inline-flex border border-toggle-border-default rounded-full 
        w-[97px] h-[26px] items-center
      `}
    >
      {options.map((opt) => {
        const isSelected = selected === opt.value;

        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            disabled={disabled}
            className={`
              flex items-center justify-center text-xs
              h-[24px] w-[35px] gap-[10px] rounded-full
              border
              ${isSelected 
                ? 'border-[var(--color-toggle-border-active)] bg-[var(--color-toggle-bg-active)] text-toggle-text-active' 
                : 'border-transparent text-toggle-text-default'}
              ${disabled 
                ? 'bg-toggle-bg-disabled text-toggle-text-disabled cursor-not-allowed' 
                : 'hover:bg-toggle-bg-hover hover:text-toggle-text-default'}
            `}
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

