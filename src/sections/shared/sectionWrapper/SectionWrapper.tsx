import React, { CSSProperties } from "react";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  fullWidth?: boolean;
  id?: string;
  style?: CSSProperties;
};


export const SectionWrapper = ({
  children,
  className,
  innerClassName,
  fullWidth = false,
  id,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`w-full py-10 scroll-mt-[100px] ${className ?? ""}`}
    >
      <div
        className={
          fullWidth
            ? `mx-auto ${innerClassName ?? ""}`
            : `max-w-7xl mx-auto px-6 ${innerClassName ?? ""}`
        }
      >
        {children}
      </div>
    </section>
  );
};
