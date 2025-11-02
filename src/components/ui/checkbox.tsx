import React, { useState, ChangeEvent } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ✅ Estilos base y variantes
const checkboxButton = cva(
  `
  flex w-[24px] h-[24px] justify-center items-center
  rounded border transition-all duration-200
  focus:outline-none
  `,
  {
    variants: {
      checked: {
        true: `
          bg-purple-600 border-purple-600
          hover:bg-purple-700 hover:border-purple-700
          active:bg-purple-800
          focus:ring-2 focus:ring-purple-500 focus:ring-offset-1
        `,
        false: `
          bg-white border-gray-400
          hover:bg-gray-100 hover:border-gray-500
          active:bg-gray-200
          focus:ring-2 focus:ring-gray-400 focus:ring-offset-1
        `,
      },
      disabled: {
        true: `
          opacity-50 cursor-not-allowed
          bg-gray-100 border-gray-300 text-gray-400
          hover:bg-gray-100 hover:border-gray-300
        `,
        false: '',
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  }
);

interface CheckboxProps extends VariantProps<typeof checkboxButton> {
  label?: string;
  disabled?: boolean;
}

// ✅ Componente principal
function Checkbox({ label = 'Aceptar', disabled = false }: CheckboxProps): JSX.Element {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (disabled) return;
    setIsChecked(event.target.checked);
  };

  return (
    <label
      className={cn(
        'flex items-center gap-3 select-none',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      )}
    >
      <button
        type="button"
        onClick={() => !disabled && setIsChecked(!isChecked)}
        disabled={disabled}
        className={cn(checkboxButton({ checked: isChecked, disabled }))}
      >
        {/* ✅ Ícono oficial del equipo de diseño */}
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
          >
            <path
              d="M1 4.66667L4.66667 8.33333L12 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <span
        className={cn(
          'font-nunito text-[18px] font-normal leading-[24px]',
          disabled ? 'text-gray-400' : 'text-gray-800'
        )}
      >
        {label}
      </span>
    </label>
  );
}

export default Checkbox;
