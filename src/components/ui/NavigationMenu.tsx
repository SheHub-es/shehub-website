import { useTranslation } from '@/hooks/useTranslation';

type Layout = 'horizontal' | 'vertical'

const NavigationMenu = () => {

  const { t } = useTranslation();

  const navItems = [
    { key: 'menu.item-1', href: '/collaborators' },
    { key: 'menu.item-2', href: '/mentors' },
    { key: 'menu.item-3', href: '/about' },
    { key: 'menu.item-4', href: '/partners' },
    { key: 'menu.item-5', href: '/contact' },
    
    // Login V1 y V2
    { key: 'menu.loginV1', href: '/auth' },
    { key: 'menu.loginV2', href: '/auth-v2' },
  ];

  return (
    <nav aria-label='Main Navigation'>
      <ul className="list-none flex flex-col gap-6 md:flex-row md:gap-8 md:items-center">
        {navItems.map(({ key, href }) => (
          <li key={key}>
            <a
              href={href}
              className="flex-1 whitespace-nowrap cursor-pointer nav-item text-black hover:text-navigationmenu-hover"
              tabIndex={0}
            >
              {t(key)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavigationMenu
