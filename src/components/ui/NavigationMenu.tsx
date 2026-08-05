'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const JOIN_SUBITEMS = [
  { key: 'menu.item-1', href: '/collaborators' },
  { key: 'menu.item-2', href: '/mentors' },
  { key: 'menu.item-4', href: '/partners' },
] as const

/** Header and footer desktop — same flat list as `main`. */
const MAIN_NAV_ITEMS = [
  { key: 'menu.item-1', href: '/collaborators', hintKey: 'menu.item-1-hint' },
  { key: 'menu.item-2', href: '/mentors', hintKey: 'menu.item-2-hint' },
  { key: 'menu.item-3', href: '/about', hintKey: 'menu.item-3-hint' },
  { key: 'menu.item-4', href: '/partners', hintKey: 'menu.item-4-hint' },
  { key: 'menu.item-5', href: '/contact', hintKey: 'menu.item-5-hint' },
] as const

/** Footer mobile only: join links + about/contact + recorrido (no inicio). */
const FOOTER_MOBILE_ITEMS = [
  ...JOIN_SUBITEMS,
  { key: 'menu.item-3', href: '/about' },
  { key: 'menu.item-5', href: '/contact' },
  { key: 'evolution.navLink', href: '/evolution' },
] as const

function isActiveHref(pathname: string, href: string) {
  if (href === '/evolution') return pathname.startsWith('/evolution')
  return pathname === href
}

function mainNavLinkClassName(isActive: boolean) {
  return cn(
    'flex-1 whitespace-nowrap cursor-pointer nav-item hover:text-navigationmenu-hover',
    isActive ? 'text-purple-700' : 'text-black',
  )
}

type NavigationMenuProps = {
  placement?: 'header' | 'footer'
}

const NavigationMenu = ({ placement = 'header' }: NavigationMenuProps) => {
  const pathname = usePathname()
  const { t } = useTranslation()

  if (placement === 'footer') {
    return (
      <nav aria-label={t('menu.navAria')}>
        <ul className="list-none flex flex-col gap-6 md:hidden">
          {FOOTER_MOBILE_ITEMS.map(({ key, href }) => {
            const isActive = isActiveHref(pathname, href)
            return (
              <li key={key}>
                <a href={href} className={mainNavLinkClassName(isActive)} tabIndex={0}>
                  {t(key)}
                </a>
              </li>
            )
          })}
        </ul>
        <ul className="list-none hidden md:flex md:flex-row md:gap-8 md:items-center">
          {MAIN_NAV_ITEMS.map(({ key, href }) => {
            const isActive = pathname === href
            return (
              <li key={key}>
                <a href={href} className={mainNavLinkClassName(isActive)} tabIndex={0}>
                  {t(key)}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  return (
    <nav aria-label={t('menu.navAria')}>
      <ul className="list-none flex flex-col gap-6 md:flex-row md:gap-8 md:items-center">
        {MAIN_NAV_ITEMS.map(({ key, href, hintKey }) => {
          const isActive = pathname === href
          return (
            <li key={key}>
              <a
                href={href}
                className={mainNavLinkClassName(isActive)}
                tabIndex={0}
                aria-label={t(key)}
                title={t(hintKey)}
              >
                {t(key)}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavigationMenu
