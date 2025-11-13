import React, { CSSProperties } from "react";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
};

export const SectionWrapper = ({ children, className, id }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`w-full py-10 scroll-mt-[100px] ${className ?? ""}`}
    >
      <div className={`max-w-7xl mx-auto px-6 ${className ?? ""}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper