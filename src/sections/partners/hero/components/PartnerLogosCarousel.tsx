import PartnerLogosCarousel from '@/components/shared/PartnerLogosCarousel';

export default function PartnerLogosCarouselWrapper() {
  return (
    <PartnerLogosCarousel 
      autoPlay={true}
      size="default"
      className="mt-12 md:mt-16 lg:mt-20"
    />
  );
}
