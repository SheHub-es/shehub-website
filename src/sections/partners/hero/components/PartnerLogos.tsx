import LogoBarcelonaActiva from '@/assets/images/logos/partners/logo_barcelonaActiva.png'
import LogoDatacamp from '@/assets/images/logos/partners/logo_datacamp.png'
import LogFemcodersClub from '@/assets/images/logos/partners/logo_femcodersClub.png'
import LogoFigma from '@/assets/images/logos/partners/logo_figma.png'
import LogoGenway from '@/assets/images/logos/partners/logo_genway.png'
import LogoInnoit from '@/assets/images/logos/partners/logo_innoit.png'
import LogoNotion from '@/assets/images/logos/partners/logo_notion.png'
import LogoSheLeads from '@/assets/images/logos/partners/logo_sheLeadsProduct.png'
import LogoStep4ward from '@/assets/images/logos/partners/logo_step4ward.png'
import { StaticImageData } from 'next/image'

export type Partner = {
  id: string;
  image: string | StaticImageData;
  alt: string;
  isWide?: boolean; // Logos largos/horizontales que ocupan más espacio
};

export const partnersData: Partner[] = [
  { id: "1", image: LogoDatacamp, alt: "Datacamp Donates logo", isWide: true },
  { id: "2", image: LogoFigma, alt: "Figma logo", isWide: false },
  { id: "3", image: LogoNotion, alt: "Notion logo", isWide: true },
  { id: "4", image: LogoStep4ward, alt: "Step4ward logo", isWide: true },
  { id: "5", image: LogoSheLeads, alt: "She Leads Product logo", isWide: true },
  { id: "6", image: LogFemcodersClub, alt: "Femcoders Club logo", isWide: false },
  { id: "7", image: LogoInnoit, alt: "Innoit logo", isWide: true },
  { id: "8", image: LogoGenway, alt: "Genway logo", isWide: true },
  { id: "9", image: LogoBarcelonaActiva, alt: "Barcelona Activa logo", isWide: true },
];
