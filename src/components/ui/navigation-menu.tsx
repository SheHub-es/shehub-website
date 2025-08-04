import { useTranslation } from '@/hooks/useTranslation';

const NavigationMenu = () => {

  const { t } = useTranslation();

  return (
    <div className="flex gap-[32px]">
      <div className="flex-1 whitespace-nowrap cursor-pointer">{t("menu.item-1")}</div>
      <div className="flex-1 whitespace-nowrap cursor-pointer">{t("menu.item-2")}</div>
      <div className="flex-1 whitespace-nowrap cursor-pointer">{t("menu.item-3")}</div>
      <div className="flex-1 whitespace-nowrap cursor-pointer">{t("menu.item-4")}</div>
      <div className="flex-1 whitespace-nowrap cursor-pointer">{t("menu.item-5")}</div>
    </div>
  )
}

export default NavigationMenu;

