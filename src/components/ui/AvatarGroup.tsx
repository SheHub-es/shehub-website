import Avatar, { AvatarItem, AvatarSize } from "@/components/ui/Avatar";
import { getInitials } from "@/lib/getInitials";
import clsx from "clsx";

export type AvatarGroupVariants =  "sm" | "md" | "lg";

interface AvatarGroupProps {
    avatars: AvatarItem[];
    size?: AvatarSize;
    overlap?: boolean;
    maxAvatars?: number
    variant?: AvatarGroupVariants;
    groupSize?: number
    className?: string
}

const groupVariantClasses: Record<AvatarGroupVariants, number> = {
    sm: 3,
    md: 4,
    lg: 5,
}

export const AvatarGroup = ({
    avatars,
    size = "xs",
    overlap = true,
    maxAvatars,
    variant = "md",
    groupSize,
    className
} : AvatarGroupProps) => {
    const resolvedGroupSize = groupSize ?? groupVariantClasses[variant] ?? groupVariantClasses.md;

    const finalLimit = typeof maxAvatars === 'number' ? Math.min(maxAvatars, resolvedGroupSize) : resolvedGroupSize;

    const visibleAvatars = avatars.slice(0, finalLimit)

    return (
        <div 
            className={clsx (overlap ? "flex -space-x-2" : "flex space-x-2")}>
            {visibleAvatars.map((u, i) => (
                
                    <Avatar
                        key={`${u.name}-${i}`}
                        type={u.imageUrl ? "image" : "initials"}
                        size={size}
                        initials={u.imageUrl ? undefined : u.initials ??  getInitials(u.name)}
                        imageUrl={u.imageUrl}
                        disabled={u.disabled}
                        variant={u.variant}
                        className="ring-2 ring-white"
                    />
                ))}
        </div>
    )
}