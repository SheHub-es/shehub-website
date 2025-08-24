
import InfoCard from "@/components/ui/hero-info-card";
import ImagePlaceholder from '@/components/ui/image-placeholders';
import NextImage from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/cn";

import HeroImage from '../../../assets/images/hero-section-image.jpg';
import AthenaAvatarGroup from '../../../assets/svg/athena-avatar-group.svg';
import BubblesImage from '../../../assets/svg/bubbles-hero.svg';
import CollaboratorOrangeImage from '../../../assets/svg/collaborator-orange.svg';
import IconStar from '../../../assets/svg/icon-star-hero.svg';
import MentorPinkImage from '../../../assets/svg/mentor-pink.svg';
import RocketIcon from '../../../assets/svg/rocket-icon.svg';

type FloatingImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

const floatingImages: FloatingImageProps[] = [
  {
    src: CollaboratorOrangeImage,
    alt: "Collaborator image",
    width: 153,
    height: 66,
    className: "absolute -bottom-[65px] -left-[70px]"
  },
  {
    src: MentorPinkImage,
    alt: "Mentor image",
    width: 113,
    height: 66,
    className: "absolute top-[253px] -right-[60px] -translate-y-1/2"
  },
  {
    src: IconStar,
    alt: "Star image",
    width: 86,
    height: 86,
    className: "absolute top-[23px] -right-[60px] -translate-y-1/2"
  },
  {
    src: BubblesImage,
    alt: "Bubbles background",
    width: 227,
    height: 227,
    className: "absolute top-[253px] -left-[110px] -translate-y-1/2 z-[-1]"
  }
];


const ImageSection = () => {
  const [heroImageRef, isHeroVisible] = useIntersectionObserver();

  return (
    <div className="relative z-1 w-[360px] h-[460px] mx-auto">
        <div 
          ref={heroImageRef}
          className={cn(
            "fade-on-scroll",
            isHeroVisible && "visible"
          )}
        >
          <ImagePlaceholder
              size="lg"
              corner="bottomLeft"
              imageUrl={HeroImage.src}
          />
        </div>

        {floatingImages.map((img, idx) => (
            <NextImage
                key={idx}
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className={img.className}
            />
        ))}

        <div className="absolute top-[40px] left-[-130px] -translate-y-1/2">
            <InfoCard width='180px' title="3+" subtitle="active teams" corner="bottomRight" imageSrc={AthenaAvatarGroup}/>
        </div>

        <div className="absolute bottom-[-70px] right-[-60px]">
            <InfoCard width='221px' title="760+" subtitle="hours in real projects" imageSrc={RocketIcon}/>
        </div>
    </div>
  )
}

export default ImageSection