import React, { useState, ChangeEvent, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  checkboxProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked: checkedProp = false,
  label,
  disabled = false,
  onChange,
  checkboxProps,
}) => {
  const [checked, setChecked] = useState(checkedProp);
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setChecked(e.target.checked);
    onChange?.(e.target.checked);
  };

  return (
    <label
      tabIndex={0}
      className={cn(
        'flex items-center gap-2 select-none rounded-sm transition-shadow outline-none',
        disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer',
        'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-primary'
      )}
    >
      <input
        type="checkbox"
        ref={ref}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        {...checkboxProps}
        className="absolute w-[1px] h-[1px] opacity-0"
      />

      <span
        className={cn(
          'relative flex-shrink-0 w-[18px] h-[18px] rounded-sm transition-all duration-150 flex items-center justify-center',
          checked
            ? 'bg-primary border border-primary hover:bg-purple-600 hover:border-purple-600'
            : 'bg-white border border-neutral-200 hover:border-neutral-300',
          disabled && 'bg-neutral-100 border-neutral-100 opacity-50'
        )}
      >
        {checked && (
          <svg
            width="11"
            height="7.333"
            viewBox="0 0 11 7.333"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none"
          >
            <path
              d="M1 3.66667L4.33333 7L10 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>

      {label && (
        <span
          className={cn(
            // Mobile (default) → Figma specs
            'font-nunito text-[16px] leading-[24px] font-normal text-[var(--color-content-primary,#0E0E0E)]',
            // Desktop → tus tokens originales
            'sm:font-secondary sm:text-size-400 sm:leading-line-height-body-3 sm:text-neutral-900',
            disabled && 'text-neutral-200'
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;