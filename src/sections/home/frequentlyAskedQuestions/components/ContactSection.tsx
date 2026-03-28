"use client";

import { CopyEmailTrigger } from "@/components/ui/CopyEmailTrigger";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

const faqContactTriggerClassName = cn(
  "btn",
  "btn-secondary-primary",
  "inline-flex items-center justify-center font-secondary transition-all duration-200 cursor-pointer",
  "w-full lg:w-auto",
  "min-h-[44px] min-w-[44px]",
  "bg-[var(--color-button-secondary-primary-bg-default)] text-[var(--color-button-secondary-primary-text)] border border-[var(--color-button-secondary-primary-border)]",
  "hover:bg-[var(--color-button-secondary-primary-bg-hover)] hover:!text-[var(--color-button-secondary-primary-text-hover)]",
  "h-10 px-6 py-3 text-[var(--text-size-400)]",
  "rounded-full",
  "hover:!text-black",
  "w-[234px]"
);

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <div
      className="
        flex 
        flex-col 
        items-center 
        text-center
        gap-4
        w-full 
        max-w-[760px]
        px-4
        mx-auto
      "
    >
      <h2 className="font-[var(--font-weight-heavy)] text-size-600 md:text-text-size-700 leading-[var(--spacing-line-height-heading-4)]">
        {t('home.faq.contactTitle')}
      </h2>

      <p
        className="
          font-[var(--font-weight-default)] 
          text-[length:var(--text-size-300)] 
          md:text-[length:var(--text-size-400)] 
          leading-[var(--spacing-line-height-body-2)]
          font-secondary
        "
      >
        {t('home.faq.contactText')}
      </p>
      <CopyEmailTrigger className={faqContactTriggerClassName}>
        {t("home.faq.contactCta")}
      </CopyEmailTrigger>

    </div>
  )
}

export default ContactSection
