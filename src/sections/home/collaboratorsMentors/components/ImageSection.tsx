import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/cn";
import Image, { StaticImageData } from "next/image";

type ImageSectionVariant = "left" | "right";

type FloatingImageProps = {
  src: StaticImageData;
  alt: string;
  className: string;
  objectFit?: "cover" | "contain";
  sizes?: string;
};

interface ImageSectionProps {
  centralImage: StaticImageData,
  mainImage: StaticImageData,
  smallImage: StaticImageData,
  arrowIcon: StaticImageData,
  bigIcon: StaticImageData,
  smallIcon: StaticImageData,
  variant: ImageSectionVariant
};

const ImageSection = ({ 
  centralImage, 
  mainImage,
  smallImage,
  arrowIcon,
  bigIcon,
  smallIcon,
  variant
}: ImageSectionProps) => {

const floatingImages: FloatingImageProps[] = [
  {
      src: mainImage,
      alt: variant === 'left' 
        ? "Two women smiling while looking at a laptop together"
        : "Female speaker delivering a talk with a microphone",
      objectFit: "cover",
      sizes: "(max-width: 768px) 140px, 279px",
      className: variant === 'left' 
        ? "absolute top-[15px] left-[20px] md:top-[22px] md:left-[32px] w-[140px] h-[170px] md:w-[279px] md:h-[339px] fade-in" 
        : "absolute top-[150px] left-[180px] md:top-[255px] md:left-[288px] w-[140px] h-[170px] md:w-[279px] md:h-[339px] z-10 fade-in",
    },
    {
      src: smallImage,
      alt: variant !== 'left' 
        ? "Open laptop on a meeting table with people in discussion"
        : "Small image",
      objectFit: "cover",
      sizes: "(max-width: 768px) 95px, 188px",
      className: variant === 'left' 
        ? "absolute top-[240px] left-[210px] md:top-[388px] md:left-[341px] w-[95px] h-[95px] md:w-[188px] md:h-[188px] z-10" 
        : "absolute top-[50px] left-[25px] md:top-[81px] md:left-[43px] w-[95px] h-[95px] md:w-[188px] md:h-[188px] z-10"
    },
    {
      src: arrowIcon,
      alt: "Arrow icon",
      objectFit: "contain",
      sizes: "(max-width: 768px) 75px, 153px",
      className: variant === 'left' 
        ? "h-[75px] w-[75px] md:h-[153px] md:w-[153px] absolute top-[240px] left-[50px] md:top-[388px] md:left-[81px] z-10" 
        : "h-[45px] w-[55px] md:h-[90px] md:w-[113px] absolute top-[95px] left-[195px] md:top-[161px] md:left-[314px] z-10"
    },
    {
      src: bigIcon,
      alt: "Big icon",
      objectFit: "contain",
      sizes: "(max-width: 768px) 47px, 94px",
      className: variant === 'left' 
        ? "w-[42px] h-[42px] md:w-[85px] md:h-[85px] absolute top-[90px] left-[235px] md:top-[150px] md:left-[374px] z-10" 
        : "w-[47px] h-[65px] md:w-[94px] md:h-[130px] absolute top-[250px] left-[50px] md:top-[410px] md:left-[81px] z-10"
    },
    {
      src: smallIcon,
      alt: "Small icon",
      objectFit: "contain",
      sizes: "(max-width: 768px) 50px, 100px",
      className: variant === 'left' 
        ? "h-[50px] w-[50px] md:h-[100px] md:w-[100px] absolute top-[150px] left-[230px] md:top-[250px] md:left-[370px] z-10" 
        : "h-[25px] w-[25px] md:h-[50px] md:w-[50px] absolute top-[190px] left-[55px] md:top-[304px] md:left-[88px] z-10"
    }
]

  const [mainImageRef, isMainImageVisible] = useIntersectionObserver();

  return (
    <div className="relative w-full max-w-[584px] h-auto min-h-[300px] md:min-h-[620px] md:h-[620px] flex m-auto md:ml-line-height-label-2">
      <div className={`absolute flex z-0 w-[160px] h-[160px] md:w-[327px] md:h-[331px] ${
        variant === "left"
          ? "top-[95px] left-line-height-heading-2 md:top-[192px] md:left-[148px]"
          : "top-[90px] left-[45px] md:top-[181px] md:left-[113px]"
      }`}>
        <Image
          src={centralImage}
          alt="Central image"
          fill
          sizes="(max-width: 768px) 160px, 327px"
          className="object-contain"
        />
      </div>

      {floatingImages.map((img, idx) => (
        <div
          key={idx}
          ref={idx === 0 ? mainImageRef : undefined}
          className={cn(
            img.className,
            idx === 0 && "fade-on-scroll",
            idx === 0 && isMainImageVisible && "visible"
          )}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes={img.sizes}
            className={img.objectFit === "cover" ? "object-cover" : "object-contain"}
          />
        </div>
      ))}
    </div>
  )
}

export default ImageSection