'use client'
import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type Layout = 'horizontal' | 'vertical'

const NavigationMenu = () => {
  const pathname = usePathname();
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { key: 'menu.item-1', href: '/collaborators' },
    { key: 'menu.item-2', href: '/mentors' },
    { key: 'menu.item-3', href: '/about' },
    { key: 'menu.item-4', href: '/partners' },
    { key: 'menu.item-5', href: '/contact' },
  ];

  const authItems = [
    { key: 'menu.loginV1', href: '/auth', label: 'Login V1' },
    { key: 'menu.loginV2', href: '/auth-v2', label: 'Login V2' },
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
        
        {/* Auth Dropdown */}
        <li 
          className="relative"
          onMouseEnter={() => setIsAuthDropdownOpen(true)}
          onMouseLeave={() => setIsAuthDropdownOpen(false)}
        >
          <button
            type="button"
            className="flex items-center gap-1 whitespace-nowrap cursor-pointer nav-item text-black hover:text-navigationmenu-hover py-2 bg-transparent border-none"
            onClick={() => setIsAuthDropdownOpen(!isAuthDropdownOpen)}
          >
            Auth
            <svg 
              className={`w-4 h-4 transition-transform ${isAuthDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isAuthDropdownOpen && (
            <ul className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 min-w-[150px] z-50 border border-gray-200">
              {authItems.map(({ key, href, label }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="block px-5 py-3 text-black hover:bg-gray-100 hover:text-navigationmenu-hover transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default NavigationMenu
