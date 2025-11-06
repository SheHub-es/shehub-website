import LogoDatacamp from '@/assets/images/logos/logo_datacamp.png'
import LogFemcodersClub from '@/assets/images/logos/logo_femcodersClub.png'
import LogoGenway from '@/assets/images/logos/logo_genway.png'
import LogoInnoit from '@/assets/images/logos/logo_innoit.png'
import LogoNotion from '@/assets/images/logos/logo_notion.png'
import LogoSheLeads from '@/assets/images/logos/logo_sheLeadsProduct.png'
import LogoStep4ward from '@/assets/images/logos/logo_step4ward.png'
import SectionWrapper from '@/components/layout/sectionWrapper/SectionWrapper'
import Button from '@/components/ui/button'
import Image, { StaticImageData } from 'next/image'

export type Partner = {
  id: string;
  image: string | StaticImageData;
  alt: string;
};

const partnersData: Partner[] = [
  {
    id: '1',
    image: LogoNotion,
    alt: "logo-notion"
  },
  {
    id: '2',
    image: LogoStep4ward,
    alt: "logo-step4ward"
  },
  {
    id: '3',
    image: LogoDatacamp,
    alt: "logo-datacamp"
  },
  {
    id: '4',
    image: LogoSheLeads,
    alt: "logo-she-leads-product"
  },
  {
    id: '5',
    image: LogFemcodersClub,
    alt: "logo-femcoders-club"
  },
  {
    id: '6',
    image: LogoInnoit,
    alt: "logo-innoit"
  },
  {
    id: '7',
    image: LogoGenway,
    alt: "logo-genway"
  }
];

const PartnerLogo = ({ src, alt }: { src: string | StaticImageData; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    height={48}
    className="block !h-[50px] !w-auto max-h-[48px] object-contain"
    loading='lazy'
  />
)

export const Partners = () => {
  return (
    <SectionWrapper id="partners" className="flex flex-col justify-center items-center gap-12 py-14 bg-background-footer">
      <div className='flex flex-col gap-6 w-[768px]'>
        <h2 className='text-black text-size-900 font-primary font-heavy leading-line-height-heading-2 text-center'>
          Our sponsors and
          <span className='text-primary'> partners</span>
        </h2>
        <p className='text-black font-secondary text-size-500 leading-line-height-body-1 self-stretch text-center'>
          At SheHub, we're proud to be backed by an incredible network of sponsors and partners who share our mission to empower women in tech, design, and digital innovation. If your organization believes in creating real change and wants to help shape the next generation of digital talent, get in touch.
        </p>
      </div>
      <div className='mx-auto w-full'>
        <div className='flex justify-center items-center gap-10 p-8 pl-16 h-[70px]'>
          {partnersData.map((partner) => (
            <div key={partner.id} className="shrink-0 flex items-center">
              <PartnerLogo
                src={partner.image}
                alt={partner.alt}
              />
            </div>
          ))}
        </div>
      </div>
      <Button
      variant='primary-primary'
      size='sm'
      shape='rounded'> 
      Become a partner
      </Button>
    </SectionWrapper>
  )
}

export default Partners
