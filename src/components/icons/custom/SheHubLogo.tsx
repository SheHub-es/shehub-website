import Image from 'next/image'
import Link from 'next/link'

export default function SheHubLogo() {
  return (
    <Link
      href="/"
      scroll={true}
      className="relative w-32 h-32 block"
    >
      <Image
        src="/logo-shehub.png"
        alt="SheHub Logo"
        fill
        priority
        sizes="(max-width: 768px) 100px, 128px"
        className="object-contain"
      />
    </Link>
  )
}
