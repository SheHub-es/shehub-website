"use client";

import PartnerLogosCarousel from '@/components/shared/PartnerLogosCarousel';
import PartnerLogosGrid from '@/components/shared/PartnerLogosGrid';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/sections/shared/sectionWrapper/SectionWrapper';
import { useTranslation } from '@/hooks/useTranslation';
import Link from "next/link";

const Partners = () => {
  const { t } = useTranslation();
  const title = t('home.partners.title');
  const lastWord = title.split(/\s+/).pop() ?? '';
  const titleRest = title.split(/\s+/).slice(0, -1).join(' ');
  return (
    <SectionWrapper
      id="partners"
      aria-labelledby="partners-heading"
      className="flex flex-col items-center text-center gap-8 md:gap-10 lg:gap-12 py-12 md:py-16 lg:py-20 bg-background-footer"
    >
      <header className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full mx-auto px-4 md:px-0 md:max-w-3xl">
        <h2
          id="partners-heading"
          className="text-black text-size-600 md:text-size-800 lg:text-size-900 font-primary font-heavy tracking-tight mb-4 md:mb-6"
        >
          {titleRest} <span className="text-primary">{lastWord}</span>
        </h2>

        <p className="text-black font-secondary text-size-300 md:text-size-400 lg:text-size-500 leading-line-height-body-1">
          {t('home.partners.paragraph')}
        </p>
      </header>

      {/* LOGOS - Grid on mobile/tablet, Carousel on desktop */}
      <div className="w-full my-8 md:my-10 lg:my-16">
        {/* Mobile & Tablet: Grid responsivo */}
        <div className="block lg:hidden px-4 sm:px-6 md:px-0">
          <PartnerLogosGrid />
        </div>
        
        {/* Desktop: Carousel */}
        <div className="hidden lg:block">
          <PartnerLogosCarousel 
            autoPlay={true}
            size="large"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 md:px-0">
        <Link href="/partners" aria-label="Go to Partners page">
          <Button
            variant="primary-primary"
            size="sm"
            shape="rounded"
            className="hover:!text-black transition-colors duration-200 w-full sm:w-auto"
          >
            {t('home.partners.cta')}
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default Partners;

