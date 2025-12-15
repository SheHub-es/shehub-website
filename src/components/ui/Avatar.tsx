import { getInitials } from "@/lib/getInitials";
import clsx from "clsx";
import NextImage, { StaticImageData } from "next/image";

export type AvatarType = "container" | "initials" | "image";
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarVariant = "default" | "primary" | "secondary" | "tertiary";
export type AvatarItem = {
    name: string;
    imageUrl?: string;
    initials?: string;
    disabled?: boolean;
    variant?: AvatarVariant;
};

interface AvatarProps {
  name?: string;
  type: AvatarType;
  size: AvatarSize;
  variant?: AvatarVariant;
  initials?: string;
  disabled?: boolean;
  imageUrl?: string | StaticImageData;
  alt?: string;
  className?: string;
}

const sizeClasses: Record<AvatarSize, string> = {
  xs: "w-6 h-6 text-[12px]",
  sm: "w-8 h-8 text-[14px]",
  md: "w-12 h-12 text-[24px]",
  lg: "w-16 h-16 text-[30px]",
  xl: "w-24 h-24 text-[48px]",
};


const variantStyles: Record<
  AvatarVariant,
  { bg: string; }
> = {
  default: {
    bg: "var(--color-avatar-default-bg)",    
  },
  primary: {
    bg: "var(--color-avatar-primary-variant-bg)",
  },
  secondary: {
    bg: "var(--color-avatar-secondary-variant-bg)",
  },
  tertiary: {
    bg: "var(--color-avatar-tertiary-variant-bg)",
  },
};

export const Avatar = ({
  name,
  type,
  size,
  variant = "default",
  initials,
  disabled,
  imageUrl,
  alt = "avatar",
  className,
}: AvatarProps) => {
  const commonStyles = clsx(
    "relative flex items-center justify-center font-bold leading-[24px] overflow-hidden",
    sizeClasses[size],
    "rounded-full",
    disabled && "grayscale cursor-not-allowed",
    className
  );

  const { bg } = variantStyles[variant];

  const styles = {
    backgroundColor: disabled
      ? "var(--color-avatar-default-disabled)"
      : type === "image"
        ? "transparent"
        : bg,
    color:
      variant === "default"
        ? "var(--color-avatar-default-text)"
        : "var(--color-avatar-variant-text)",
  };

  const resolvedInitials = type === "initials" ? initials ?? (name ? getInitials(name) : undefined) : undefined;

  return (
    <div
      className={commonStyles}
      style={styles}
    >
      {type === "initials" && resolvedInitials}
      {type === "image" && imageUrl && (
        <NextImage
          src={imageUrl}
          alt={alt}          
          fill
          className="object-cover w-full h-full"
          priority={false}
          sizes={`${sizeClasses[size]}`}
        />
      )}
    </div>
  );
};

export default Avatar
