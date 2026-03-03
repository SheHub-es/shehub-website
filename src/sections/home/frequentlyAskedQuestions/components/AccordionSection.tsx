"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { useTranslation } from "@/hooks/useTranslation";

const FAQ_HEADER_KEYS = ['home.faq.q1', 'home.faq.q2', 'home.faq.q3', 'home.faq.q4', 'home.faq.q5'] as const;
const FAQ_ANSWER_KEYS = ['home.faq.a1', 'home.faq.a2', 'home.faq.a3', 'home.faq.a4', 'home.faq.a5'] as const;

const AccordionBlock = () => {
    const { t } = useTranslation();
    return (
        <Accordion type="multiple" className="w-full">
            {FAQ_HEADER_KEYS.map((headerKey, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{t(headerKey)}</AccordionTrigger>
                    <AccordionContent>{t(FAQ_ANSWER_KEYS[index])}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

const AccordionSection = () => {
    return (
        <div className="w-full  mx-auto">
            <AccordionBlock />
        </div>
    )
}

export default AccordionSection