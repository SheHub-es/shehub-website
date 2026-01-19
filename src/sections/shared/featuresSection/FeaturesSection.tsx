import Button from "@/components/ui/Button";
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper";
import Link from "next/link";
import React from "react";

export type FeatureItem = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type FeaturesSectionProps = {
  id: string;
  title: React.ReactNode;
  description?: string;
  features: FeatureItem[];
  gridCols?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  button?: {
    text: string;
    variant?: "primary-primary" | "secondary-primary" | "secondary-secondary";
    href?: string;
    onClick?: () => void;
  };
  className?: string;
  backgroundClassName?: string;
  layout?: "centered" | "left-aligned";
};

export default function FeaturesSection({
  id,
  title,
  description,
  features,
  gridCols = { mobile: 1, tablet: 2, desktop: 4 },
  button,
  className,
  backgroundClassName = "bg-background",
  layout = "centered",
}: FeaturesSectionProps) {
  // Mapeo de columnas a clases de Tailwind
  const gridColsMap: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  const smGridColsMap: Record<number, string> = {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
  };

  const lgGridColsMap: Record<number, string> = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  };

  const mobileCols = gridCols.mobile || 1;
  const tabletCols = gridCols.tablet || 2;
  const desktopCols = gridCols.desktop || 4;

  const gridClasses = `grid ${gridColsMap[mobileCols] || "grid-cols-1"} ${smGridColsMap[tabletCols] || "sm:grid-cols-2"} ${lgGridColsMap[desktopCols] || "lg:grid-cols-4"} gap-6`;

  const isLeftAligned = layout === "left-aligned";

  return (
    <SectionWrapper
      id={id}
      className={`${backgroundClassName} text-black py-24 ${className || ""}`}
    >
      {isLeftAligned ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-start text-left">
            <h2 className="text-size-800 md:text-size-900 font-bold font-primary leading-line-height-heading-2">
              {title}
            </h2>
          </div>
          {description && (
            <div className="flex flex-col items-start text-left">
              <p className="text-size-400 md:text-size-500 leading-line-height-body-1 font-secondary">
                {description}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <h2 className="text-size-800 md:text-size-900 font-bold font-primary leading-line-height-heading-2">
            {title}
          </h2>

          {description && (
            <p className="text-size-400 md:text-size-500 leading-line-height-body-1 font-secondary max-w-3xl px-4">
              {description}
            </p>
          )}
        </div>
      )}

      <div className={`${gridClasses} ${button ? "mb-12" : ""} ${isLeftAligned ? "max-w-7xl mx-auto px-4" : ""}`}>
        {features.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className={`flex flex-col ${isLeftAligned ? "items-start text-left" : "items-center text-center"} gap-4`}
            >
              <IconComponent className="w-11 h-11 text-black" />
              <div className="flex flex-col gap-2">
                <h3 className="text-heading-400 font-bold text-black font-primary">
                  {item.title}
                </h3>
                <p className="text-body-300 text-black font-secondary">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {button && (
        <div className={`flex ${isLeftAligned ? "justify-start" : "justify-center"} max-w-7xl mx-auto px-4`}>
          {button.href ? (
            <Link href={button.href}>
              <Button
                variant={button.variant || "secondary-secondary"}
                size="sm"
                shape="rounded"
              >
                {button.text}
              </Button>
            </Link>
          ) : (
            <Button
              variant={button.variant || "secondary-secondary"}
              size="sm"
              shape="rounded"
              onClick={button.onClick}
            >
              {button.text}
            </Button>
          )}
        </div>
      )}
    </SectionWrapper>
  );
}
