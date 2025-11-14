import Button from "@/components/ui/Button"

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
      <h2 className="font-[var(--font-weight-heavy)] text-[length:var(--text-size-700)] leading-[var(--spacing-line-height-heading-4)]">
        Still have questions?
      </h2>

      <p
        className="
          font-[var(--font-weight-default)] 
          text-[length:var(--text-size-400)] 
          leading-[var(--spacing-line-height-body-2)]
          font-secondary
        "
      >
        We are here to help, do not hesitate and write us!
      </p>

      <Button 
        variant="secondary-primary" 
        size="sm" 
        shape="rounded" 
        className="w-[134px]"
      >
        Contact us
      </Button>
    </div>
  )
}

export default ContactSection
