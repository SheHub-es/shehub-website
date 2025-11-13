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
        className="bg-clip-text text-transparent text-[53px] whitespace-nowrap"
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
