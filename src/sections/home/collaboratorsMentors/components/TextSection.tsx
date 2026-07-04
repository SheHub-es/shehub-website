import Button from "@/components/ui/Button"
import Link from "next/link"

interface TextSectionProps {
  sectionHeading: string
  primaryHeading: React.ReactNode
  paragraphText: string
  whatYouBringText: string
  whatWeOfferText: string
  whatYouBringLabel?: string
  whatWeOfferLabel?: string
  buttonText: string
  buttonHref?: string
}

interface InfoBlockProps {
  title: string
  text: string
}

const InfoBlock = ({ title, text }: InfoBlockProps) => (
  <div className="flex flex-col gap-2 w-full">
    <h3 className="text-black text-size-500 font-(--font-weight-heavy)">
      {title}
    </h3>
    <p className="text-black text-size-300 font-(--font-weight-default) leading-[1.6] whitespace-pre-line font-secondary">
      {text}
    </p>
  </div>
)

function TextSection({
  sectionHeading,
  primaryHeading,
  paragraphText,
  whatYouBringText,
  whatWeOfferText,
  whatYouBringLabel = 'What You Bring',
  whatWeOfferLabel = 'What We Offer',
  buttonText,
  buttonHref,
}: TextSectionProps) {
  const href = buttonHref ?? (buttonText.toLowerCase().includes('collaborator') ? '/collaborators' : '/mentors');
  return (
    <section className="min-h-auto md:min-h-[536px] w-full">
      <div className='flex flex-col gap-5 mt-[-30px] md:mt-[-30px] w-full'>
        <div className="text-black font-(--font-weight-heavy) text-size-300 md:text-size-400">
          {sectionHeading}
        </div>
        <div className="text-black font-(--font-weight-heavy) text-size-500 md:text-size-900 tracking-tight leading-tight">
          {primaryHeading}
        </div>
        <div className="text-black font-(--font-weight-default) leading-[var(--spacing-line-height-body-2)] text-size-300 md:text-size-400 mt-[12px]" style={{ fontFamily: 'var(--font-secondary)' }}>
          {paragraphText}
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-8 py-4 w-full max-w-full">
          <InfoBlock title={whatYouBringLabel} text={whatYouBringText} />
          <InfoBlock title={whatWeOfferLabel} text={whatWeOfferText} />
        </div>
        <div className="w-full flex justify-center md:justify-start">
          <div className="w-full flex justify-center md:justify-start">
            <Button asChild variant="secondary-primary" shape="rounded" className="text-black w-full md:w-auto text-sm md:text-base py-2 md:py-3">
              <Link href={href}>{buttonText}</Link>
            </Button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default TextSection
