import SheHubLogoImg from '@/assets/images/logos/sheHub/logo_shehub.png'
import Image from 'next/image'
import Link from 'next/link'

type SheHubLogoProps = {
  'aria-label'?: string
  title?: string
}

export default function SheHubLogo({ 'aria-label': ariaLabel, title }: SheHubLogoProps = {}) {
  return (
    <Link
      href="/"
      scroll={true}
      aria-label={ariaLabel}
      title={title}
      className="relative w-32 h-32 block"
    >
      <Image
        src={SheHubLogoImg}
        alt="SheHub Logo"
        fill
        priority
        loading="eager"
        sizes="(max-width: 768px) 100px, 128px"
        className="object-contain"
      />
    </Link>
  )
}
