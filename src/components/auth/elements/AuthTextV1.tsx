export default function AuthTextV1() {
  return (
    <div className="font-primary">
      <h1
        className="font-extrabold"
        style={{
          fontSize: "var(--text-size-800)",
          lineHeight: "var(--spacing-line-height-heading-3)",
          color: "var(--color-foreground)"
        }}
      >
        Join a community of women{" "}
        <span
          style={{
            backgroundImage: "var(--color-gradient-brand)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          shaping the
        </span>{" "}
        future of tech
      </h1>

      <p className="mt-6 max-w-md"
        style={{
          fontSize: "var(--text-size-400)",
          color: "var(--color-neutral-600)",
          lineHeight: "var(--spacing-line-height-body)"
        }}
      >
        Connect with inspiring women in technology, find mentors, collaborate on
        meaningful projects, and grow together.
      </p>
    </div>
  );
}
