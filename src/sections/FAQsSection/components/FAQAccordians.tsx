import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQAccordionCopyType {
    header: string,
    text: string
}

const FAQAccordionCopy: FAQAccordionCopyType[] = [
    {
        header: "What is SheHub?",
        text: "SheHub is a career growth platform where women gain job-ready experience by working in lean, collaborative tech teams guided by mentors. Contributors don't just practice — they deliver. Along the way, they also strengthen confidence, communication, and problem-solving skills that matter in real roles."
    },
    {
        header: "Who can join?",
        text: "Contributors: Women pivoting into tech, typically from bootcamps or self-taught backgrounds, who already have the technical or design skills to contribute to a real product team. Mentors: Women in tech who want to give back, support others or grow their own leadership experience as they prepare for their next career move (e.g., management, team lead, strategy roles)."
    },
    {
        header: "Is it free?",
        text: "Yes — SheHub is 100% free for both contributors and mentors. Our mission is to make access to real experience and leadership development more equitable."
    },
    {
        header: "How long are the projects?",
        text: "Most projects last 8 to 12 weeks. Teams meet regularly, and all roles are part-time and designed to fit around work, study, or caregiving responsibilities."
    },
    {
        header: "Is SheHub only for women?",
        text: "Yes, we focus on creating a safe and empowering space for women and non-binary people transitioning into tech."
    },
]

const AccordionBlock = () => {
    return (
        <Accordion type="multiple" className="w-full">
        {FAQAccordionCopy.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.header}</AccordionTrigger>
            <AccordionContent>{item.text}</AccordionContent>
            </AccordionItem>
        ))}
        </Accordion>
    );
}

const FAQAccordions = () => {
  return (
    <div className="flex w-[816px]">
        <AccordionBlock/>
    </div>
  )
}

export default FAQAccordions