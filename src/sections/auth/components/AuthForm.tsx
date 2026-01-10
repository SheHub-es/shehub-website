"use client";

import GoogleLogo from '@/components/icons/custom/GoogleLogo';
import LinkedinLogo from '@/components/icons/custom/LinkedinLogo';
import { useLoginForm } from "@/hooks/useLoginForm";
import { useRegisterForm } from "@/hooks/useRegisterForm";
import { useTranslation } from "@/hooks/useTranslation";
import { PasswordMatchIndicator } from '@/sections/auth/components/PasswordMatchIndicator';
import PasswordResetModal from '@/sections/auth/components/PasswordResetModal';
import { PasswordStrengthIndicator } from '@/sections/auth/components/PasswordStrengthIndicator';
import type { GoogleAuthError, GoogleAuthResponse } from '@/types/google-oauth';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from "react";
import Popup from "./Popup";

export default function AuthForm() {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(false); 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPasswordResetModal, setShowPasswordResetModal] = useState(false);
  
  // Google OAuth state
  const [googlePopupMessage, setGooglePopupMessage] = useState("");
  const [googlePopupType, setGooglePopupType] = useState<"success" | "error">("success");
  const [showGooglePopup, setShowGooglePopup] = useState(false);
  
  const loginHook = useLoginForm();
  const registerHook = useRegisterForm();

  const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) {
      setGooglePopupMessage("Google login failed - no credential received");
      setGooglePopupType("error");
      setShowGooglePopup(true);
      return;
    }

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
      
      const response = await fetch(`${apiUrl}/auth/user/oauth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken: credentialResponse.credential }),
      });

      if (!response.ok) {
        const errorData: GoogleAuthError = await response.json();
        const errorMessage = errorData.message || errorData.error || "Google authentication failed";
        setGooglePopupMessage(errorMessage);
        setGooglePopupType("error");
        setShowGooglePopup(true);
        return;
      }

      const data: GoogleAuthResponse = await response.json();
      
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      const successMessage = data.message || `Welcome ${data.user.firstName}!`;
      setGooglePopupMessage(successMessage);
      setGooglePopupType("success");
      setShowGooglePopup(true);

      setTimeout(() => {
        window.location.href = "/";
      }, 1500);

    } catch {
      setGooglePopupMessage("Connection error. Check that the server is active.");
      setGooglePopupType("error");
      setShowGooglePopup(true);
    }
  };

  const handleGoogleError = () => {
    setGooglePopupMessage("Google authentication cancelled or failed");
    setGooglePopupType("error");
    setShowGooglePopup(true);
  };

  const handleLinkedInLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID;
    const redirectUri = encodeURIComponent(
      process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URI || 
      `${window.location.origin}/auth/linkedin/callback`
    );
    const state = Math.random().toString(36).substring(7);

    if (!clientId) {
      console.error('LinkedIn Client ID not configured in environment variables');
      setGooglePopupMessage("LinkedIn authentication not configured");
      setGooglePopupType("error");
      setShowGooglePopup(true);
      return;
    }

    // Guardar state para validar después
    sessionStorage.setItem('linkedin_oauth_state', state);

    // Redirigir a LinkedIn OAuth
    window.location.href =
      `https://www.linkedin.com/oauth/v2/authorization` +
      `?response_type=code` +
      `&client_id=${clientId}` +
      `&redirect_uri=${redirectUri}` +
      `&state=${state}` +
      `&scope=openid%20profile%20email`;
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-2xl p-6 font-primary">
      
      {/* Toggle between Login and Sign Up */}
      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => setIsLogin(true)}
          className={`flex-1 py-2.5 rounded-lg font-bold text-base transition-all border-2 active:scale-[0.98] ${
            isLogin 
              ? 'border-[var(--color-primary)] bg-gray-50' 
              : 'border-[var(--color-neutral-300)] bg-white hover:bg-gray-50'
          }`}
          style={{ color: "var(--color-foreground)" }}
        >
          {t('auth.toggle.login')}
        </button>
        <button
          type="button"
          onClick={() => setIsLogin(false)}
          className={`flex-1 py-2.5 rounded-lg font-bold text-base transition-all border-2 active:scale-[0.98] ${
            !isLogin 
              ? 'border-[var(--color-primary)] bg-gray-50' 
              : 'border-[var(--color-neutral-300)] bg-white hover:bg-gray-50'
          }`}
          style={{ color: "var(--color-foreground)" }}
        >
          {t('auth.toggle.signup')}
        </button>
      </div>

      <form onSubmit={isLogin ? loginHook.handleSubmit : registerHook.handleSubmit} className="space-y-2.5">
        {isLogin ? (
          /* Login Form */
          <>
            <div>
              <label htmlFor="login-email" className="input-label">{t('auth.field.email')}</label>
              <input 
                id="login-email" 
                type="email" 
                placeholder={t('auth.field.email.placeholder')}
                name="email" 
                className="input-base"
                value={loginHook.form.email}
                onChange={loginHook.handleChange}
              />
            </div>

            <div>
              <label htmlFor="login-password" className="input-label">{t('auth.field.password')}</label>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t('auth.field.password.placeholder')}
                  name="password"
                  className="input-base pr-12"
                  value={loginHook.form.password}
                  onChange={loginHook.handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-500)] hover:text-[var(--color-neutral-700)] transition-colors"
                  aria-label={showPassword ? t('auth.a11y.hidePassword') : t('auth.a11y.showPassword')}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowPasswordResetModal(true)}
                className="text-sm font-medium hover:underline transition-colors"
                style={{ color: 'var(--color-primary)' }}
              >
                {t('auth.button.forgotPassword')}
              </button>
            </div>

            <label className="flex items-center gap-2 text-sm cursor-pointer pt-1" style={{ color: "var(--color-neutral-700)" }}>
              <input 
                type="checkbox" 
                name="acceptTerms" 
                checked={loginHook.form.acceptTerms}
                onChange={loginHook.handleChange}
                className="w-4 h-4 rounded border-[var(--color-neutral-300)] checked:bg-[var(--color-primary)]" 
              />
              {t('auth.checkbox.terms')}{" "}
              <a href="/privacy" className="font-semibold hover:underline" style={{ color: "var(--color-primary)" }}>{t('auth.checkbox.terms.link')}</a>
            </label>

            <button
              type="submit"
              disabled={loginHook.isLoading}
              className="w-full py-2.5 rounded-lg font-bold text-base transition-all hover:opacity-90 active:scale-[0.98] mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: "var(--color-primary)", color: "var(--color-white)" }}
            >
              {loginHook.isLoading ? t('auth.button.login.loading') : t('auth.button.login')}
            </button>
          </>
        ) : (
          /* Register Form */
          <>
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="input-label">{t('auth.field.firstName')}</label>
                <input 
                  id="firstName" 
                  type="text" 
                  placeholder={t('auth.field.firstName.placeholder')}
                  name="firstName" 
                  className="input-base" 
                  value={registerHook.form.firstName} 
                  onChange={registerHook.handleChange} 
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="input-label">{t('auth.field.lastName')}</label>
                <input 
                  id="lastName" 
                  type="text" 
                  placeholder={t('auth.field.lastName.placeholder')}
                  name="lastName" 
                  className="input-base" 
                  value={registerHook.form.lastName} 
                  onChange={registerHook.handleChange} 
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="input-label">{t('auth.field.email')}</label>
              <input 
                id="email" 
                type="email" 
                placeholder={t('auth.field.email.placeholder')}
                name="email" 
                className="input-base" 
                value={registerHook.form.email} 
                onChange={registerHook.handleChange} 
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="password" className="input-label">{t('auth.field.password')}</label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t('auth.field.password.placeholder')}
                    name="password"
                    className="input-base pr-12"
                    value={registerHook.form.password}
                    onChange={registerHook.handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-500)] hover:text-[var(--color-neutral-700)] transition-colors"
                    aria-label={showPassword ? t('auth.a11y.hidePassword') : t('auth.a11y.showPassword')}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <PasswordStrengthIndicator password={registerHook.form.password} />
              </div>
              
              <div className="flex-1">
                <label htmlFor="confirmPassword" className="input-label">{t('auth.field.confirmPassword')}</label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder={t('auth.field.confirmPassword.placeholder')}
                    name="confirmPassword"
                    className="input-base pr-12"
                    value={registerHook.form.confirmPassword}
                    onChange={registerHook.handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-500)] hover:text-[var(--color-neutral-700)] transition-colors"
                    aria-label={showConfirmPassword ? t('auth.a11y.hidePassword') : t('auth.a11y.showPassword')}
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <PasswordMatchIndicator 
                  password={registerHook.form.password} 
                  confirmPassword={registerHook.form.confirmPassword} 
                />
              </div>
            </div>

            <div>
              <label htmlFor="desiredRole" className="input-label">{t('auth.field.desiredRole')}</label>
              <select 
                id="desiredRole" 
                name="desiredRole" 
                className="input-base" 
                value={registerHook.form.desiredRole} 
                onChange={registerHook.handleChange}
              >
                <option value="">{t('auth.field.desiredRole.placeholder')}</option>
                <option value="Miembro">{t('auth.field.desiredRole.option.miembro')}</option>
                <option value="Mentora">{t('auth.field.desiredRole.option.mentora')}</option>
                <option value="Colaboradora">{t('auth.field.desiredRole.option.colaboradora')}</option>
              </select>
            </div>

            <label className="flex items-center gap-2 text-sm cursor-pointer pt-1" style={{ color: "var(--color-neutral-700)" }}>
              <input 
                type="checkbox" 
                name="wantToBeMentor" 
                checked={registerHook.form.wantToBeMentor}
                onChange={registerHook.handleChange}
                className="w-4 h-4 rounded border-[var(--color-neutral-300)] checked:bg-[var(--color-primary)]" 
              />
              {t('auth.checkbox.mentor')}
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer pt-1" style={{ color: "var(--color-neutral-700)" }}>
              <input 
                type="checkbox" 
                name="acceptTerms" 
                checked={registerHook.form.acceptTerms}
                onChange={registerHook.handleChange}
                className="w-4 h-4 rounded border-[var(--color-neutral-300)] checked:bg-[var(--color-primary)]" 
              />
              {t('auth.checkbox.terms')}{" "}
              <a href="/privacy" className="font-semibold hover:underline" style={{ color: "var(--color-primary)" }}>{t('auth.checkbox.terms.link')}</a>
            </label>

            <button
              type="submit"
              disabled={registerHook.isLoading}
              className="w-full py-2.5 rounded-lg font-bold text-base transition-all hover:opacity-90 active:scale-[0.98] mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: "var(--color-primary)", color: "var(--color-white)" }}
            >
              {registerHook.isLoading ? t('auth.button.signup.loading') : t('auth.button.signup')}
            </button>
          </>
        )}

        {/* Social login divider */}
        <div className="relative my-4">
          <div className="w-full h-px bg-[var(--color-neutral-300)]" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 text-sm bg-white" style={{ color: "var(--color-neutral-600)" }}>
            {t('auth.divider.social')}
          </span>
        </div>

        {/* OAuth providers */}
        <div className="flex gap-4 pt-1">
          <button 
            type="button" 
            onClick={() => {
              const googleBtn = document.querySelector('[aria-labelledby="button-label"]') as HTMLElement;
              googleBtn?.click();
            }}
            className="flex-1 border border-[var(--color-neutral-300)] rounded-lg py-2 font-medium flex items-center justify-center gap-2 transition-all hover:bg-gray-50 active:scale-[0.98]" 
            style={{ color: "var(--color-foreground)" }}
          >
            <GoogleLogo className="w-5 h-5" />
            {t('auth.social.google')}
          </button>
          
          <button
            type="button"
            onClick={handleLinkedInLogin}
            className="flex-1 border border-[var(--color-neutral-300)] rounded-lg py-2 font-medium flex items-center justify-center gap-2 transition-all hover:bg-gray-50 active:scale-[0.98]"
            style={{ color: "var(--color-foreground)" }}
          >
            <LinkedinLogo className="w-5 h-5" style={{ color: "#0077B5" }} />
            {t('auth.social.linkedin')}
          </button>
        </div>
      </form>

      {/* Toggle authentication mode */}
      <p className="text-center text-sm mt-3" style={{ color: "var(--color-neutral-600)" }}>
        {isLogin ? (
          <>{t('auth.toggle.text.noAccount')} <button type="button" onClick={() => setIsLogin(false)} className="font-semibold hover:underline transition-colors" style={{ color: "var(--color-primary)" }}>{t('auth.toggle.text.signup')}</button></>
        ) : (
          <>{t('auth.toggle.text.hasAccount')} <button type="button" onClick={() => setIsLogin(true)} className="font-semibold hover:underline transition-colors" style={{ color: "var(--color-primary)" }}>{t('auth.toggle.text.login')}</button></>
        )}
      </p>

      {/* Hidden Google Login component - only render if clientId is available */}
      {process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID && (
        <div className="hidden">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            useOneTap
          />
        </div>
      )}

      {/* Form validation popups */}
      {isLogin ? (
        <Popup 
          message={loginHook.popupMessage} 
          type={loginHook.popupType} 
          show={loginHook.showPopup} 
          onClose={() => loginHook.setShowPopup(false)} 
        />
      ) : (
        <Popup 
          message={registerHook.popupMessage} 
          type={registerHook.popupType} 
          show={registerHook.showPopup} 
          onClose={() => registerHook.setShowPopup(false)} 
        />
      )}

      {/* Google OAuth popup */}
      <Popup 
        message={googlePopupMessage} 
        type={googlePopupType} 
        show={showGooglePopup} 
        onClose={() => setShowGooglePopup(false)} 
      />

      {/* Password reset modal */}
      <PasswordResetModal
        isOpen={showPasswordResetModal}
        onClose={() => setShowPasswordResetModal(false)}
        token={null}
      />
    </div>
  );
}