import Button from "@/components/ui/Button"
import Link from "next/link"

const ContactSection = () => {
  return (
    <div
      className="
        flex 
        flex-col 
        items-center 
        text-center
        gap-4
        w-full 
        max-w-[760px]
        px-4
        mx-auto
      "
    >
      <h2 className="font-[var(--font-weight-heavy)] text-size-600 md:text-text-size-700 leading-[var(--spacing-line-height-heading-4)]">
        Still have questions?
      </h2>

      <p
        className="
          font-[var(--font-weight-default)] 
          text-[length:var(--text-size-300)] 
          md:text-[length:var(--text-size-400)] 
          leading-[var(--spacing-line-height-body-2)]
          font-secondary
        "
      >
        We are here to help, do not hesitate and write us!
      </p>
      <Link href="/contact">
        <Button
          variant="secondary-primary"
          size="sm"
          shape="rounded"
          className="w-[234px]"
        >
          Contact us
        </Button>
      </Link>

    </div>
  )
}

export default ContactSection
