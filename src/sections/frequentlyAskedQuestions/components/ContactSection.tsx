import Button from "@/components/ui/button"

const ContactSection = () => {
  return (
    <div className="w-[768px] h-[148px] gap-[24px] flex flex-col items-center justify-center">
        <h2 className="font-[var(--font-weight-heavy)] text-[length:var(--text-size-700)] leading-[var(--spacing-line-height-heading-4)]">
            Still have questions?
        </h2>
        <h2 className="font-[var(--font-weight-default)] text-[length:var(--text-size-400)] leading-[var(--spacing-line-height-body-2)] text-center" style={{ fontFamily: 'var(--font-secondary)' }}>
            We are here to help, do not hesitate and write us!        
        </h2>
        <Button variant="secondary-primary" size="sm" shape="rounded" className="w-[134px]">Contact us</Button>
      </div>
  )
}

export default ContactSection