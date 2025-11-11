import Button from '@/components/ui/Button'

export const CallToAction = () => {
  return (
    <div
      id="cta"
      className="h-[376px] gap-[48px] w-full text-white flex flex-col items-center justify-center bg-[linear-gradient(90deg,_#f76702_0%,_#f83c85_50%,_#7858ff_100%)]"
    >
      <h2 className="font-[var(--font-weight-heavy)] text-[length:var(--text-size-900)] leading-[var(--spacing-line-height-heading-2)]">
        Ready to grow and give back?
      </h2>
      <Button
        variant="secondary-primary"
        shape="rounded"
        className="w-[203px] h-[40px] text-black"
      >
        Join the community
      </Button>
    </div>
  )
}

export default CallToAction
