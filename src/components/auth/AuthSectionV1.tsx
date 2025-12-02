"use client";

import AuthTextV1 from "./elements/AuthTextV1";
import AuthFormV1 from "./AuthFormV1";

export default function AuthSectionV1() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-12 lg:px-20 gap-12 min-h-screen font-primary"  
    
    style={{ backgroundColor: "var(--color-background)" }} >


      {/* LEFT side text section */}

      <div className="w-full md:w-1/2 max-w-xl">
        <AuthTextV1 />
      </div>

      {/* RIGHT side form section */}

      <div className="w-full md:w-1/2 max-w-lg">
        <AuthFormV1 />
      </div>
    </section>
  );
}


