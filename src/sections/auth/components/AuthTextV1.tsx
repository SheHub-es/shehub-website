<<<<<<< HEAD:src/sections/auth/elements/AuthTextV1.tsx
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
=======
export default function AuthTextV1() {
  return (
    <div className="font-primary">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[color:var(--color-black)] mb-4 md:mb-12">
  Join a community of
  <br />
  women{" "}
  <span 
    className="bg-clip-text text-transparent" 
    style={{ backgroundImage: "var(--color-gradient-brand)" }}
  >
    shaping the
    <br />
    future of tech
  </span>
</h1>

      <p className="text-[color:var(--color-black)] text-lg md:text-xl tracking-tight leading-relaxed mt-6">
        Connect with inspiring women in technology, find mentors, collaborate on meaningful projects, and break through barriers together. SheHub is your platform for growth, learning, and success in tech.
>>>>>>> f722de59c93f83ea97c42aac72982165ddc7806c:src/sections/auth/components/AuthTextV1.tsx
      </p>
    </div>
  );
}
