"use client";

export default function AuthFormV1() {
  return (
    <div className="w-full bg-white shadow-md rounded-2xl p-8 font-primary">
      <form className="space-y-4">

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3"
            style={{ color: "var(--color-foreground)" }}
          />

          <input
            type="text"
            placeholder="Your Last Name"
            className="w-full border rounded-lg px-4 py-3"
            style={{ color: "var(--color-foreground)" }}
          />

        </div>

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-lg px-4 py-3"
          style={{ color: "var(--color-foreground)" }}
        />

        <div className="flex gap-4">

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3"
            style={{ color: "var(--color-foreground)" }}
          />

          <input
            type="password"
            placeholder="Confirm"
            className="w-full border rounded-lg px-4 py-3"
            style={{ color: "var(--color-foreground)" }}
          />

        </div>

        {/* Accessible Select */}

        <label
          htmlFor="role"
          className="sr-only"
        >
          Select your role
        </label>

        <select
          id="role"
          className="w-full border rounded-lg px-4 py-3"
          style={{ color: "var(--color-foreground)" }}
        >
          <option>Select your role</option>
          <option>Developer</option>
          <option>Designer</option>
        </select>

        <label
          className="flex items-center gap-2 text-sm"
          style={{ color: "var(--color-neutral-700)" }}
        >
          <input type="checkbox" className="h-4 w-4" />
          Register as a Mentor for the selected Role.
        </label>

        <button
          type="button"
          className="w-full py-3 rounded-lg font-semibold"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-background)"
          }}
        >
          Create Account
        </button>

        {/* Divider */}

        <div className="relative my-4">

          <div
            className="w-full h-px"
            style={{ backgroundColor: "var(--color-neutral-300)" }}
          >


          </div>

          <span
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-2 text-sm bg-white"
            style={{ color: "var(--color-neutral-600)" }}
          >
            or continue with
          </span>

        </div>

        {/* Social login */}
        
        <div className="flex gap-4">
          <button
            type="button"
            className="flex-1 border rounded-lg py-3 font-medium"
            style={{ color: "var(--color-foreground)" }}
          >
            Google
          </button>

          <button
            type="button"
            className="flex-1 border rounded-lg py-3 font-medium"
            style={{ color: "var(--color-foreground)" }}
          >
            LinkedIn
          </button>
        </div>
      </form>

      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <a
          href="#"
          className="font-semibold"
          style={{ color: "var(--color-primary)" }}
        >
          Log in
        </a>
      </p>
    </div>
  );
}
