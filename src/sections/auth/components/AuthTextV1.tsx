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
        </span>
        <br />
        <span 
          className="bg-clip-text text-transparent" 
          style={{ backgroundImage: "var(--color-gradient-brand)" }}
        >
          future of tech
        </span>
      </h1>

      <p className="text-[color:var(--color-black)] text-lg md:text-xl tracking-tight leading-relaxed mt-6">
        Connect with inspiring women in technology, find mentors, collaborate on meaningful projects, and break through barriers together. SheHub is your platform for growth, learning, and success in tech.
      </p>
    </div>
  );
}
