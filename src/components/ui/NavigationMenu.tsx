'use client'
import { useTranslation } from '@/hooks/useTranslation';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type Layout = 'horizontal' | 'vertical'

const NavigationMenu = () => {
  const pathname = usePathname();
  const { t } = useTranslation();

  const navItems = [
    { key: 'menu.item-1', href: '/collaborators' },
    { key: 'menu.item-2', href: '/mentors' },
    { key: 'menu.item-3', href: '/about' },
    { key: 'menu.item-4', href: '/partners' },
    { key: 'menu.item-5', href: '/contact' },
  ];

  return (
    <nav aria-label='Main Navigation'>
      <ul className="list-none flex flex-col gap-6 md:flex-row md:gap-8 md:items-center">
        {navItems.map(({ key, href }) => {
          const isActive = pathname === href;
          return (
            <li key={key}>
              <a
                href={href}
                className={cn(
                  "flex-1 whitespace-nowrap cursor-pointer nav-item hover:text-navigationmenu-hover",
                  isActive 
                    ? "text-[var(--color-primary)]" 
                    : "text-black"
                )}
                tabIndex={0}
              >
                {t(key)}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default NavigationMenu
