import Typewriter from 'typewriter-effect';

export default function HeroText() {

  const roleStrings = [
    "development",
    "UX/UI Design",
    "Product Management",
    "Data",
    "Product Marketing",
    "QA",
  ]

  return (
    <div
      className="
    bg-clip-text text-transparent
    text-[length:var(--text-size-800)]
    md:text-[length:var(--text-size-1000)]
    whitespace-normal md:whitespace-nowrap
    relative md:absolute
    left-0 md:top-0
  "
      style={{
        backgroundImage: "var(--color-gradient-brand)",
      }}
    >
      <Typewriter
        options={{
          strings: roleStrings,
          autoStart: true,
          loop: true,
          delay: 30,
          deleteSpeed: 25,
        }}
      />
    </div>
  );
}
