import SectionWrapper from "@/components/layout/SectionWrapper/SectionWrapper";
import { Toggle } from "@/components/ui/toggle";
import { useLanguage } from "@/hooks/useLanguage";
import { Language } from "@/translations";
import { SearchIcon } from "lucide-react";

export const Navbar = () =>  {

  const { language, setLanguage } = useLanguage();
  
  return (
    <SectionWrapper>
        <SearchIcon/>
        <Toggle
          options={[
            {label: 'ES', value: 'es'},
            {label: 'EN', value: 'en'},
            {label: 'CA', value: 'ca'}
          ]}
          selected={language}
          onChange={(value: string) => setLanguage(value as Language)}
        />
    </SectionWrapper>
    
  )
}

export default Navbar