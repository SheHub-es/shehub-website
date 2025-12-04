"use client";

import LinkedinLogo from '@/components/icons/custom/LinkedinLogo';

export default function AuthFormV1() {
  return (
    <div className="w-full bg-white shadow-lg rounded-2xl p-6 font-primary">
      
      <form className="space-y-2.5">
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
            <input
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              className="input-base"
            />
          </div>
          <div className="flex-1">
            <label 
              htmlFor="confirmPassword" 
              className="input-label"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              className="input-base"
            />
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

        {/* Checkbox - siempre visible */}
        <label
          className="flex items-center gap-2 text-sm cursor-pointer pt-1"
          style={{ color: "var(--color-neutral-700)" }}
        >
          <input 
            type="checkbox" 
            name="wantToBeMentor"
            className="w-4 h-4 rounded border-[var(--color-neutral-300)] 
                     checked:bg-[var(--color-primary)] focus:ring-2 
                     focus:ring-[var(--color-primary)]/20"
          />
          Register as a Mentor for the selected Role.
        </label>

        {/* Create Account button */}
        <button
          type="submit"
          className="w-full py-2.5 rounded-lg font-bold text-base transition-all
                   hover:opacity-90 active:scale-[0.98] mt-4"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-white)"
          }}
        >
          Create Account
        </button>

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

      {/* Login link */}
      <p 
        className="text-center text-sm mt-3"
        style={{ color: "var(--color-neutral-600)" }}
      >
        Already have an account?{" "}
        <a
          href="/login"
          className="font-semibold hover:underline transition-colors"
          style={{ color: "var(--color-primary)" }}
        >
          Log in
        </a>
      </p>
    </div>
  );
}