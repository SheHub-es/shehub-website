import NextImage from "next/image";

import ArrowIcon from "@/assets/images/graphics/icon_arrow.svg";
import AsteriskIcon from "@/assets/images/graphics/icon_asterisk.svg";
import SheHubPinkImage from "@/assets/images/graphics/icon_shehubPink.svg";
import PurpleRectangleImage from "@/assets/images/graphics/icon_purpleRectangle.svg";
import RobotImage from "@/assets/images/photos/photo_aboutRobot.png";
import CollabWomenImage from "@/assets/images/photos/photo_aboutCollabWomen.png";
import LaptopImage from "@/assets/images/photos/photo_aboutLaptop.png";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/cn";

const ImageSection = () => {
  const [containerRef, isVisible] = useIntersectionObserver();
  const { t } = useTranslation();

  const fade = cn("fade-on-scroll", isVisible && "visible");

  return (
    <div
      ref={containerRef}
      className="relative z-1 mx-auto mb-8 h-[420px] w-full max-w-[420px] md:mt-16 lg:mb-0 lg:h-[480px] lg:max-w-[480px]"
    >
      <NextImage
        src={PurpleRectangleImage}
        alt=""
        className={cn(
          "absolute top-1/2 left-1/2 h-auto w-[66.67%] -translate-x-1/2 -translate-y-1/2",
          fade
        )}
      />
      <NextImage
        src={CollabWomenImage}
        alt={t('about.hero.collabWomenAlt')}
        className={cn(
          "absolute top-[1.9%] left-[1.9%] h-auto w-[40.48%] rounded-3xl rounded-br-none object-cover",
          fade
        )}
      />
      <NextImage
        src={RobotImage}
        alt={t('about.hero.robotAlt')}
        className={cn(
          "absolute top-[45.24%] left-[9.52%] h-auto w-[25%] rounded-3xl rounded-tr-none object-cover",
          fade
        )}
      />
      <NextImage
        src={SheHubPinkImage}
        alt=""
        className={cn(
          "absolute bottom-[3.81%] left-[9.52%] h-auto w-[26.19%]",
          fade
        )}
      />
      <NextImage
        src={ArrowIcon}
        alt=""
        className={cn(
          "absolute top-[8.1%] left-[52.86%] h-auto w-[16.67%]",
          fade
        )}
      />
      <NextImage
        src={LaptopImage}
        alt={t('about.hero.laptopAlt')}
        className={cn(
          "absolute right-0 bottom-0 h-auto w-[45.24%] rounded-[35px] rounded-tl-none object-cover shadow-lg lg:rounded-[44px] lg:rounded-tl-none",
          fade
        )}
      />
      <NextImage
        src={AsteriskIcon}
        alt=""
        className={cn(
          "absolute top-[45.24%] left-[45.24%] h-auto w-[10.71%]",
          fade
        )}
      />
    </div>
  );
};

export default ImageSection;
