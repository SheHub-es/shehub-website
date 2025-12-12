"use client";

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