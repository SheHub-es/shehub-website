"use client";

import PasswordResetModal from '@/sections/auth/components/PasswordResetModal';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import AuthForm from "./components/AuthForm";

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
    style={{ backgroundColor: "var(--color-background-light)" }}>

      {/* LEFT side text section */}
      <div className="w-full md:w-1/2 max-w-xl md:mt-24 md:ml-8 lg:ml-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[color:var(--color-black)] mb-4 md:mb-12">
          Join a community of
          <br />
          women{" "}
          <span 
            className="bg-clip-text text-transparent" 
            style={{ backgroundImage: "var(--color-gradient-brand)" }}
          >
            shaping the
            <br />
            future of tech
          </span>
        </h1>

        <p className="text-[color:var(--color-black)] text-lg md:text-xl tracking-tight leading-relaxed mt-6">
          Connect with inspiring women in technology, find mentors, collaborate on meaningful projects, and break through barriers together. SheHub is your platform for growth, learning, and success in tech.
        </p>
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