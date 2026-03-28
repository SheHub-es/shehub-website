"use client";

import IconCalendarCheck from "@/components/icons/IconCalendarCheck";
import IconFilePen from "@/components/icons/IconFilePen";
import IconHeartHandshake from "@/components/icons/IconHeartHandshake";
import IconUserPlus from "@/components/icons/IconUserPlus";
import Button from "@/components/ui/Button";
import { useTranslation } from "@/hooks/useTranslation";
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper";
import Link from "next/link";

const STEP_ICONS = [IconFilePen, IconHeartHandshake, IconUserPlus, IconCalendarCheck];
const STEP_TITLE_KEYS = ['home.howItWorks.step1.title', 'home.howItWorks.step2.title', 'home.howItWorks.step3.title', 'home.howItWorks.step4.title'] as const;
const STEP_DESC_KEYS = ['home.howItWorks.step1.desc', 'home.howItWorks.step2.desc', 'home.howItWorks.step3.desc', 'home.howItWorks.step4.desc'] as const;

export default function HowSheHubWorks() {
  const { t } = useTranslation();

  return (
    <SectionWrapper className="text-black bg-background-footer py-24 font-primary">
      <div className="text-center mb-16">
        <p className="text-sm md:text-lg font-bold text-[var(--color-black-text)]">{t('home.howItWorks.eyebrow')}</p>

        <h2 className="mt-4 text-size-800 md:text-size-900 font-bold tracking-tight leading-[1.2] whitespace-pre-line">
          {t('home.howItWorks.titleIntro')}{' '}
          <span className="text-gradient-steps">{t('home.howItWorks.titleHighlight')}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 justify-items-center px-2">
        {STEP_ICONS.map((Icon, idx) => (
          <div key={idx} className="flex items-start gap-5 w-71">
            <Icon className="w-11 h-11 text-black" />
            <div className="flex flex-col gap-2">
              <h3 className="text-heading-400 font-bold text-black">
                {t(STEP_TITLE_KEYS[idx])}
              </h3>
              <p className="text-body-300 text-black w-54">
                {t(STEP_DESC_KEYS[idx])}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link href="/join">
          <Button
            variant="primary-primary"
            size="sm"
            shape="rounded"
            className="hover:!text-black transition-colors duration-200" >
            {t('home.howItWorks.cta')}
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
}
