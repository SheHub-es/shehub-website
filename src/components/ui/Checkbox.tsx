import { cn } from '@/lib/utils';
import React, { ChangeEvent, useId, useRef, useState } from 'react';

interface CheckboxProps {
  label?: string | React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  helperText?: string;
  onChange?: (checked: boolean) => void;
  checkboxProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked: checkedProp = false,
  label,
  disabled = false,
  required = false,
  helperText,
  onChange,
  checkboxProps,
}) => {
  const [checked, setChecked] = useState(checkedProp);
  const ref = useRef<HTMLInputElement>(null);
  const generatedId = useId();
  const checkboxId = checkboxProps?.id || generatedId;
  const helperId = helperText ? `${checkboxId}-helper` : undefined;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setChecked(e.target.checked);
    onChange?.(e.target.checked);
  };

  return (
    <div className="flex flex-col gap-2" style={{ minWidth: 0, overflow: 'visible' }}>
      <label
        htmlFor={checkboxId}
        tabIndex={disabled ? -1 : 0}
        className={cn(
          'flex items-start gap-2 select-none rounded-sm transition-shadow outline-none w-full',
          disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer',
          'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-primary'
        )}
        style={{ minWidth: 0, overflow: 'visible' }}
      >
        <input
          type="checkbox"
          id={checkboxId}
          ref={ref}
          checked={checked}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          aria-describedby={helperId}
          aria-required={required}
          {...checkboxProps}
          className="sr-only"
        />

      <span
        className={cn(
          'relative shrink-0 w-[18px] h-[18px] rounded-sm transition-all duration-150 flex items-center justify-center',
          checked
            ? 'bg-primary border-2 border-primary hover:bg-purple-600 hover:border-purple-600'
            : 'bg-background-light border-2 border-neutral-300 hover:border-purple-600',
          disabled && 'bg-disabled border-neutral-300 opacity-50'
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
            'font-secondary text-size-300 leading-line-height-heading-6 font-normal',
            // Desktop → original tokens
            'sm:font-secondary sm:text-size-400 sm:leading-line-height-body-3',
            disabled && 'text-neutral-200',
            'flex-1'
          )}
          style={{ 
            minWidth: 0, 
            wordBreak: 'break-word', 
            overflowWrap: 'break-word',
            overflow: 'visible',
            color: disabled ? 'var(--color-neutral-200)' : 'var(--color-foreground)'
          }}
        >
          {label}
          {required && <span aria-label="required"> *</span>}
        </span>
      )}
    </label>
    {helperText && (
      <span
        id={helperId}
        className="text-gray-600 leading-line-height-label-1 font-default text-size-300 font-secondary"
      >
        {helperText}
      </span>
    )}
    </div>
  );
};

export default Checkbox;