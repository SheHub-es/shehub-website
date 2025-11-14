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
        className="bg-clip-text text-transparent text-[length:var(--text-size-800)] md:text-[length:var(--text-size-1000)] whitespace-nowrap pb-4"
        style={{ 
          backgroundImage: "var(--color-gradient-brand)",
          position: "absolute",
          top: "0",
          left: "0"
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
