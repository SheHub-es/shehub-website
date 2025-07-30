import { SheHubLogo } from "@/components/icons/custom/SheHubLogo";
import SectionWrapper from "@/components/layout/SectionWrapper/SectionWrapper";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Toggle } from "@/components/ui/toggle";
import { useLanguage } from "@/hooks/useLanguage";
import { Language } from "@/translations";
import { SearchIcon } from "lucide-react";

export const Navbar = () =>  {

  const { language, setLanguage } = useLanguage();

  const languageOptions = [
      {label: 'ES', value: 'es'},
      {label: 'EN', value: 'en'},
      {label: 'CA', value: 'ca'}
  ]
  
  return (
    <SectionWrapper>
      <div className="w-[1248px] h-[92px] flex justify-between items-center px-[32px] py-[24px] rounded-[24px] bg-white shadow">
        <SheHubLogo/>
        <NavigationMenu/>
        <div className="flex gap-[24px]">
          <SearchIcon/>
          <Toggle
            options={languageOptions}
            selected={language}
            onChange={(value: string) => setLanguage(value as Language)}
          />
        </div>
      </div>
    </SectionWrapper>
    
  )
}

export default Navbar