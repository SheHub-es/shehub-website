import Button from "@/components/ui/button"

interface TextSectionProps {
    sectionHeading: string,
    primaryHeading: React.ReactNode,
    paragraphText: string,
    whatYouBringText: string,
    whatWeOfferText: string,
    buttonText: string
}

interface InfoBlockProps {
  title: string
  text: string
}

const InfoBlock = ({ title, text }: InfoBlockProps) => (
  <div className="flex flex-col flex-1 gap-2">
    <h3 className="text-black text-[length:var(--text-size-500)] font-[var(--font-weight-heavy)]">
      {title}
    </h3>
    <p className="text-black text-[length:var(--text-size-300)] font-[var(--font-weight-default)] leading-[1.6] max-w-[280px] whitespace-pre-line font-secondary">
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
    buttonText
}: TextSectionProps ) {

  return (
     <section className="h-[536px]">
        <div className='flex flex-col gap-4 mt-[-30px]'>
            <div className="text-black font-[var(--font-weight-heavy)] text-[length:var(--text-size-400)]">
                {sectionHeading}
            </div>
            <div className="text-black font-[var(--font-weight-heavy)] text-[length:var(--text-size-900)] leading-[var(--spacing-line-height-heading-2)]">
                {primaryHeading}
            </div>
            <div className="text-black font-[var(--font-weight-default)] leading-[var(--spacing-line-height-body-2)] text-[length:var(--text-size-400)] mt-[12px]" style={{ fontFamily: 'var(--font-secondary)' }} >
                {paragraphText}
            </div>
            <div className="flex gap-6 py-4">
                <InfoBlock title="What You Bring" text={whatYouBringText} />
                <InfoBlock title="What We Offer" text={whatWeOfferText} />
            </div>
            <Button variant="secondary-primary" shape="rounded" className="text-black w-[230px]">{buttonText}</Button>
        </div>
    </section>
  )
}

export default TextSection