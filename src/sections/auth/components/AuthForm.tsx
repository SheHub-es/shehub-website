"use client";
import PasswordResetModal from '@/sections/auth/components/PasswordResetModal';
import GoogleLogo from '@/components/icons/custom/GoogleLogo';
import LinkedinLogo from '@/components/icons/custom/LinkedinLogo';
import { useLoginForm } from "@/hooks/useLoginForm";
import { useRegisterForm } from "@/hooks/useRegisterForm";
import { PasswordMatchIndicator } from '@/sections/auth/components/PasswordMatchIndicator';
import { PasswordStrengthIndicator } from '@/sections/auth/components/PasswordStrengthIndicator';
import type { GoogleAuthError, GoogleAuthResponse } from '@/types/google-oauth';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from "react";
import Popup from "./Popup";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(false); 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Estado para popups de Google OAuth
  const [googlePopupMessage, setGooglePopupMessage] = useState("");
  const [googlePopupType, setGooglePopupType] = useState<"success" | "error">("success");
  const [showGooglePopup, setShowGooglePopup] = useState(false);
  
  // Estado para Password Reset Modal
  const [showPasswordResetModal, setShowPasswordResetModal] = useState(false);
  
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
      
      // Guardar token y usuario
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      const successMessage = data.message || `Welcome ${data.user.firstName}!`;
      setGooglePopupMessage(successMessage);
      setGooglePopupType("success");
      setShowGooglePopup(true);

      // Redirigir después de 1.5s
      setTimeout(() => {
        window.location.href = "/"; // Ajusta según tu ruta
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

  return (
    <div className="w-full bg-white shadow-lg rounded-2xl p-6 font-primary">
      
      {/* Toggle buttons */}
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
          Log In
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
          Sign Up
        </button>
      </div>

      <form onSubmit={isLogin ? loginHook.handleSubmit : registerHook.handleSubmit} className="space-y-2.5">
        {isLogin ? (
          /* ===== LOGIN FORM ===== */
          <>
            <div>
              <label htmlFor="login-email" className="input-label">Email</label>
              <input 
                id="login-email" 
                type="email" 
                placeholder="Email" 
                name="email" 
                className="input-base"
                value={loginHook.form.email}
                onChange={loginHook.handleChange}
              />
            </div>

            <div>
              <label htmlFor="login-password" className="input-label">Password</label>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="input-base pr-12"
                  value={loginHook.form.password}
                  onChange={loginHook.handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-500)] hover:text-[var(--color-neutral-700)] transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
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
                ¿Olvidaste tu contraseña?
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
              I accept the{" "}
              <a href="/privacy" className="font-semibold hover:underline" style={{ color: "var(--color-primary)" }}>privacy terms</a>
            </label>

            <button
              type="submit"
              disabled={loginHook.isLoading}
              className="w-full py-2.5 rounded-lg font-bold text-base transition-all hover:opacity-90 active:scale-[0.98] mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: "var(--color-primary)", color: "var(--color-white)" }}
            >
              {loginHook.isLoading ? "Iniciando sesión..." : "Log In"}
            </button>
          </>
        ) : (
          /* ===== REGISTER FORM ===== */
          <>
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="input-label">Name</label>
                <input 
                  id="firstName" 
                  type="text" 
                  placeholder="Name" 
                  name="firstName" 
                  className="input-base" 
                  value={registerHook.form.firstName} 
                  onChange={registerHook.handleChange} 
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="input-label">Last Name</label>
                <input 
                  id="lastName" 
                  type="text" 
                  placeholder="Last Name" 
                  name="lastName" 
                  className="input-base" 
                  value={registerHook.form.lastName} 
                  onChange={registerHook.handleChange} 
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="input-label">Email</label>
              <input 
                id="email" 
                type="email" 
                placeholder="Email" 
                name="email" 
                className="input-base" 
                value={registerHook.form.email} 
                onChange={registerHook.handleChange} 
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="password" className="input-label">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    className="input-base pr-12"
                    value={registerHook.form.password}
                    onChange={registerHook.handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-500)] hover:text-[var(--color-neutral-700)] transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {/* 🆕 Indicador de fuerza - desaparece cuando es válida */}
                <PasswordStrengthIndicator password={registerHook.form.password} />
              </div>
              
              <div className="flex-1">
                <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    className="input-base pr-12"
                    value={registerHook.form.confirmPassword}
                    onChange={registerHook.handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-500)] hover:text-[var(--color-neutral-700)] transition-colors"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {/* 🆕 Indicador de coincidencia */}
                <PasswordMatchIndicator 
                  password={registerHook.form.password} 
                  confirmPassword={registerHook.form.confirmPassword} 
                />
              </div>
            </div>

            <div>
              <label htmlFor="desiredRole" className="input-label">Desired Role</label>
              <select 
                id="desiredRole" 
                name="desiredRole" 
                className="input-base" 
                value={registerHook.form.desiredRole} 
                onChange={registerHook.handleChange}
              >
                <option value="">Select your role</option>
                <option value="Miembro">Miembro</option>
                <option value="Mentora">Mentora</option>
                <option value="Colaboradora">Colaboradora</option>
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
              Register as a Mentor for the selected Role.
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer pt-1" style={{ color: "var(--color-neutral-700)" }}>
              <input 
                type="checkbox" 
                name="acceptTerms" 
                checked={registerHook.form.acceptTerms}
                onChange={registerHook.handleChange}
                className="w-4 h-4 rounded border-[var(--color-neutral-300)] checked:bg-[var(--color-primary)]" 
              />
              I accept the{" "}
              <a href="/privacy" className="font-semibold hover:underline" style={{ color: "var(--color-primary)" }}>privacy terms</a>
            </label>

            <button
              type="submit"
              disabled={registerHook.isLoading}
              className="w-full py-2.5 rounded-lg font-bold text-base transition-all hover:opacity-90 active:scale-[0.98] mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: "var(--color-primary)", color: "var(--color-white)" }}
            >
              {registerHook.isLoading ? "Creando cuenta..." : "Create Account"}
            </button>
          </>
        )}

        {/* Divider */}
        <div className="relative my-4">
          <div className="w-full h-px bg-[var(--color-neutral-300)]" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 text-sm bg-white" style={{ color: "var(--color-neutral-600)" }}>
            or continue with
          </span>
        </div>

        {/* Social login */}
        <div className="flex gap-4 pt-1">
          <button 
            type="button" 
            onClick={() => {
              // Trigger Google Login manually
              const googleBtn = document.querySelector('[aria-labelledby="button-label"]') as HTMLElement;
              googleBtn?.click();
            }}
            className="flex-1 border border-[var(--color-neutral-300)] rounded-lg py-2 font-medium flex items-center justify-center gap-2 transition-all hover:bg-gray-50 active:scale-[0.98]" 
            style={{ color: "var(--color-foreground)" }}
          >
            <GoogleLogo className="w-5 h-5" />
            Google
          </button>
          {/* Hidden Google Login component */}
          <div className="hidden">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              useOneTap
            />
          </div>
          <button type="button" className="flex-1 border border-[var(--color-neutral-300)] rounded-lg py-2 font-medium flex items-center justify-center gap-2 transition-all hover:bg-gray-50 active:scale-[0.98]" style={{ color: "var(--color-foreground)" }}>
            <LinkedinLogo className="w-5 h-5" style={{ color: "#0077B5" }} />
            LinkedIn
          </button>
        </div>
      </form>

      {/* Toggle link */}
      <p className="text-center text-sm mt-3" style={{ color: "var(--color-neutral-600)" }}>
        {isLogin ? (
          <>Don&apos;t have an account? <button type="button" onClick={() => setIsLogin(false)} className="font-semibold hover:underline transition-colors" style={{ color: "var(--color-primary)" }}>Sign up</button></>
        ) : (
          <>Already have an account? <button type="button" onClick={() => setIsLogin(true)} className="font-semibold hover:underline transition-colors" style={{ color: "var(--color-primary)" }}>Log in</button></>
        )}
      </p>

      {/* Popups */}
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

      {/* Google OAuth Popup */}
      <Popup 
        message={googlePopupMessage} 
        type={googlePopupType} 
        show={showGooglePopup} 
        onClose={() => setShowGooglePopup(false)} 
      />

      {/* Password Reset Modal */}
      <PasswordResetModal
        isOpen={showPasswordResetModal}
        onClose={() => setShowPasswordResetModal(false)}
        token={null}
      />
    </div>
  );
}
