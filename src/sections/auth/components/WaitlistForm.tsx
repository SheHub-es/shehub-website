"use client";

import Checkbox from "@/components/ui/Checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTriggerButton,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "@/hooks/useTranslation";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";
import { EMAIL_MAX_LENGTH, NAME_MAX_LENGTH } from "@/lib/formValidators";
import Popup from "./Popup";

export default function WaitlistForm() {
  const { t } = useTranslation();
  const hook = useWaitlistForm();
  const { form, errors } = hook;

  return (
    <div className="w-full">
      <h2
        className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-6"
        style={{ color: "var(--color-primary)" }}
      >
        {t("waitlist.title")}
      </h2>
      <form
        onSubmit={hook.handleSubmit}
        className="space-y-2.5"
        aria-label={t("waitlist.title")}
        noValidate
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 w-full">
            <label htmlFor="waitlist-firstName" className="input-label">
              {t("auth.field.firstName")} *
            </label>
            <input
              id="waitlist-firstName"
              type="text"
              placeholder={t("auth.field.firstName.placeholder")}
              name="firstName"
              className={`input-base ${errors.firstName ? "input-error" : ""}`}
              value={form.firstName}
              onChange={hook.handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.firstName}
              aria-describedby={errors.firstName ? "waitlist-firstName-error" : undefined}
              autoComplete="given-name"
              maxLength={NAME_MAX_LENGTH}
              autoCapitalize="words"
            />
            {errors.firstName && (
              <p id="waitlist-firstName-error" className="input-helper error mt-1" role="alert">
                {errors.firstName}
              </p>
            )}
          </div>
          <div className="flex-1 w-full">
            <label htmlFor="waitlist-lastName" className="input-label">
              {t("waitlist.field.lastName")} *
            </label>
            <input
              id="waitlist-lastName"
              type="text"
              placeholder={t("waitlist.field.lastName.placeholder")}
              name="lastName"
              className={`input-base ${errors.lastName ? "input-error" : ""}`}
              value={form.lastName}
              onChange={hook.handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? "waitlist-lastName-error" : undefined}
              autoComplete="family-name"
              maxLength={NAME_MAX_LENGTH}
              autoCapitalize="words"
            />
            {errors.lastName && (
              <p id="waitlist-lastName-error" className="input-helper error mt-1" role="alert">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="waitlist-email" className="input-label">
            {t("auth.field.email")} *
          </label>
          <input
            id="waitlist-email"
            type="email"
            placeholder={t("auth.field.email.placeholder")}
            name="email"
            className={`input-base ${errors.email ? "input-error" : ""}`}
            value={form.email}
            onChange={hook.handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "waitlist-email-error" : undefined}
            autoComplete="email"
            maxLength={EMAIL_MAX_LENGTH}
            inputMode="email"
          />
          {errors.email && (
            <p id="waitlist-email-error" className="input-helper error mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="waitlist-desiredRole" className="input-label">
            {t("auth.field.desiredRole")} *
          </label>
          <DropdownMenu>
            <DropdownMenuTriggerButton
              id="waitlist-desiredRole"
              placeholder={t("auth.field.desiredRole.placeholder")}
              selected={form.desiredRole || null}
              className={`input-base cursor-pointer w-full ${errors.desiredRole ? "input-error" : ""}`}
              aria-invalid={!!errors.desiredRole}
              aria-describedby={errors.desiredRole ? "waitlist-desiredRole-error" : undefined}
            />
            <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
              <DropdownMenuItem
                onSelect={() =>
                  hook.setField(
                    "desiredRole",
                    t("auth.field.desiredRole.option.frontend")
                  )
                }
              >
                {t("auth.field.desiredRole.option.frontend")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() =>
                  hook.setField(
                    "desiredRole",
                    t("auth.field.desiredRole.option.backend")
                  )
                }
              >
                {t("auth.field.desiredRole.option.backend")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() =>
                  hook.setField(
                    "desiredRole",
                    t("auth.field.desiredRole.option.fullstack")
                  )
                }
              >
                {t("auth.field.desiredRole.option.fullstack")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() =>
                  hook.setField(
                    "desiredRole",
                    t("auth.field.desiredRole.option.designer")
                  )
                }
              >
                {t("auth.field.desiredRole.option.designer")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() =>
                  hook.setField(
                    "desiredRole",
                    t("auth.field.desiredRole.option.uxui")
                  )
                }
              >
                {t("auth.field.desiredRole.option.uxui")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() =>
                  hook.setField(
                    "desiredRole",
                    t("auth.field.desiredRole.option.product")
                  )
                }
              >
                {t("auth.field.desiredRole.option.product")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() =>
                  hook.setField(
                    "desiredRole",
                    t("auth.field.desiredRole.option.project")
                  )
                }
              >
                {t("auth.field.desiredRole.option.project")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() =>
                  hook.setField(
                    "desiredRole",
                    t("auth.field.desiredRole.option.data")
                  )
                }
              >
                {t("auth.field.desiredRole.option.data")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() =>
                  hook.setField(
                    "desiredRole",
                    t("auth.field.desiredRole.option.qa")
                  )
                }
              >
                {t("auth.field.desiredRole.option.qa")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() =>
                  hook.setField(
                    "desiredRole",
                    t("auth.field.desiredRole.option.marketing")
                  )
                }
              >
                {t("auth.field.desiredRole.option.marketing")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {errors.desiredRole && (
            <p id="waitlist-desiredRole-error" className="input-helper error mt-1" role="alert">
              {errors.desiredRole}
            </p>
          )}
        </div>

        <div className="pt-1 w-full" style={{ minWidth: 0, overflow: "visible" }}>
          <Checkbox
            label={t("auth.checkbox.mentor")}
            checked={form.wantToBeMentor}
            onChange={(checked) => hook.setField("wantToBeMentor", checked)}
            checkboxProps={{ name: "wantToBeMentor" }}
          />
        </div>

        <div className="pt-1 w-full" style={{ minWidth: 0, overflow: "visible" }}>
          <Checkbox
            label={
              <span style={{ wordBreak: "break-word", overflowWrap: "break-word" }}>
                {t("auth.checkbox.terms")}{" "}
                <a href="/privacy" className="font-semibold hover:underline" style={{ color: "var(--color-primary)" }}>
                  {t("auth.checkbox.terms.link")}
                </a>
              </span>
            }
            checked={form.acceptTerms}
            onChange={(checked) => hook.setField("acceptTerms", checked)}
            checkboxProps={{
              name: "acceptTerms",
              "aria-invalid": !!errors.terms,
              "aria-describedby": errors.terms ? "waitlist-terms-error" : undefined,
            }}
          />
          {errors.terms && (
            <p id="waitlist-terms-error" className="input-helper error mt-1" role="alert">
              {errors.terms}
            </p>
          )}
        </div>

        <p className="text-xs mt-2" style={{ color: "var(--color-neutral-500)" }}>
          * {t("waitlist.required")}
        </p>

        <button
          type="submit"
          disabled={hook.isLoading}
          aria-busy={hook.isLoading}
          className="w-full py-2.5 rounded-full font-bold text-base transition-all hover:opacity-90 active:scale-[0.98] mt-4 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-white)",
          }}
        >
          {hook.isLoading ? t("waitlist.button.loading") : t("waitlist.button")}
        </button>
      </form>

      <Popup
        message={hook.popupMessage}
        type={hook.popupType}
        show={hook.showPopup}
        onClose={() => hook.setShowPopup(false)}
      />
    </div>
  );
}
