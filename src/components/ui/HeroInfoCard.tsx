import clsx from "clsx";
import NextImage, { StaticImageData } from "next/image";

interface InfoCardProps {
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  title: string;
  subtitle: string;
  className?: string;
  corner?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "noCorner";
  style?: React.CSSProperties;
  width: string;
}

const cornerClasses: Record<NonNullable<InfoCardProps["corner"]>, string> = {
  noCorner: "rounded-[50px]",
  topLeft:
    "rounded-tl-[4px] rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px]",
  topRight:
    "rounded-tl-[40px] rounded-tr-[4px] rounded-br-[40px] rounded-bl-[40px]",
  bottomLeft:
    "rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] rounded-bl-[4px]",
  bottomRight:
    "rounded-tl-[40px] rounded-tr-[40px] rounded-br-[4px] rounded-bl-[40px]",
};

export default function InfoCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  className,
  corner = "topLeft",
  style,
  width
}: InfoCardProps) {
  return (
    <div
      className={clsx(
        "relative h-[148px] box-border shadow-[0px_4px_16px_#0E0E0E14] pt-[24px] pb-[24px] pl-[32px] pr-[32px]",
        cornerClasses[corner],
        className
      )}
      style={{
        backgroundColor: "rgba(254, 254, 254, 0.9)",
        width,
        ...style,
      }}
    >
      {imageSrc && (
        <div>
          <NextImage
            src={typeof imageSrc === "string" ? imageSrc : imageSrc}
            alt={imageAlt ?? ""}
            priority={false}
          />
        </div>
      )}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 10 }}
        aria-hidden="true"
      />
      <div className="relative z-20 flex flex-col gap-[5px] h-full mt-[16px]" >
        <p className="text-black font-[700] text-[30px] leading-none text-left m-0">
          {title}
        </p>
        <p className="text-[16px] text-black leading-none text-left m-0">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
