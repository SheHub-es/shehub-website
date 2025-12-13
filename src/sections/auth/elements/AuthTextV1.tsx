import { useTranslation } from "@/hooks/useTranslation";

export default function AuthTextV1() {
  const { t } = useTranslation();

  return (
    <div className="font-primary">
      <h1
        className="font-extrabold"
        style={{
          fontSize: "var(--text-size-800)",
          lineHeight: "var(--spacing-line-height-heading-3)",
          color: "var(--color-foreground)",
        }}
      >
        {t("authV1.title.part1")}{" "}
        <span
          style={{
            backgroundImage: "var(--color-gradient-brand)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("authV1.title.part2")}
        </span>{" "}
        {t("authV1.title.part3")}
      </h1>

      <p
        className="mt-6 max-w-md"
        style={{
          fontSize: "var(--text-size-400)",
          color: "var(--color-neutral-600)",
          lineHeight: "var(--spacing-line-height-body)",
        }}
      >
        {t("authV1.description")}
      </p>
    </div>
  );
}
