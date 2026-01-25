'use client'
import SheHubLogo from "@/components/icons/custom/SheHubLogo";
import IconClose from "@/components/icons/IconClose";
import IconMenu from "@/components/icons/IconMenu";
import Button from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import NavigationMenu from "@/components/ui/NavigationMenu";
import Toggle from "@/components/ui/Toggle";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "@/hooks/useTranslation";
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper";
import { Language } from "@/translations";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {

  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const languageOptions = [
    { label: 'ES', value: 'es' },
    { label: 'EN', value: 'en' },
    { label: 'CA', value: 'ca' }
  ]

  return (
    <header className="sticky top-0 z-50">
      <SectionWrapper className="py-0">
        <div className={`sticky top-0 bg-white mt-6 md:mt-10 md:static w-full max-w-[1248px] md:h-[92px] mx-auto flex flex-col md:flex-row justify-start md:justify-between md:items-center gap-4 md:gap-6 px-8 md:py-6 md:shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] md:rounded-3xl ${open ? 'h-[568px] shadow-none rounded-none' : 'h-[75px] shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] rounded-3xl'}`}>
          <div className="h-[75px] flex items-center justify-between md:hidden">
            <div aria-label="Shehub" className={`flex items-center justify-start transition-all duration-300 ${open ? 'w-[145px]' : 'w-[135px]'}`}>
              <div className="w-full">
                <SheHubLogo />
              </div>
            </div>
            <Icon
              icon={open ? IconClose : IconMenu}
              interactive
              size="md"
              aria-label={open ? (t('close') ?? 'Close menu') : (t('open') ?? 'Open menu')}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(prev => !prev)}
              className="md:hidden"
            />
            </div>

          <div className="hidden md:flex w-full items-center justify-between">
            <div aria-label="SheHub" className="flex items-center">
              <SheHubLogo />
            </div>
            <div className="hidden md:flex md:flex-1 md:justify-center">
              <NavigationMenu />
            </div>
            <div className="hidden md:flex items-center md:gap-6">
              <Toggle
                options={languageOptions}
                selected={language}
                onChange={(value: string) => setLanguage(value as Language)}
              />
              <Link href="/auth">
                <Button 
                  variant="gradient" 
                  size="sm" 
                  shape="rounded" 
                  className="rounded-full min-w-[180px]"
                >
                  {t("menu_button.button")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Drawer*/}
          {open && (
            <div className="md:hidden flex flex-1 flex-col gap-[31px]" id="mobile-menu">
              <nav onClick={() => setOpen(false)}>
                <NavigationMenu />
              </nav>
              <div className="inline-flex w-auto mb-2">
                <Toggle
                  options={languageOptions}
                  selected={language}
                  onChange={(value: string) => setLanguage(value as Language)}
                />
              </div>
              <Link href="/auth" onClick={() => setOpen(false)}>
                <Button
                  variant="gradient"
                  size="lg"
                  shape="rounded"
                >
                  {t('menu_button.button')}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </SectionWrapper>
    </header>
  )
}

export default Navbar