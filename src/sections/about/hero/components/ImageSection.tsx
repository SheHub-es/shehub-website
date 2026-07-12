import NextImage from "next/image";

import ArrowIcon from "@/assets/images/graphics/icon_arrow.svg";
import AsteriskIcon from "@/assets/images/graphics/icon_asterisk.svg";
import MentorPinkImage from "@/assets/images/graphics/icon_mentorPink.svg";
import PurpleRectangleImage from "@/assets/images/graphics/icon_purpleRectangle.svg";
import RobotImage from "@/assets/images/photos/photo_aboutRobot.png";
import CollabWomenImage from "@/assets/images/photos/photo_aboutCollabWomen.png";
import LaptopImage from "@/assets/images/photos/photo_aboutLaptop.png";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/cn";

const ImageSection = () => {
  const [containerRef, isVisible] = useIntersectionObserver();

  const fade = (stagger: "a" | "b" | "c" | "d") =>
    cn("fade-on-scroll", `stagger-${stagger}`, isVisible && "visible");

  return (
    <div
      ref={containerRef}
      className="relative z-1 mx-auto mt-8 h-[420px] w-full max-w-[420px] md:mt-16 lg:h-[480px] lg:max-w-[480px]"
    >
      <NextImage
        src={PurpleRectangleImage}
        alt=""
        className={cn(
          "absolute top-1/2 left-1/2 h-auto w-[280px] -translate-x-1/2 -translate-y-1/2 lg:w-[327px]",
          fade("a")
        )}
      />
      <NextImage
        src={CollabWomenImage}
        alt="Women laughing while working together on a laptop"
        className={cn(
          "absolute top-2 left-2 h-auto w-[170px] rounded-3xl rounded-br-none object-cover lg:top-0 lg:left-0 lg:w-55",
          fade("b")
        )}
      />
      <NextImage
        src={RobotImage}
        alt="Social robot with a human-like design"
        className={cn(
          "absolute top-[190px] left-10 h-auto w-26.25 rounded-3xl rounded-tr-none object-cover lg:top-55 lg:left-12.5 lg:w-34.5",
          fade("b")
        )}
      />
      <NextImage
        src={MentorPinkImage}
        alt=""
        className={cn(
          "absolute bottom-4 left-0 h-auto w-[110px] lg:bottom-6 lg:-left-4 lg:w-[140px]",
          fade("b")
        )}
      />
      <NextImage
        src={ArrowIcon}
        alt=""
        className={cn(
          "absolute top-8.5 left-55.5 h-auto w-17.5 lg:top-8 lg:left-63 lg:w-21.5",
          fade("c")
        )}
      />
      <NextImage
        src={LaptopImage}
        alt="A woman working on a laptop"
        className={cn(
          "absolute right-0 bottom-0 h-auto w-[190px] rounded-[35px] rounded-tl-none object-cover shadow-lg lg:w-60 lg:rounded-[44px] lg:rounded-tl-none",
          fade("d")
        )}
      />
      <NextImage
        src={AsteriskIcon}
        alt=""
        className={cn(
          "absolute top-40 left-47.5 h-auto w-11.25 lg:top-47.5 lg:left-56.25 lg:w-14",
          fade("d")
        )}
      />
    </div>
  );
};

export default ImageSection;
