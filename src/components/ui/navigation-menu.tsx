import { useTranslation } from '@/hooks/useTranslation';

const NavigationMenu = () => {

  const { t } = useTranslation();

  const navItems = [
    { key: 'menu.item-1', href: '#collaborators' },
    { key: 'menu.item-2', href: '#mentors' },
    { key: 'menu.item-3', href: '#about' },
    { key: 'menu.item-4', href: '#partners' },
    { key: 'menu.item-5', href: '#contact' },
  ];

  return (
    <div className="flex gap-[32px]">
      {navItems.map(({ key, href }) => (
        <a 
          key={key} 
          href={href}
          className="flex-1 whitespace-nowrap cursor-pointer nav-item text-black hover:text-[var(--color-navigationmenu-hover)]"
          tabIndex={0}
        >
          {t(key)}
        </a>
      ))}
    </div>
  )
}

export default NavigationMenu
