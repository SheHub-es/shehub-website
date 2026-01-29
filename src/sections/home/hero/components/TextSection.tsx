import Button from '@/components/ui/Button'
import HeroText from '@/sections/home/hero/components/TypewriterAnimation'
import Link from 'next/link'

const TextSection = () => {
  return (
    <div
      className="
        flex flex-col
        justify-center
        text-left
        w-full
        h-auto

        lg:h-[638px]
      "
    >
      <div
        className="
          flex flex-col
          gap-6 md:gap-8
        "
      >
        <span
          className="
            text-black
            font-[var(--font-weight-heavy)]
            text-[length:var(--text-size-400)]
            md:text-[length:var(--text-size-500)]
          "
        >
          Join SheHub as a collaborator
        </span>

        <h1
          className="
            text-black
            font-[var(--font-weight-heavy)]
            tracking-tight
            text-[length:var(--text-size-900)]
            md:text-[length:var(--text-size-1000)]
            flex flex-col
          "
        >
          <div>Real tech experience for women in</div>

          <div className="relative h-[60px] md:h-[80px]">
            <HeroText />
          </div>
        </h1>

        <p
          className="
            text-black
            font-[var(--font-weight-default)]
            text-[length:var(--text-size-400)]
            md:text-[length:var(--text-size-500)]
            leading-[var(--spacing-line-height-body-1)]
            max-w-[90%] md:max-w-none
          "
          style={{ fontFamily: 'var(--font-secondary)' }}
        >
          SheHub connects early-career talent and experienced mentors to work on
          real-world, collaborative projects that are built and shipped — just
          like in a tech company.
        </p>
      </div>

      <div
        className="
          mt-[30px]
          flex flex-col sm:flex-row
          gap-[16px]
        "
      >
        <Link href="/auth">
          <Button
            variant="primary-primary"
            size="sm"
            shape="rounded"
            className="w-full sm:w-auto min-w-[188px] min-h-[48px] font-[var(--font-weight-default)]"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            Join a real project
          </Button>
        </Link>

        <Link href="/mentors">
          <Button
            variant="secondary-primary"
            size="sm"
            shape="rounded"
            className="w-full sm:w-auto text-black min-w-[166px] min-h-[48px]"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            Mentor a team
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default TextSection
