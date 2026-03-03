import Typewriter from 'typewriter-effect';

type HeroTextProps = {
  roleStrings?: string[];
};

export default function HeroText({ roleStrings }: HeroTextProps) {
  const strings = roleStrings?.length ? roleStrings : [
    "development",
    "UX/UI Design",
    "Product Management",
    "Data",
    "Product Marketing",
    "QA",
  ];

  return (
    <div
      className="
    bg-clip-text text-transparent
    text-4xl md:text-6xl
    whitespace-normal md:whitespace-nowrap
    relative md:absolute
    left-0 md:top-0
    pb-4
  "
      style={{
        backgroundImage: "var(--color-gradient-brand)",
      }}
    >
      <Typewriter
        options={{
          strings,
          autoStart: true,
          loop: true,
          delay: 30,
          deleteSpeed: 25,
        }}
      />
    </div>
  );
}
