import { cn } from '@/lib/utils';
import React, { ChangeEvent, KeyboardEvent, MouseEvent, useId, useState } from 'react';

interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string | React.ReactNode;
  ariaLabel?: string;
  helperText?: string;
  id?: string;
}

const Switch: React.FC<SwitchProps> = ({
  checked: checkedProp = false,
  disabled = false,
  onChange,
  label,
  ariaLabel,
  helperText,
  id,
}) => {
  const [checked, setChecked] = useState(checkedProp);
  const generatedId = useId();
  const switchId = id || generatedId;
  const helperId = helperText ? `${switchId}-helper` : undefined;

  const isOn = disabled ? true : checked;

  const toggle = () => {
    if (disabled) return;
    setChecked((prev) => {
      const next = !prev;
      onChange?.(next);
      return next;
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setChecked(e.target.checked);
    onChange?.(e.target.checked);
  };

  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    if (disabled) {
      e.preventDefault();
      e.currentTarget.blur();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (e.key === 'Enter') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={switchId}
        className={cn(
          'flex items-center gap-2 select-none',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        )}
      >
        <input
          type="checkbox"
          id={switchId}
          role="switch"
          checked={isOn}
          tabIndex={disabled ? -1 : undefined}
          onChange={handleChange}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          aria-checked={isOn}
          aria-disabled={disabled || undefined}
          aria-readonly={disabled || undefined}
          aria-label={!label ? ariaLabel : undefined}
          aria-describedby={helperId}
          className="peer sr-only"
        />

        <span
          className={cn(
            'relative inline-flex shrink-0 w-10 h-6 rounded-full transition-colors duration-150 outline-none',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-[var(--color-primary,currentColor)]',
            isOn && (disabled ? 'bg-purple-300' : 'bg-toggle-bg-active'),
            !isOn && 'bg-toggle-bg-default',
            disabled && 'cursor-not-allowed',
          )}
        >
          <span
            className={cn(
              'absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-150',
              isOn && 'translate-x-4',
            )}
          />
        </span>

        {label && (
          <span
            className={cn(
              'font-secondary text-size-300 leading-line-height-heading-6 font-normal',
              'sm:font-secondary sm:text-size-400 sm:leading-line-height-body-3',
            )}
          >
            {label}
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

export default Switch;
