'use client'

import IconChevronDown from '@/components/icons/IconChevronDown'
import { useTranslation } from '@/hooks/useTranslation'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState, type RefObject } from 'react'

const JOIN_SUBITEMS = [
  { key: 'menu.item-1', href: '/collaborators' },
  { key: 'menu.item-2', href: '/mentors' },
  { key: 'menu.item-4', href: '/partners' },
] as const

const FOOTER_FLAT_ITEMS = [
  { key: 'menu.home', href: '/' },
  ...JOIN_SUBITEMS,
  { key: 'menu.item-3', href: '/about' },
  { key: 'menu.item-5', href: '/contact' },
  { key: 'evolution.navLink', href: '/evolution' },
] as const

const HEADER_START = [{ key: 'menu.home', href: '/' }] as const

const HEADER_TRAILING = [
  { key: 'menu.item-3', href: '/about' },
  { key: 'menu.item-5', href: '/contact' },
  { key: 'evolution.navLink', href: '/evolution' },
] as const

/** Design System L1 + frame — only for `<a>` items (not Únete trigger). */
function anchorLinkClassName(isActive: boolean) {
  return cn(
    'nav-menu-text-link relative cursor-pointer',
    isActive && 'nav-menu-text-link--active',
  )
}

/** Same label typography as nav links; no bordered frame (dropdown control). */
function joinTriggerClassName(isActive: boolean) {
  return cn(
    'nav-join-trigger-label whitespace-nowrap cursor-pointer bg-transparent border-0 p-0',
    isActive && 'nav-join-trigger-label--active',
  )
}

function isActiveHref(pathname: string, href: string) {
  if (href === '/evolution') return pathname.startsWith('/evolution')
  return pathname === href
}

function submenuLinkClass(active: boolean) {
  return cn(
    'block py-1.5 md:px-4 md:py-2.5 text-size-300 font-secondary rounded-lg md:rounded-lg transition-colors',
    active
      ? 'text-(--color-primary) md:bg-purple-50'
      : 'text-black hover:text-navigationmenu-hover md:hover:bg-purple-50/80',
  )
}

type NavMenuItem = { key: string; href: string }

function NavMenuItems({ items, pathname }: { items: readonly NavMenuItem[]; pathname: string }) {
  const { t } = useTranslation()
  return items.map(({ key, href }) => (
    <li key={key}>
      <a href={href} className={anchorLinkClassName(isActiveHref(pathname, href))} tabIndex={0}>
        {t(key)}
      </a>
    </li>
  ))
}

function JoinSubmenuItems({ pathname }: { pathname: string }) {
  const { t } = useTranslation()
  return JOIN_SUBITEMS.map(({ key, href }) => {
    const active = pathname === href
    return (
      <li key={key}>
        <a href={href} className={submenuLinkClass(active)} tabIndex={0}>
          {t(key)}
        </a>
      </li>
    )
  })
}

type FooterDesktopJoinProps = {
  pathname: string
  joinOpen: boolean
  setJoinOpen: (value: boolean | ((prev: boolean) => boolean)) => void
  triggerRef: RefObject<HTMLButtonElement | null>
  panelRef: RefObject<HTMLUListElement | null>
  joinGroupActive: boolean
}

function FooterDesktopJoinDropdown({
  pathname,
  joinOpen,
  setJoinOpen,
  triggerRef,
  panelRef,
  joinGroupActive,
}: FooterDesktopJoinProps) {
  const { t } = useTranslation()
  const hintId = 'nav-join-hint-footer'
  const triggerId = 'nav-join-trigger-footer'
  const submenuId = 'nav-join-submenu-footer'

  return (
    <li className="relative">
      <span id={hintId} className="sr-only">
        {t('menu.joinMenuAria')}
      </span>
      <button
        ref={triggerRef}
        type="button"
        className={cn(
          joinTriggerClassName(joinOpen || joinGroupActive),
          'flex w-auto items-center justify-start gap-2 rounded-full px-3 py-1.5 -mx-1',
        )}
        aria-expanded={joinOpen}
        aria-describedby={hintId}
        aria-haspopup="true"
        aria-controls={submenuId}
        id={triggerId}
        onClick={() => setJoinOpen((o) => !o)}
      >
        <span className="whitespace-nowrap">{t('menu.joinMenu')}</span>
        <IconChevronDown
          className={cn(
            'size-4 shrink-0 text-current transition-transform duration-200',
            joinOpen && 'rotate-180',
          )}
          aria-hidden
        />
      </button>
      <ul
        ref={panelRef}
        id={submenuId}
        className={cn(
          joinOpen ? 'flex' : 'hidden',
          'absolute left-0 top-[calc(100%+0.35rem)] z-50 min-w-54 flex-col gap-0 rounded-xl border border-purple-100 bg-white p-1.5 pl-0 shadow-[0_8px_24px_-8px_rgba(55,24,158,0.15)]',
        )}
      >
        <JoinSubmenuItems pathname={pathname} />
      </ul>
    </li>
  )
}

