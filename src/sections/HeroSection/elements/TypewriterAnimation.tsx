import Typewriter from 'typewriter-effect';

export default function HeroText() {

    const roleStrings = [
        "Development",
        "UX/UI Design",
        "Product Management",
        "Data",
        "Product Marketing",
        "QA",
    ]

  return (
    <div
        className="bg-clip-text text-transparent relative"
        style={{ backgroundImage: "var(--color-gradient-brand)" }}
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
