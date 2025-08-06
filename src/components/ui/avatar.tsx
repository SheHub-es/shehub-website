/*
Example Avatar Usage:
<Avatar size='sm' type='container'/>
<Avatar size='md' type='initials' disabled initials="SH"/>
<Avatar size='lg' type='image' imageUrl="https://randomuser.me/api/portraits/women/68.jpg"/>
*/

import clsx from "clsx";

export type AvatarType = 'container' | 'initials' | 'image'
export type AvatarSize = 'xs' |'sm' | 'md' | 'lg' | 'xl'

interface AvatarProps {
    type: AvatarType;
    size: AvatarSize;
    initials?: string;
    disabled?: boolean;
    imageUrl?: string;
    className?: string;
}

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'w-6 h-6 text-[12px]',
  sm: 'w-8 h-8 text-[14px]',
  md: 'w-12 h-12 text-[24px]',
  lg: 'w-16 h-16 text-[30px]',
  xl: 'w-24 h-24 text-[48px]',
};

export const Avatar = ({
    type,
    size,
    initials,
    disabled,
    imageUrl,
    className
}: AvatarProps) => {

    const commonStyles = clsx(
        'flex items-center justify-center font-bold leading-[24px] overflow-hidden',
        sizeClasses[size],
        disabled && 'grayscale cursor-not-allowed',
        className
    );

    const wrapperStyles = clsx(
        'rounded-full focus:outline-none focus:ring-4 focus:ring-[var(--color-avatar-default-border-focus)]',
        sizeClasses[size],
    );

    const bgColor = 'var(--color-purple-500)';

    switch (type) {
        case 'initials':
            return (
                <div className={clsx(commonStyles, wrapperStyles)} style={{ backgroundColor: bgColor, color: 'white' }} tabIndex={0}>
                    {initials}
                </div>
            )
        case 'image':
            return (
                <div className={clsx(commonStyles, wrapperStyles)}>
                    <img
                        src={imageUrl}
                        alt="avatar"
                        className={clsx('object-cover w-full h-full', {
                            grayscale: disabled,
                        })}
                    />
                </div>
            )
        case 'container':
            default:
                return <div className={clsx(commonStyles, wrapperStyles)} style={{ backgroundColor: bgColor }} />
    }
}

export default Avatar