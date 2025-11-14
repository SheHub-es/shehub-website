import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper"
import { Mail } from "lucide-react"

export default function ConnectPage() {
  return (
    <SectionWrapper
      id="connect"
      className="py-40 flex flex-col items-center text-center gap-6"
    >
      <h1 className="font-primary text-4xl sm:text-5xl font-bold leading-tight text-[color:var(--color-black)]">
        Let’s{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "var(--color-gradient-brand)" }}
        >
          connect!
        </span>
      </h1>

      <p className="text-gray-700 max-w-2xl text-lg leading-relaxed my-8">
        Either you want to collaborate, mentor, partner with us or just know more
        about SheHub, please send us an email.
      </p>

      <p className="text-[color:var(--color-black)] font-semibold max-w-2xl text-lg leading-relaxed">
        We’d love to hear from you
      </p>

      <div className="flex items-center justify-center gap-3 mt-2">
        <Mail className="w-6 h-6 text-[color:var(--color-black)]" />

        <a
          href="mailto:info@shehub.es"
          className="text-[color:var(--color-primary)] font-medium hover:underline"
        >
          info@shehub.es
        </a>
      </div>

    </SectionWrapper>
  )
}
