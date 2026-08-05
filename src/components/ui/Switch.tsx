import NextImage from "next/image";

import React, {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useId,
  useState,
} from "react";

import LockIcon from "@/assets/images/icons/icon_lock.svg";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

const TRANSITION_DURATION_MS = 1000;

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
  const { t } = useTranslation();
  const [checked, setChecked] = useState(checkedProp);
  const generatedId = useId();
  const switchId = id || generatedId;
  const helperId = helperText ? `${switchId}-helper` : undefined;

  const isOn = disabled ? true : checked;
  const [displayOn, setDisplayOn] = useState(isOn);

  useEffect(() => {
    const timeout = setTimeout(
      () => setDisplayOn(isOn),
      TRANSITION_DURATION_MS / 2,
    );
    return () => clearTimeout(timeout);
  }, [isOn]);

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
    if (e.key === "Enter") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={switchId}
        className={cn(
          "flex items-center gap-2 select-none",
          disabled ? "cursor-not-allowed" : "cursor-pointer",
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
            "relative inline-flex shrink-0 items-center w-20 h-9 rounded-[50px] border border-toggle-border-default bg-white transition-colors duration-300 ease-in-out outline-none",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-(--color-primary,currentColor)",
            disabled && "cursor-not-allowed",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "flex h-full w-full items-center font-secondary text-size-300 leading-line-height-heading-6 font-normal text-neutral-600",
              displayOn ? "justify-start pl-4 pr-9" : "justify-end pr-4 pl-9",
            )}
          >
            {displayOn ? t("switch.on") : t("switch.off")}
          </span>

          <span
            className={cn(
              "absolute top-1 left-0.5 flex size-7 shrink-0 items-center justify-center rounded-[50px] transition-all duration-1000 ease-in-out",
              disabled
                ? "bg-primary"
                : isOn
                  ? "bg-toggle-bg-active"
                  : "bg-purple-200",
              isOn && "translate-x-11.5",
            )}
          >
            {disabled && (
              <NextImage src={LockIcon} alt="" width={16} height={16} />
            )}
          </span>
        </span>

        {label && (
          <span
            className={cn(
              "font-secondary text-size-300 leading-line-height-heading-6 font-normal",
              "sm:font-secondary sm:text-size-400 sm:leading-line-height-body-3",
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
