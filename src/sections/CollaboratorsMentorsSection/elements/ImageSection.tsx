import NextImage, { StaticImageData } from "next/image";

type ImageSectionVariant = "left" | "right";

type FloatingImageProps = {
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className: string;
  shadow?: boolean | string;
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
      alt: "Main image",
      width: 297,
      height: 339,
      className: variant === 'left' ? "absolute top-[22px] left-[32px]" : "absolute top-[255px] left-[288px] z-10",
    },
    {
      src: smallImage,
      alt: "Small image",
      width: 188,
      height: 188,
      className: variant === 'left' ? "absolute top-[388px] left-[361px] z-10" : "absolute top-[81px] left-[43px] z-10"
    },
    {
      src: arrowIcon,
      alt: "Arrow icon",
      className: variant === 'left' ? "h-[153px] w-[153px] absolute top-[430px] left-[81px] z-10" : "h-[90px] w-[113px] absolute top-[161px] left-[314px] z-10"
    },
    {
      src: bigIcon,
      alt: "Big icon",
      className: variant === 'left' ? "w-[85px] h-[85px] absolute top-[127px] left-[374px] z-10" : "w-[94px] h-[130px] absolute top-[410px] left-[81px] z-10"
    },
    {
      src: smallIcon,
      alt: "Small icon",
      width: 100,
      height: 50,
      className: variant === 'left' ? "h-[100px] w-[100px] absolute top-[250px] left-[390px] z-10" : "h-[50px] w-[50px] absolute top-[304px] left-[88px] z-10"
    }
]

  return (
    <div className="relative w-[584px] h-[620px] flex m-auto">
      <div className={`absolute flex z-0 w-[327px] h-[331px] ${
        variant === "left"
          ? "top-[192px] left-[148px]"
          : "top-[181px] left-[113px]"
      }`}>
        <NextImage
          src={centralImage}
          alt="Central image"
          width={300}
          height={300}
          className=""
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
    </div>
  )
}

export default ImageSection