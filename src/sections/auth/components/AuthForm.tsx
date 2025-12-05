"use client";

import LinkedinLogo from '@/components/icons/custom/LinkedinLogo';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function AuthFormV1() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full bg-white shadow-lg rounded-2xl p-6 font-primary">
      
      {/* Toggle buttons */}
      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => setIsLogin(true)}
          className={`flex-1 py-2.5 rounded-lg font-bold text-base transition-all
                     border-2 active:scale-[0.98] ${
                       isLogin 
                         ? 'border-[var(--color-primary)] bg-gray-50' 
                         : 'border-[var(--color-neutral-300)] bg-white hover:bg-gray-50 active:bg-gray-50'
                     }`}
          style={{ 
            color: "var(--color-foreground)"
          }}
        >
          Log In
        </button>
        <button
          type="button"
          onClick={() => setIsLogin(false)}
          className={`flex-1 py-2.5 rounded-lg font-bold text-base transition-all
                     border-2 active:scale-[0.98] ${
                       !isLogin 
                         ? 'border-[var(--color-primary)] bg-gray-50' 
                         : 'border-[var(--color-neutral-300)] bg-white hover:bg-gray-50 active:bg-gray-50'
                     }`}
          style={{ 
            color: "var(--color-foreground)"
          }}
        >
          Sign Up
        </button>
      </div>

      <form className="space-y-2.5">
        {/* LOGIN FORM */}
        {isLogin ? (
          <>
            {/* Email */}
            <div>
              <label 
                htmlFor="email" 
                className="input-label"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                className="input-base"
              />
            </div>

            {/* Password */}
            <div>
              <label 
                htmlFor="password" 
                className="input-label"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="input-base pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-500)] hover:text-[var(--color-neutral-700)] transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Privacy terms checkbox */}
            <label
              className="flex items-center gap-2 text-sm cursor-pointer pt-1"
              style={{ color: "var(--color-neutral-700)" }}
            >
              <input 
                type="checkbox" 
                name="acceptTerms"
                className="w-4 h-4 rounded border-[var(--color-neutral-300)] 
                         checked:bg-[var(--color-primary)] focus:ring-2 
                         focus:ring-[var(--color-primary)]/20"
              />
              I accept the{" "}
              <a 
                href="/privacy" 
                className="font-semibold hover:underline"
                style={{ color: "var(--color-primary)" }}
              >
                privacy terms
              </a>
            </label>

            {/* Login button */}
            <button
              type="submit"
              className="inline-flex items-center justify-center focus-square cursor-pointer 
                       bg-[var(--color-button-primary-primary-bg-default)] 
                       !text-[var(--color-button-primary-primary-text)] 
                       hover:bg-[var(--color-button-primary-primary-bg-hover)] 
                       px-6 py-3 text-[var(--text-size-400)] rounded-full 
                       w-full h-[48px] min-h-[48px] 
                       font-[var(--font-weight-default)] 
                       transition-colors duration-200 hover:!text-black mt-4"
            >
              Log In
            </button>
          </>
        ) : (
          <>
            {/* REGISTER FORM */}
            {/* Name fields */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label 
                  htmlFor="firstName" 
                  className="input-label"
                >
                  Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Name"
                  name="firstName"
                  className="input-base"
                />
              </div>
              <div className="flex-1">
                <label 
                  htmlFor="lastName" 
                  className="input-label"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  className="input-base"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label 
                htmlFor="email" 
                className="input-label"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                className="input-base"
              />
            </div>

            {/* Password fields */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label 
                  htmlFor="password" 
                  className="input-label"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    className="input-base pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-500)] hover:text-[var(--color-neutral-700)] transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <label 
                  htmlFor="confirmPassword" 
                  className="input-label"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    className="input-base pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-500)] hover:text-[var(--color-neutral-700)] transition-colors"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Desired Role select */}
            <div>
              <label 
                htmlFor="desiredRole" 
                className="input-label"
              >
                Desired Role
              </label>
              <select
                id="desiredRole"
                name="desiredRole"
                className="input-base"
              >
                <option value="">Select your role</option>
                <option value="Miembro">Miembro</option>
                <option value="Mentora">Mentora</option>
                <option value="Colaboradora">Colaboradora</option>
              </select>
            </div>

            {/* Checkbox - Register as Mentor */}
            <label
              className="flex items-center gap-2 text-sm cursor-pointer pt-1"
              style={{ color: "var(--color-neutral-700)" }}
            >
              <input 
                type="checkbox" 
                name="wantToBeMentor"
                className="w-4 h-4 rounded border-[var(--color-neutral-300)] 
                         checked:bg-[var(--color-primary)]"
              />
              Register as a Mentor for the selected Role.
            </label>

            {/* Privacy terms checkbox */}
            <label
              className="flex items-center gap-2 text-sm cursor-pointer pt-1"
              style={{ color: "var(--color-neutral-700)" }}
            >
              <input 
                type="checkbox" 
                name="acceptTerms"
                className="w-4 h-4 rounded border-[var(--color-neutral-300)] 
                         checked:bg-[var(--color-primary)]"
              />
              I accept the{" "}
              <a 
                href="/privacy" 
                className="font-semibold hover:underline"
                style={{ color: "var(--color-primary)" }}
              >
                privacy terms
              </a>
            </label>

            {/* Create Account button */}
            <button
              type="submit"
              className="inline-flex items-center justify-center focus-square cursor-pointer 
                       bg-[var(--color-button-primary-primary-bg-default)] 
                       !text-[var(--color-button-primary-primary-text)] 
                       hover:bg-[var(--color-button-primary-primary-bg-hover)] 
                       px-6 py-3 text-[var(--text-size-400)] rounded-full 
                       w-full h-[48px] min-h-[48px] 
                       font-[var(--font-weight-default)] 
                       transition-colors duration-200 hover:!text-black mt-4"
            >
              Create Account
            </button>
          </>
        )}

        {/* Divider */}
        <div className="relative my-4">
          <div className="w-full h-px bg-[var(--color-neutral-300)]" />
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     px-3 text-sm bg-white"
            style={{ color: "var(--color-neutral-600)" }}
          >
            or continue with
          </span>
        </div>

        {/* Social login */}
        <div className="flex gap-4 pt-1">
          <button
            type="button"
            className="flex-1 border border-[var(--color-neutral-300)] rounded-lg py-2 
                     font-medium flex items-center justify-center gap-2 transition-all
                     hover:bg-gray-50 active:scale-[0.98]"
            style={{ color: "var(--color-foreground)" }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>

          <button
            type="button"
            className="flex-1 border border-[var(--color-neutral-300)] rounded-lg py-2 
                     font-medium flex items-center justify-center gap-2 transition-all
                     hover:bg-gray-50 active:scale-[0.98]"
            style={{ color: "var(--color-foreground)" }}
          >
            <LinkedinLogo className="w-5 h-5" style={{ color: "#0077B5" }} />
            LinkedIn
          </button>
        </div>
      </form>

      {/* Toggle link */}
      <p 
        className="text-center text-sm mt-3"
        style={{ color: "var(--color-neutral-600)" }}
      >
        {isLogin ? (
          <>
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className="font-semibold hover:underline transition-colors"
              style={{ color: "var(--color-primary)" }}
            >
              Sign up
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className="font-semibold hover:underline transition-colors"
              style={{ color: "var(--color-primary)" }}
            >
              Log in
            </button>
          </>
        )}
      </p>
    </div>
  );
}