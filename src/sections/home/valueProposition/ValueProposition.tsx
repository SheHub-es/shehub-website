"use client";

import IconEarth from "@/components/icons/IconEarth";
import IconGift from "@/components/icons/IconGift";
import IconHeartHandshake from "@/components/icons/IconHeartHandshake";
import IconMapPinHouse from "@/components/icons/IconMapPinHouse";
import IconRocket from "@/components/icons/IconRocket";
import IconUsers from "@/components/icons/IconUsers";
import { Card } from "@/components/ui/Card";
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper";
import { useTranslation } from "@/hooks/useTranslation";

export const ValueProposition = () => {
  const { t } = useTranslation();
  const valueProps = [
    { titleKey: "home.valueProp.realProjects.title", descKey: "home.valueProp.realProjects.desc", icon: IconRocket },
    { titleKey: "home.valueProp.crossFunctional.title", descKey: "home.valueProp.crossFunctional.desc", icon: IconUsers },
    { titleKey: "home.valueProp.mentorship.title", descKey: "home.valueProp.mentorship.desc", icon: IconHeartHandshake },
    { titleKey: "home.valueProp.remote.title", descKey: "home.valueProp.remote.desc", icon: IconMapPinHouse },
    { titleKey: "home.valueProp.free.title", descKey: "home.valueProp.free.desc", icon: IconGift },
    { titleKey: "home.valueProp.international.title", descKey: "home.valueProp.international.desc", icon: IconEarth },
  ];

  return (
    <SectionWrapper
      id="value-proposition"
      className="bg-purple-100 text-black py-16"
    >
      <div className="flex flex-col items-center text-center mb-20 gap-4">
        <h2 className="text-size-800 md:text-size-900 font-bold font-primary leading-line-height-heading-2">
          {(() => {
            const full = t("home.valueProp.title");
            const words = full.trim().split(/\s+/);
            const last = words.pop() ?? '';
            const rest = words.join(' ');
            return rest ? <>{rest} <span className="text-primary">{last}</span></> : <span className="text-primary">{last}</span>;
          })()}
        </h2>

        <p className="text-size-400 md:text-size-500 leading-line-height-body-1 font-secondary max-w-185">
          {t("home.valueProp.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {valueProps.map((item, index) => (
          <div
            key={index}
            className="flex justify-center w-full"
          >
            <Card
              type="nonClickableWithIcon"
              icon={item.icon}
              title={t(item.titleKey)}
              description={t(item.descKey)}
              color="white"
              radius="lg"
              className="
              /* --- MOBILE FIX harcoded --- */
              w-full
              !max-w-[300px]
              !h-auto
              !p-8

              /* --- DESKTOP harcoded  --- */
              lg:!max-w-[24.375rem]
              lg:!h-[18rem]
              lg:!p-10"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ValueProposition
