// components/ui/Checkbox.tsx
import React, { useState, ChangeEvent, useRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * Props del componente Checkbox
 */
interface CheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  inputProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
}

/**
 * Componente Checkbox
 */
const Checkbox: React.FC<CheckboxProps> = ({
  checked: checkedProp = false,
  label,
  disabled = false,
  onChange,
  inputProps,
}) => {
  const [checked, setChecked] = useState(checkedProp);
  const [focused, setFocused] = useState(false);
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
            ? 'bg-[var(--color-purple-500)] border border-[var(--color-purple-500)] hover:bg-[var(--color-purple-600)] hover:border-[var(--color-purple-600)]'
            : 'bg-white border border-[var(--color-gray-200)] hover:border-[var(--color-gray-300)]',
          focused && 'outline outline-[2px] outline-[var(--color-purple-400)]',
          disabled && 'bg-[var(--color-gray-100)] border-[var(--color-gray-100)] opacity-50'
        )}
      >
        <input
          type="checkbox"
          ref={ref}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="absolute opacity-0 w-0 h-0 peer"
          {...inputProps}
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
            'font-[Nunito] text-[18px] leading-[24px] font-normal',
            disabled
              ? 'text-[var(--color-gray-200)]'
              : 'text-[var(--color-gray-900)]'
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;

{/*

  CODIGO DE PRUEBAS

import Checkbox from "@/components/ui/checkbox";
import { useState } from "react";

DEBAJO DE FUNCION

 
    const [checked, setChecked] = useState(false);
  const [focused, setFocused] = useState(false);




      <section className="p-8 bg-white border rounded-lg shadow-md max-w-xl mx-auto mt-12">
      <h2 className="text-xl font-bold mb-6">Playground de Checkbox</h2>

      <div className="space-y-4">
        <Checkbox label="Desmarcado (default)" checked={false} />
        <Checkbox label="Marcado (default)" checked={true} />
        <Checkbox label="Interactivo" checked={checked} onChange={setChecked} />
        <Checkbox label="Deshabilitado desmarcado" checked={false} disabled />
        <Checkbox label="Deshabilitado marcado" checked={true} disabled />
        <Checkbox
          label="Simular foco"
          checked={true}
          inputProps={{
            onFocus: () => setFocused(true),
            onBlur: () => setFocused(false),
          }}
        />
        <p className="text-sm text-gray-500">
          Estado de foco: {focused ? "✅ Enfocado" : "❌ No enfocado"}
        </p>
      </div>
    </section>

        */}