import clsx from "clsx";
import { Image as LucideImage } from "lucide-react";
import NextImage from "next/image";

export type ImageSize = "sm" | "md" | "lg";
export type ImageCorner =
  | "noCorner"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

interface ImagePlaceholderProps {
  size: ImageSize;
  corner: ImageCorner;
  imageUrl?: string;
  loading?: boolean;
}

const sizeClasses: Record<ImageSize, string> = {
  sm: "w-[200px] h-[200px]",
  md: "w-[256px] h-[334px]",
  lg: "w-[360px] h-[460px]",
};

const cornerClasses: Record<ImageCorner, string> = {
  noCorner: "rounded-[50px]",
  topLeft:
    "rounded-tl-[4px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px]",
  topRight:
    "rounded-tl-[50px] rounded-tr-[4px] rounded-br-[50px] rounded-bl-[50px]",
  bottomLeft:
    "rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[4px]",
  bottomRight:
    "rounded-tl-[50px] rounded-tr-[50px] rounded-br-[4px] rounded-bl-[50px]",
};

const iconSizes: Record<ImageSize, string> = {
  sm: "w-[70px] h-[70px]",
  md: "w-[90px] h-[90px]",
  lg: "w-[120px] h-[120px]",
};

const ImagePlaceholder = ({
  size,
  corner,
  imageUrl,
  loading,
}: ImagePlaceholderProps) => {
  const commonStyles = clsx(
    "overflow-hidden",
    sizeClasses[size],
    cornerClasses[corner],
    loading && "bg-[var(--color-image-container-bg)]"
  );

  const imageRounding = cornerClasses[corner];

  return (
    <div className={clsx(commonStyles, "relative")} tabIndex={0}>
      {imageUrl ? (
        <NextImage
          src={imageUrl}
          alt="Placeholder image"
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
            className={clsx(
              iconSizes[size],
              "text-[var(--color-image-stroke-icon)]"
            )}
          />
        </div>
      )}
    </div>
  );
};

export default ImagePlaceholder
