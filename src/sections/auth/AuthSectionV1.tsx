"use client";

import AuthFormV1 from "./components/AuthForm";
import AuthTextV1 from "./components/AuthTextV1";

export default function AuthSectionV1() {
  return (
    <section className="w-full flex flex-col md:flex-row items-start justify-between py-12 px-6 md:px-12 lg:px-20 gap-12 min-h-screen font-primary"  
    
    style={{ backgroundColor: "var(--color-background-light)" }} >


      {/* LEFT side text section */}

      <div className="w-full md:w-1/2 max-w-xl md:mt-32">
        <AuthTextV1 />
      </div>

      {/* RIGHT side form section */}

      <div className="w-full md:w-1/2 max-w-lg md:mt-8">
        <AuthFormV1 />
      </div>
    </section>
  );
}