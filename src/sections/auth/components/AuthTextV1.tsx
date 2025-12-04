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
        Join a community of
        <br />
        women{" "}
        <span
          style={{
            backgroundImage: "var(--color-gradient-brand)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline"
          }}
        >
          shaping the
        </span>
        <br />
        <span
          style={{
            backgroundImage: "var(--color-gradient-brand)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline"
          }}
        >
          future of tech
        </span>
      </h1>

      <p className="mt-6 max-w-lg text-justify"
        style={{
          fontSize: "var(--text-size-400)",
          color: "var(--color-neutral-600)",
          lineHeight: "1.7"
        }}
      >
        Connect with inspiring women in technology, find mentors, collaborate on meaningful projects, and break through barriers together. SheHub is your platform for growth, learning, and success in tech.
      </p>
    </div>
  );
}
