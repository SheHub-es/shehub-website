import { useTranslation } from '@/hooks/useTranslation';

export const NavigationMenu = () => {

  const { t } = useTranslation();

  return (
    <div className="flex w-[489px] h-[44px] gap-[32px]">
      <div className="flex-1">{t("menu.item-1")}</div>
      <div className="flex-1">{t("menu.item-2")}</div>
      <div className="flex-1">{t("menu.item-3")}</div>
      <div className="flex-1">{t("menu.item-4")}</div>
      <div className="flex-1">{t("menu.item-5")}</div>
    </div>
  )
}

