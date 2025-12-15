"use client";


import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper";
import AuthTextV1 from "@/sections/auth/components/AuthTextV1";
import AuthFormV1 from "@/sections/auth/AuthFormV1";

export default function AuthSectionV1() {
  return (
    <SectionWrapper
      className="w-full py-16 px-6 md:px-12 lg:px-20 min-h-screen font-primary"
      style={{ backgroundColor: "var(--color-background)" }}
      innerClassName="flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* LEFT side text */}
      <div className="w-full md:w-1/2 max-w-xl">
        <AuthTextV1 />
      </div>

      {/* RIGHT side form */}
      <div className="w-full md:w-1/2 max-w-lg">
        <AuthFormV1 />
      </div>
    </SectionWrapper>
  );
}