function useJoinDropdown(pathname: string) {
  const [joinOpen, setJoinOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLUListElement>(null)
  const joinGroupActive = JOIN_SUBITEMS.some((item) => pathname === item.href)

  useEffect(() => {
    setJoinOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!joinOpen) return
    const onPointerDown = (e: MouseEvent | PointerEvent) => {
      const node = e.target as Node
      if (triggerRef.current?.contains(node) || panelRef.current?.contains(node)) return
      setJoinOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setJoinOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [joinOpen])

  return { joinOpen, setJoinOpen, triggerRef, panelRef, joinGroupActive }
}

type NavigationMenuProps = {
  placement?: 'header' | 'footer'
}

const NavigationMenu = ({ placement = 'header' }: NavigationMenuProps) => {
  const pathname = usePathname()
  const { t } = useTranslation()
  const join = useJoinDropdown(pathname)

  if (placement === 'footer') {
    return (
      <nav aria-label={t('menu.navAria')}>
        <ul className="list-none flex flex-col gap-6 md:hidden">
          <NavMenuItems items={FOOTER_FLAT_ITEMS} pathname={pathname} />
        </ul>
        <ul className="list-none hidden md:flex md:flex-row md:items-center md:flex-wrap md:gap-8">
          <NavMenuItems items={HEADER_START} pathname={pathname} />
          <FooterDesktopJoinDropdown
            pathname={pathname}
            joinOpen={join.joinOpen}
            setJoinOpen={join.setJoinOpen}
            triggerRef={join.triggerRef}
            panelRef={join.panelRef}
            joinGroupActive={join.joinGroupActive}
          />
          <NavMenuItems items={HEADER_TRAILING} pathname={pathname} />
        </ul>
      </nav>
    )
  }

  return (
    <nav aria-label={t('menu.navAria')}>
      <ul className="list-none flex flex-col gap-6 md:flex-row md:items-center md:flex-wrap md:gap-8">
        <NavMenuItems items={HEADER_START} pathname={pathname} />
        <li className="relative">
          <span id="nav-join-hint-header" className="sr-only">
            {t('menu.joinMenuAria')}
          </span>
          <button
            ref={join.triggerRef}
            type="button"
            className={cn(
              joinTriggerClassName(join.joinOpen || join.joinGroupActive),
              'flex w-full md:w-auto items-center justify-between md:justify-center gap-1 px-0 py-0 md:px-0',
            )}
            aria-expanded={join.joinOpen}
            aria-describedby="nav-join-hint-header"
            aria-haspopup="true"
            aria-controls="nav-join-submenu-header"
            id="nav-join-trigger-header"
            onClick={() => join.setJoinOpen((o) => !o)}
          >
            <span className="whitespace-nowrap">{t('menu.joinMenu')}</span>
            <IconChevronDown
              className={cn(
                'size-6 shrink-0 text-current transition-transform duration-200',
                join.joinOpen && 'rotate-180',
              )}
              aria-hidden
            />
          </button>
          <ul
            ref={join.panelRef}
            id="nav-join-submenu-header"
            className={cn(
              join.joinOpen ? 'flex' : 'hidden',
              'flex-col gap-2 border-l-2 border-purple-200 pl-4 md:absolute md:left-0 md:top-[calc(100%+0.35rem)] md:z-50 md:min-w-54 md:gap-0 md:rounded-xl md:border md:border-purple-100 md:bg-white md:p-1.5 md:pl-0 md:shadow-[0_8px_24px_-8px_rgba(55,24,158,0.15)]',
            )}
          >
            <JoinSubmenuItems pathname={pathname} />
          </ul>
        </li>
        <NavMenuItems items={HEADER_TRAILING} pathname={pathname} />
      </ul>
    </nav>
  )
}

export default NavigationMenu
