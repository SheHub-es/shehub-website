"use client";

import IconHandHeart from "@/components/icons/IconHandHeart";
import IconMessageHeart from "@/components/icons/IconMessageHeart";
import IconWallet from "@/components/icons/IconWallet";
import { Card } from "@/components/ui/Card";
import { useTranslation } from "@/hooks/useTranslation";
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper";

export const Operation = () => {
  const { t } = useTranslation();
  const operationItems = [
    {
      titleKey: "about.operation.volunteer.title",
      descKey: "about.operation.volunteer.desc",
      icon: IconHandHeart,
    },
    {
      titleKey: "about.operation.funding.title",
      descKey: "about.operation.funding.desc",
      icon: IconWallet,
    },
    {
      titleKey: "about.operation.decisions.title",
      descKey: "about.operation.decisions.desc",
      icon: IconMessageHeart,
    },
  ];

  return (
    <SectionWrapper
      id="operation"
      aria-labelledby="operation-heading"
      className="bg-white text-black py-16"
    >
      <div className="flex flex-col items-center text-center mb-20 gap-4">
        <h2
          id="operation-heading"
          className="text-size-800 md:text-size-900 font-bold font-primary leading-line-height-heading-2"
        >
          {(() => {
            const full = t("about.operation.title");
            const words = full.trim().split(/\s+/);
            const last = words.pop() ?? "";
            const rest = words.join(" ");
            return rest ? (
              <>
                {rest} <span className="text-primary">{last}</span>
              </>
            ) : (
              <span className="text-primary">{last}</span>
            );
          })()}
        </h2>

        <p className="text-size-400 md:text-size-500 leading-line-height-body-1 font-secondary max-w-185">
          {t("about.operation.subtitle")}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {operationItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-center w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <Card
              type="nonClickableWithIcon"
              icon={item.icon}
              title={t(item.titleKey)}
              description={t(item.descKey)}
              color="lightPurple"
              radius="lg"
              className="
              w-[18rem]! h-89! p-8! gap-6!
              lg:w-97.5! lg:h-72! lg:p-10!
              items-center lg:items-start
              [&_h3]:w-full [&_h3]:text-center lg:[&_h3]:text-left
              [&_p]:w-full
              [&_p]:text-center lg:[&_p]:text-left"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Operation;
