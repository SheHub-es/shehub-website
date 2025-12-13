'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LinkedInCallbackPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Procesando autenticación de LinkedIn...');

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code');
      const state = searchParams.get('state');
      const error = searchParams.get('error');

      // Verificar si hay error de LinkedIn
      if (error) {
        setStatus('error');
        setMessage(`Error de LinkedIn: ${error}`);
        setTimeout(() => {
          window.location.href = '/auth';
        }, 3000);
        return;
      }

      // Verificar que tenemos el código
      if (!code) {
        setStatus('error');
        setMessage('No se recibió código de autorización');
        setTimeout(() => {
          window.location.href = '/auth';
        }, 3000);
        return;
      }

      // Verificar state para prevenir CSRF
      const savedState = sessionStorage.getItem('linkedin_oauth_state');
      if (state !== savedState) {
        setStatus('error');
        setMessage('Error de seguridad: state no coincide');
        setTimeout(() => {
          window.location.href = '/auth';
        }, 3000);
        return;
      }

      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
        
        // Enviar código al backend
        const response = await fetch(`${apiUrl}/auth/user/oauth/linkedin`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            code,
            redirectUri: `${window.location.origin}/auth/callback/linkedin`
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Error al autenticar con LinkedIn');
        }

        const data = await response.json();
        
        // Guardar token y usuario
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        // Limpiar state
        sessionStorage.removeItem('linkedin_oauth_state');

        setStatus('success');
        setMessage(`¡Bienvenido ${data.user.firstName}!`);
        
        // Redirigir al home
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);

      } catch (error) {
        setStatus('error');
        setMessage(error instanceof Error ? error.message : 'Error al conectar con el servidor');
        setTimeout(() => {
          window.location.href = '/auth';
        }, 3000);
      }
    };

    handleCallback();
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background-light)]">
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
        {status === 'loading' && (
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary)]"></div>
            <p className="text-lg" style={{ color: 'var(--color-foreground)' }}>
              {message}
            </p>
          </div>
        )}

        {status === 'success' && (
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-green-600">{message}</p>
            <p className="text-sm" style={{ color: 'var(--color-neutral-600)' }}>
              Redirigiendo...
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-red-600">{message}</p>
            <p className="text-sm" style={{ color: 'var(--color-neutral-600)' }}>
              Redirigiendo al login...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
