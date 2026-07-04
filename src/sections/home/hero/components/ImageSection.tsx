import NextImage from "next/image";

import BubblesImage from "@/assets/images/graphics/icon_bubbles.svg";
import CollaboratorOrangeImage from "@/assets/images/graphics/icon_collaboratorOrange.svg";
import MentorPinkImage from "@/assets/images/graphics/icon_mentorPink.svg";
import RocketIcon from "@/assets/images/graphics/icon_rocket.svg";
import IconStar from "@/assets/images/graphics/icon_star.svg";
import AthenaAvatarGroup from "@/assets/images/photos/photo_athenaAvatarGroup.svg";
import HeroImage from "@/assets/images/photos/photo_heroHome.jpg";
import InfoCard from "@/components/ui/HeroInfoCard";
import ImagePlaceholder from "@/components/ui/ImagePlaceholders";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/cn";

const floatingImages = [
  {
    src: CollaboratorOrangeImage,
    alt: "",
    width: 153,
    height: 66,
    className: `
      absolute 
      -bottom-12 -left-18
      lg:-bottom-[65px] lg:-left-[70px]
      h-auto w-auto
    `,
  },
  {
    src: MentorPinkImage,
    alt: "",
    width: 113,
    height: 66,
    className: `
      absolute 
      top-[210px] -right-15 -translate-y-1/2
      lg:top-[253px] lg:-right-[60px]
      h-auto w-auto
    `,
  },
  {
    src: IconStar,
    alt: "",
    width: 86,
    height: 86,
    className: `
      absolute 
      top-10 -right-10 -translate-y-1/2
      lg:top-[15px] lg:-right-[25px]
      h-auto w-auto
    `,
  },
  {
    src: BubblesImage,
    alt: "",
    width: 227,
    height: 227,
    className: `
      absolute 
      top-[280px] -left-30 -translate-y-1/2 z-[-1]
      lg:top-[253px] lg:-left-[110px]
      h-auto w-auto
    `,
  },
];

const ImageSection = () => {
  const { t } = useTranslation();
  const [heroImageRef, isHeroVisible] = useIntersectionObserver();

  return (
    <div className="relative z-1 mx-auto mt-8 w-full md:mt-36">
      {/* Main Image */}
      <div
        ref={heroImageRef}
        className={cn("fade-on-scroll", isHeroVisible && "visible")}
      >
        <ImagePlaceholder
          size="lg"
          corner="bottomLeft"
          imageUrl={HeroImage.src}
          alt="A group of joyful women interacting together"
        />
      </div>

      {/* Floating Images */}
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

      {/* Top-left InfoCard */}
      <div
        className="
        absolute 
        top-7.5 -left-30 -translate-y-1/2
        lg:top-10 lg:-left-32.5
      "
      >
        <InfoCard
          width="180px"
          title={t("home.hero.infoCard.teams.title")}
          subtitle={t("home.hero.infoCard.teams.subtitle")}
          corner="bottomRight"
          imageSrc={AthenaAvatarGroup}
        />
      </div>

      {/* Bottom-right InfoCard */}
      <div
        className="
        absolute 
        -bottom-20 -right-20
        lg:bottom-[-70px] lg:-right-[60px]
      "
      >
        <InfoCard
          width="221px"
          title={t("home.hero.infoCard.hours.title")}
          subtitle={t("home.hero.infoCard.hours.subtitle")}
          imageSrc={RocketIcon}
        />
      </div>
    </div>
  );
};

export default ImageSection;
