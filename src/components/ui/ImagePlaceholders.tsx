import clsx from "clsx";
import { Image as LucideImage } from "lucide-react";
import NextImage, { StaticImageData } from "next/image";

export type ImageSize = "sm" | "md" | "lg";
export type ImageCorner =
  | "noCorner"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

interface ImagePlaceholderProps {
  size?: ImageSize;
  corner: ImageCorner;
  imageUrl?: string | StaticImageData;
  loading?: boolean;
  className?: string;
  square?: number;
  customSize?: { width: number; height: number };
  iconSizePx?: number;
  alt?: string;
}

const sizeClasses: Record<ImageSize, string> = {
  sm: "w-[200px] h-[200px]",
  md: "w-[256px] h-[334px]",
  lg: "w-[360px] h-[460px]",
};

const cornerClasses: Record<ImageCorner, string> = {
  noCorner: "rounded-[120px]",
  topLeft:
    "rounded-tl-[4px] rounded-tr-[120px] rounded-br-[120px] rounded-bl-[120px]",
  topRight:
    "rounded-tl-[120px] rounded-tr-[4px] rounded-br-[120px] rounded-bl-[120px]",
  bottomLeft:
    "rounded-tl-[120px] rounded-tr-[120px] rounded-br-[120px] rounded-bl-[4px]",
  bottomRight:
    "rounded-tl-[120px] rounded-tr-[120px] rounded-br-[4px] rounded-bl-[120px]",
};

const iconSizes: Record<ImageSize, string> = {
  sm: "w-[70px] h-[70px]",
  md: "w-[90px] h-[90px]",
  lg: "w-[120px] h-[120px]",
};

const ImagePlaceholder = ({
  size = "sm",
  corner,
  imageUrl,
  loading,
  className,
  square,
  customSize,
  iconSizePx,
  alt,
}: ImagePlaceholderProps) => {
  const isCustom = typeof square === "number" || !!customSize;
  const widthPx = square ?? customSize?.width;
  const heightPx = square ?? customSize?.height;

  const commonStyles = clsx(
    "overflow-hidden",
    !isCustom && sizeClasses[size],
    cornerClasses[corner],
    loading && "bg-[var(--color-image-container-bg)]",
    className
  );

  const imageRounding = cornerClasses[corner];

  const autoIconPx =
    iconSizePx ??
    (isCustom
      ? Math.round(Math.min(widthPx ?? 0, heightPx ?? 0) * 0.35)
      : iconSizes[size]);

  return (
    <div className={clsx(commonStyles, "relative")} tabIndex={0} style={isCustom ? {width: widthPx, height: heightPx} : undefined}>
      {imageUrl ? (
        <NextImage
          src={imageUrl}
          alt={alt ?? "Placeholder image"}
          className={clsx("object-cover w-full h-full", imageRounding)}
          width={500}
          height={500}
        />
      ) : (
        <div
          className={clsx(
            "flex items-center justify-center w-full h-full",
            imageRounding
          )}
        >
          <LucideImage
            aria-hidden="true"
            focusable="false"
            size={autoIconPx}
            className="text-[var(--color-image-stroke-icon)]"
          />
        </div>
      )}
    </div>
  );
};

export default ImagePlaceholder
