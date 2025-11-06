import Button from '@/components/ui/button'
import HeroText from '@/sections/home/hero/components/TypewriterAnimation'

const TextSection = () => {
    return (
        <div className="flex flex-col h-[638px]">
            <div className='gap-[48px] flex flex-col'>
                <div className="text-black font-[var(--font-weight-heavy)] text-[length:var(--text-size-400)]">
                    Join SheHub as a collaborator
                </div>
                <div className="text-black font-[var(--font-weight-heavy)] text-[length:var(--text-size-1000)] leading-[var(--spacing-line-height-heading-1)] flex flex-col">
                    <div>Real tech experience for women in</div>
                    <div className="h-[80px] relative">
                        <HeroText />
                    </div>
                </div>
                <div className="text-black font-[var(--font-weight-default)] leading-[var(--spacing-line-height-body-1)] text-[length:var(--text-size-500)]" style={{ fontFamily: 'var(--font-secondary)' }}>
                    SheHub connects early-career talent and experienced mentors to work on real-world, collaborative projects that are built and shipped — just like in a tech company.
                </div>
            </div>
            <div className='mt-[30px]'>
                <div className="flex gap-[16px]">
                    <Button
                        variant="primary-primary"
                        size="sm" shape="rounded"
                        className="min-w-[188px] min-h-[48px] font-[var(--font-weight-default)]"
                        style={{ fontFamily: 'var(--font-secondary)' }}
                    >
                        Join a real project
                    </Button>
                    <Button
                        variant="secondary-primary"
                        size="sm"
                        shape="rounded"
                        className="text-black min-w-[166px] min-h-[48px]"
                        style={{ fontFamily: 'var(--font-secondary)' }}
                    >
                        Mentor a team
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TextSection