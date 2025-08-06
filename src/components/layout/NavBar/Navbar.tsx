import { SheHubLogo } from "@/components/icons/custom/SheHubLogo";
import SectionWrapper from "@/components/layout/SectionWrapper/SectionWrapper";
import Button from "@/components/ui/button";
import NavigationMenu from "@/components/ui/navigation-menu";
import Toggle from "@/components/ui/toggle";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/hooks/useTranslation";
import { Language } from "@/translations";

export const Navbar = () =>  {
  
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  const languageOptions = [
      {label: 'ES', value: 'es'},
      {label: 'EN', value: 'en'},
      {label: 'CA', value: 'ca'}
  ]
  
  return (
    <SectionWrapper>
      <div className="w-[1248px] h-[92px] flex justify-between items-center px-[32px] py-[24px] rounded-[24px] bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.08)]">
        <SheHubLogo/>
        <NavigationMenu/>
        <div className="flex items-center gap-[24px]">
          {/* <SearchIcon/> */}
          <Toggle
            options={languageOptions}
            selected={language}
            onChange={(value: string) => setLanguage(value as Language)}
          />
          <Button variant="primary-primary" size="sm" shape="rounded" className="rounded-full min-w-[180px]">
            {t("menu_button.button")}
          </Button>
        </div>
      </div>
    </SectionWrapper>
    
  )
}

export default Navbar