"use client";
import { useRegisterForm } from "@/hooks/useRegisterForm";
import LinkedinLogo from '@/components/icons/custom/LinkedinLogo';
import Popup from "./Popup"; 
export default function AuthFormV1() {
  const { 
    form, 
    handleChange, 
    handleSubmit, 
    popupMessage, 
    popupType, 
    showPopup, 
    setShowPopup 
  } = useRegisterForm();

  return (
    <div className="w-full bg-white shadow-lg rounded-2xl p-6 font-primary">
      
      <form onSubmit={handleSubmit} className="space-y-2.5">
        {/* Name fields */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="input-label">Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="Name"
              name="firstName"
              className="input-base"
              value={form.firstName}
              onChange={handleChange}
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
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="input-label">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            className="input-base"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {/* Password fields */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              className="input-base"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              className="input-base"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Desired Role select */}
        <div>
          <label htmlFor="desiredRole" className="input-label">Desired Role</label>
          <select
            id="desiredRole"
            name="desiredRole"
            className="input-base"
            value={form.desiredRole}
            onChange={handleChange}
          >
            <option value="">Select your role</option>
            <option value="Miembro">Miembro</option>
            <option value="Mentora">Mentora</option>
            <option value="Colaboradora">Colaboradora</option>
          </select>
        </div>

        {/* Checkbox */}
        <label className="flex items-center gap-2 text-sm cursor-pointer pt-1" style={{ color: "var(--color-neutral-700)" }}>
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
          style={{ backgroundColor: "var(--color-primary)", color: "var(--color-white)" }}
        >
          Create Account
        </button>

        {/* Divider */}
        <div className="relative my-4">
          <div className="w-full h-px bg-[var(--color-neutral-300)]" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 text-sm bg-white"
                style={{ color: "var(--color-neutral-600)" }}>
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
            {/* Google Icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              {/* paths omitted for brevity */}
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
      <p className="text-center text-sm mt-3" style={{ color: "var(--color-neutral-600)" }}>
        Already have an account?{" "}
        <a href="/login" className="font-semibold hover:underline transition-colors" style={{ color: "var(--color-primary)" }}>
          Log in
        </a>
      </p>

      {/* Popup for backend messages */}
      <Popup 
        message={popupMessage} 
        type={popupType} 
        show={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </div>
  );
}
