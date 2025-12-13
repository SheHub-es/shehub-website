// src/sections/auth/components/PasswordStrengthIndicator.tsx
interface PasswordStrengthIndicatorProps {
  password: string;
}

export function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const checks = {
    length: password.length >= 8 && password.length <= 128,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password),
  };

  const allMet = Object.values(checks).every(Boolean);

  const requirements = [
    { label: "8-128 characters", met: checks.length },
    { label: "One lowercase letter (a-z)", met: checks.lowercase },
    { label: "One uppercase letter (A-Z)", met: checks.uppercase },
    { label: "One number (0-9)", met: checks.number },
    { label: "One special character (!@#$...)", met: checks.special },
  ];

  // 🆕 No mostrar nada si no hay contraseña
  if (!password) return null;

  // 🆕 Desaparecer cuando todo está correcto
  if (allMet) return null;

  return (
    <div className="mt-2 p-3 rounded-lg bg-gray-50 border border-gray-200">
      <p className="text-xs font-semibold mb-2" style={{ color: "var(--color-neutral-600)" }}>
        Password requirements:
      </p>
      <div className="space-y-1">
        {requirements.map((req, index) => (
          <div key={index} className="flex items-center gap-2 text-xs">
            <span className={`font-bold ${req.met ? "text-green-600" : "text-gray-400"}`}>
              {req.met ? "✓" : "○"}
            </span>
            <span className={req.met ? "text-green-600" : "text-gray-500"}>
              {req.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}