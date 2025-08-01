/* 
Example Implementation:

    <ImagePlaceholder 
        size="lg" 
        corner="bottomRight" 
        imageUrl='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d' 
    />
*/

import clsx from "clsx";

export type ImageSize = "sm" | "md" | "lg";
export type ImageCorner = "noCorner" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight"

interface ImagePlaceholderProps {
    size: ImageSize;
    corner: ImageCorner;
    imageUrl: string;
}

const sizeClasses: Record<ImageSize, string> = {
    sm: 'w-[200px] h-[200px]',
    md: 'w-[256px] h-[334px]',
    lg: 'w-[360px] h-[460px]'
};

const cornerClasses: Record<ImageCorner, string> = {
    noCorner: 'rounded-[50px]',
    topLeft: 'rounded-tl-[4px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px]',
    topRight: 'rounded-tl-[50px] rounded-tr-[4px] rounded-br-[50px] rounded-bl-[50px]',
    bottomLeft: 'rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[4px]',
    bottomRight: 'rounded-tl-[50px] rounded-tr-[50px] rounded-br-[4px] rounded-bl-[50px]'
};

export const ImagePlaceholder = ({
    size,
    corner,
    imageUrl
}: ImagePlaceholderProps) => {
  
 const commonStyles = clsx(
    'pt-[12px] pb-[12px] pl-[12px] pr-[12px] gap-[10px] overflow-hidden',
    sizeClasses[size],
    cornerClasses[corner]
)

const imageRounding = cornerClasses[corner] 

return (
    <div className={clsx(commonStyles)}>
        <img
            src={imageUrl}
            alt="image-placeholder"
            className={clsx('object-cover w-full h-full', imageRounding)}
        />
    </div>
    )
}

