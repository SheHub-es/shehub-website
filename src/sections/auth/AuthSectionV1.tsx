"use client";

<<<<<<< HEAD
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper";
import AuthTextV1 from "@/sections/auth/elements/AuthTextV1";
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
=======
import PasswordResetModal from '@/sections/auth/components/PasswordResetModal';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import AuthForm from "./components/AuthForm";
import AuthTextV1 from "./components/AuthTextV1";

export default function AuthSectionV1() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [showResetModal, setShowResetModal] = useState(false);

  useEffect(() => {
    if (token) {
      setShowResetModal(true);
    }
  }, [token]);
  return (
    <section className="w-full flex flex-col md:flex-row items-start justify-between py-12 px-6 md:px-12 lg:px-20 gap-12 min-h-screen font-primary"  
    
    style={{ backgroundColor: "var(--color-background-light)" }} >


      {/* LEFT side text section */}

      <div className="w-full md:w-1/2 max-w-xl md:mt-24 md:ml-8 lg:ml-12">
        <AuthTextV1 />
      </div>

      {/* RIGHT side form section */}

      <div className="w-full md:w-1/2 max-w-lg md:mt-8">
        <AuthForm />
      </div>

      {/* Password Reset Modal */}
      <PasswordResetModal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        token={token}
      />
    </section>
  );
}
>>>>>>> f722de59c93f83ea97c42aac72982165ddc7806c
