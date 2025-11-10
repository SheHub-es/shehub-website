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
      className={cn(
        'flex items-center gap-2 select-none',
        disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
      )}
    >
      <span
        className={cn(
          'relative flex-shrink-0 w-[18px] h-[18px] rounded-sm transition-all duration-150 flex items-center justify-center',
          checked
            ? 'bg-primary border border-primary hover:bg-purple-600 hover:border-purple-600'
            : 'bg-white border border-neutral-200 hover:border-b-neutral-300',
          
          disabled && 'bg-neutral-100 border-neutral-100 opacity-50'
        )}
      >
        <input
          type="checkbox"
          ref={ref}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
       
          className="absolute opacity-0 w-0 h-0 peer"
          {...checkboxProps}
        />

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
            'font-secondary text-size-400 leading-line-height-body-3',
            disabled
              ? 'text-neutral-200'
              : 'text-neutral-900'
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;