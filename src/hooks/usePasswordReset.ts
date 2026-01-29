import { useLanguage } from '@/providers/LanguageProvider';
import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';

interface UsePasswordResetReturn {
  // Forgot Password (Step 1)
  forgotEmail: string;
  setForgotEmail: (email: string) => void;
  forgotLoading: boolean;
  forgotMessage: string;
  forgotType: 'success' | 'error';
  handleForgotPassword: (e: React.FormEvent) => Promise<void>;
  
  // Reset Password (Step 2 - with token)
  newPassword: string;
  setNewPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (password: string) => void;
  resetLoading: boolean;
  resetMessage: string;
  resetType: 'success' | 'error';
  handleResetPassword: (token: string) => Promise<void>;
}

export const usePasswordReset = (): UsePasswordResetReturn => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  // Forgot Password State
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotMessage, setForgotMessage] = useState('');
  const [forgotType, setForgotType] = useState<'success' | 'error'>('success');

  // Reset Password State
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState('');
  const [resetType, setResetType] = useState<'success' | 'error'>('success');

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotLoading(true);
    setForgotMessage('');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
      
      const response = await fetch(`${apiUrl}/auth/user/password-reset/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': language,
        },
        body: JSON.stringify({ email: forgotEmail }),
      });

      const message = await response.text();
      setForgotMessage(message);
      setForgotType('success');

    } catch {
      setForgotMessage(t('passwordReset.forgot.error.send'));
      setForgotType('error');
    } finally {
      setForgotLoading(false);
    }
  };

  const handleResetPassword = async (token: string) => {
    if (newPassword !== confirmPassword) {
      setResetMessage(t('passwordReset.reset.error.mismatch'));
      setResetType('error');
      return;
    }

    if (newPassword.length < 8) {
      setResetMessage(t('passwordReset.reset.error.length'));
      setResetType('error');
      return;
    }

    setResetLoading(true);
    setResetMessage('');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
      
      const response = await fetch(`${apiUrl}/auth/user/password-reset/confirm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': language,
        },
        body: JSON.stringify({
          token,
          newPassword,
          confirmPassword,
        }),
      });

      if (!response.ok) {
        throw new Error(t('passwordReset.reset.error.failed'));
      }

      const message = await response.text();
      setResetMessage(message);
      setResetType('success');

      // Redirigir al login después de 2 segundos
      setTimeout(() => {
        window.location.href = '/auth';
      }, 2000);

    } catch (error) {
      setResetMessage(error instanceof Error ? error.message : t('passwordReset.reset.error.failed'));
      setResetType('error');
    } finally {
      setResetLoading(false);
    }
  };

  return {
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
  };
};