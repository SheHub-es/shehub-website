import ImagePlaceholder from "@/components/ui/ImagePlaceholders"
import clsx from "clsx"

interface HeroImagesProps {
  mainImage: string
  alt: string
  reverse?: boolean
}

export default function HeroImages({
  mainImage,
  alt,
  reverse = false,
}: HeroImagesProps) {
  return (
    <div
      className={clsx(
        "relative flex-1 flex justify-center items-center min-h-[460px]",
        reverse && "order-first md:order-last"
      )}
    >
      {/* Placeholder principal grande */}
      <ImagePlaceholder
        size="lg"
        corner="bottomLeft"
        imageUrl={mainImage}
        alt={alt}
      />

      {/* Placeholder superior */}
      <ImagePlaceholder
        size="md"
        corner="topRight"
        imageUrl={mainImage}
        alt={alt}
        className="absolute top-[60px] right-[-40px] md:right-[-80px]"
      />

      {/* Placeholder inferior */}
      <ImagePlaceholder
        size="sm"
        corner="bottomRight"
        imageUrl={mainImage}
        alt={alt}
        className="absolute bottom-[50px] left-[-40px] md:left-[-80px]"
      />
    </div>
  )
}
