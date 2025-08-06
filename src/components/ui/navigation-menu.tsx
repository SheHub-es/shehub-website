import { useTranslation } from '@/hooks/useTranslation';

const NavigationMenu = () => {

  const { t } = useTranslation();

  const navItems = [
    { key: 'menu.item-1' },
    { key: 'menu.item-2' },
    { key: 'menu.item-3' },
    { key: 'menu.item-4' },
    { key: 'menu.item-5' },
  ];

  return (
    <div className="flex gap-[32px]">
      {navItems.map(({ key }) => (
        <a 
          key={key} 
          className="flex-1 whitespace-nowrap cursor-pointer nav-item hover:text-[var(--color-navigationmenu-hover)] focus:outline-none focus:ring-4 focus:ring-[var(--color-navigationmenu-focus-outline)] focus:rounded-md"
          tabIndex={0}
        >
          {t(key)}
        </a>
      ))}
    </div>
  )
}

export default NavigationMenu;

