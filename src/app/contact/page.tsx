import SectionWrapper from "@/components/layout/sectionWrapper/SectionWrapper"

export default function ConnectPage() {
  return (
    <SectionWrapper id="connect" className="py-20 flex flex-col items-center text-center gap-6">
      <h1 className="font-primary text-4xl sm:text-5xl font-bold leading-tight text-[color:var(--color-black)]">
        Let’s{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "var(--color-gradient-brand)" }}
        >
          connect!
        </span>
      </h1>

      <p className="text-gray-700 max-w-2xl text-lg leading-relaxed">
        Either you want to collaborate, mentor, partner with us or just know more about SheHub,  
        please fill in the form or send us an email.
      </p>

      <p className="text-[color:var(--color-black)] font-medium">
        We’d love to hear from you.
      </p>

      <a
        href="mailto:info@shehub.es"
        className="text-[color:var(--color-gradient-brand)] font-medium hover:underline"
      >
        info@shehub.es
      </a>
    </SectionWrapper>
  )
}
