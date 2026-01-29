'use client';

import logoShehub from '@/assets/images/logos/sheHub/logo_shehub.png';
import { usePasswordReset } from '@/hooks/usePasswordReset';
import { useTranslation } from '@/hooks/useTranslation';
import { Eye, EyeOff, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface PasswordResetModalProps {
  isOpen: boolean;
  onClose: () => void;
  token?: string | null; 
}

export default function PasswordResetModal({ isOpen, onClose, token }: PasswordResetModalProps) {
  const { t } = useTranslation();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const {
    // Forgot Password
    forgotEmail,
    setForgotEmail,
    forgotLoading,
    forgotMessage,
    forgotType,
    handleForgotPassword,
    
    // Reset Password
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    resetLoading,
    resetMessage,
    resetType,
    handleResetPassword,
  } = usePasswordReset();

  // Auto-submit cuando viene con token válido
  useEffect(() => {
    if (token && isOpen) {
      // Validar token al abrir
      validateToken(token);
    }
  }, [token, isOpen]);

  const validateToken = async (tokenToValidate: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
      const response = await fetch(
        `${apiUrl}/auth/user/password-reset/validate?token=${tokenToValidate}`,
        { method: 'GET' }
      );
      
      if (!response.ok) {
        alert(t('passwordReset.error.invalidToken'));
        onClose();
      }
    } catch {
      alert(t('passwordReset.error.validateToken'));
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (token) {
      await handleResetPassword(token);
    } else {
      await handleForgotPassword(e);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--color-neutral-500)] hover:text-[var(--color-neutral-700)] transition-colors"
          aria-label={t('passwordReset.modal.close')}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src={logoShehub}
            alt="SheHub Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Título dinámico */}
        <h3 className="text-2xl font-bold text-center mb-2" style={{ color: 'var(--color-foreground)' }}>
          {token ? t('passwordReset.reset.title') : t('passwordReset.forgot.title')}
        </h3>
        
        <p className="text-sm text-center mb-6" style={{ color: 'var(--color-neutral-600)' }}>
          {token ? t('passwordReset.reset.description') : t('passwordReset.forgot.description')}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!token ? (
            /* ===== FORGOT PASSWORD FORM ===== */
            <>
              <div>
                <label htmlFor="forgot-email" className="input-label">
                  {t('passwordReset.forgot.email.label')}
                </label>
                <input
                  id="forgot-email"
                  type="email"
                  placeholder={t('passwordReset.forgot.email.placeholder')}
                  className="input-base"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                  disabled={forgotLoading}
                />
              </div>

              {forgotMessage && (
                <div
                  className={`p-3 rounded-lg text-sm ${
                    forgotType === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {forgotMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={forgotLoading}
                className="w-full py-2.5 rounded-lg font-bold text-base transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-white)',
                }}
              >
                {forgotLoading ? t('passwordReset.forgot.button.loading') : t('passwordReset.forgot.button.submit')}
              </button>
            </>
          ) : (
            /* ===== RESET PASSWORD FORM ===== */
            <>
              <div>
                <label htmlFor="new-password" className="input-label">
                  {t('passwordReset.reset.newPassword.label')}
                </label>
                <div className="relative">
                  <input
                    id="new-password"
                    type={showNewPassword ? 'text' : 'password'}
                    placeholder={t('passwordReset.reset.newPassword.placeholder')}
                    className="input-base pr-12"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    disabled={resetLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-500)] hover:text-neutral-700"
                    aria-label={showNewPassword ? t('passwordReset.a11y.hidePassword') : t('passwordReset.a11y.showPassword')}
                  >
                    {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirm-password" className="input-label">
                  {t('passwordReset.reset.confirmPassword.label')}
                </label>
                <div className="relative">
                  <input
                    id="confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder={t('passwordReset.reset.confirmPassword.placeholder')}
                    className="input-base pr-12"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    disabled={resetLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-500)] hover:text-neutral-700"
                    aria-label={showConfirmPassword ? t('passwordReset.a11y.hidePassword') : t('passwordReset.a11y.showPassword')}
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {resetMessage && (
                <div
                  className={`p-3 rounded-lg text-sm ${
                    resetType === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {resetMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={resetLoading}
                className="w-full py-2.5 rounded-lg font-bold text-base transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-white)',
                }}
              >
                {resetLoading ? t('passwordReset.reset.button.loading') : t('passwordReset.reset.button.submit')}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}