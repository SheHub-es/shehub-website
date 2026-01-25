import PartnerLogosCarousel from '@/components/shared/PartnerLogosCarousel';
import PartnerLogosGrid from '@/components/shared/PartnerLogosGrid';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/sections/shared/sectionWrapper/SectionWrapper';
import Link from "next/link";

const Partners = () => {
  return (
    <SectionWrapper
      id="partners"
      aria-labelledby="partners-heading"
      className="flex flex-col items-center text-center gap-8 md:gap-10 lg:gap-12 py-12 md:py-16 lg:py-20 bg-background-footer"
    >
      {/* HEADER */}
      <header className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full mx-auto px-4 md:px-0 md:max-w-3xl">
        <h2
          id="partners-heading"
          className="text-black text-size-600 md:text-size-800 lg:text-size-900 font-primary font-heavy tracking-tight mb-4 md:mb-6"
        >
          Our sponsors and <span className="text-primary">partners</span>
        </h2>

        <p className="text-black font-secondary text-size-300 md:text-size-400 lg:text-size-500 leading-line-height-body-1">
          At SheHub, we&apos;re proud to be backed by an incredible network of sponsors
          and partners who share our mission to empower women in tech, design,
          and digital innovation. If your organization believes in creating real
          change and wants to help shape the next generation of digital talent,
          get in touch.
        </p>
      </header>

      {/* LOGOS - Grid en móvil/tablet, Carousel en desktop */}
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
            Become a partner
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default Partners;

