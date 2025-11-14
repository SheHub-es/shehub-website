import LogoBarcelonaActiva from '@/assets/images/logos/partners/logo_barcelonaActiva.png'
import LogoDatacamp from '@/assets/images/logos/partners/logo_datacamp.png'
import LogFemcodersClub from '@/assets/images/logos/partners/logo_femcodersClub.png'
import LogoFigma from '@/assets/images/logos/partners/logo_figma.png'
import LogoGenway from '@/assets/images/logos/partners/logo_genway.png'
import LogoInnoit from '@/assets/images/logos/partners/logo_innoit.png'
import LogoNotion from '@/assets/images/logos/partners/logo_notion.png'
import LogoSheLeads from '@/assets/images/logos/partners/logo_sheLeadsProduct.png'
import LogoStep4ward from '@/assets/images/logos/partners/logo_step4ward.png'
import Button from '@/components/ui/Button'
import SectionWrapper from '@/sections/shared/sectionWrapper/SectionWrapper'
import Image, { StaticImageData } from 'next/image'
import Link from "next/link"

export type Partner = {
  id: string;
  image: string | StaticImageData;
  alt: string;
};

const partnersData: Partner[] = [
  { id: "1", image: LogoNotion, alt: "Notion logo" },
  { id: "2", image: LogoStep4ward, alt: "Step4ward logo" },
  { id: "3", image: LogoDatacamp, alt: "Datacamp Donates logo" },
  { id: "4", image: LogoSheLeads, alt: "She Leads Product logo" },
  { id: "5", image: LogoFigma, alt: "Figma logo" },
  { id: "6", image: LogFemcodersClub, alt: "Femcoders Club logo" },
  { id: "7", image: LogoInnoit, alt: "Innoit logo" },
  { id: "8", image: LogoGenway, alt: "Genway logo" },
  { id: "", image: LogoBarcelonaActiva, alt: "Barcelona Activa logo" },
];

const PartnerLogo = ({ src, alt }: { src: string | StaticImageData; alt: string }) => (
  <figure className="flex items-center justify-center">
    <Image
      src={src}
      alt={alt}
      loading="lazy"
      className="
        h-8        /* mobile → 32px */
        lg:h-12    /* desktop → 48px */
        w-auto
        object-contain
      "
    />
  </figure>
);

const Partners = () => {
  return (
    <SectionWrapper
      id="partners"
      aria-labelledby="partners-heading"
      className="flex flex-col items-center text-center gap-12 py-20 bg-background-footer"
    >
      {/* HEADER */}
      <header className="flex flex-col gap-8 w-full mx-auto md:max-w-3xl">
        <h2
          id="partners-heading"
          className="text-black text-size-800 md:text-size-900 font-primary font-heavy leading-line-height-heading-2 mb-6"
        >
          Our sponsors and <span className="text-primary">partners</span>
        </h2>

        <p className="text-black font-secondary text-size-400 md:text-size-500 leading-line-height-body-1">
          At SheHub, we&apos;re proud to be backed by an incredible network of sponsors
          and partners who share our mission to empower women in tech, design,
          and digital innovation. If your organization believes in creating real
          change and wants to help shape the next generation of digital talent,
          get in touch.
        </p>
      </header>

      {/* LOGOS LIST */}
      <ul
        aria-label="List of SheHub sponsors and partners"
        className="w-full flex justify-center"
      >
        <li className="flex flex-wrap justify-center items-center gap-x-10 md:gap-x-12 gap-y-10 my-24">
          {partnersData.map((partner) => (
            <span
              key={partner.id}
              className="shrink-0 flex items-center justify-center"
            >
              <PartnerLogo src={partner.image} alt={partner.alt} />
            </span>
          ))}
        </li>
      </ul>

      {/* CTA */}
      <Link href="/partners" aria-label="Go to Partners page">
        <Button
          variant="primary-primary"
          size="sm"
          shape="rounded"
          className="hover:!text-black transition-colors duration-200"
        >
          Become a partner
        </Button>
      </Link>
    </SectionWrapper>
  );
};

export default Partners;

