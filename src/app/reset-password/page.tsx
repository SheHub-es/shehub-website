'use client';

import PasswordResetModal from '@/sections/auth/components/PasswordResetModal';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (token) {
      setIsOpen(true);
    }
  }, [token]);

  const handleClose = () => {
    setIsOpen(false);
    // Redirigir al login después de cerrar
    window.location.href = '/auth'; // Ajusta según tu ruta de login
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-background-light)]">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
          <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
            Token no válido
          </h1>
          <p className="mb-6" style={{ color: 'var(--color-neutral-600)' }}>
            No se encontró un token válido en la URL.
          </p>
          <a
            href="/auth"
            className="inline-block px-6 py-2.5 rounded-lg font-bold text-base transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)' }}
          >
            Ir al Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background-light)]">
      <PasswordResetModal
        isOpen={isOpen}
        onClose={handleClose}
        token={token}
      />
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
}