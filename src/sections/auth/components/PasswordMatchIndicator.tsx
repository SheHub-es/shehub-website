// src/sections/auth/components/PasswordMatchIndicator.tsx
interface PasswordMatchIndicatorProps {
  password: string;
  confirmPassword: string;
}

export function PasswordMatchIndicator({ password, confirmPassword }: PasswordMatchIndicatorProps) {
  // No mostrar nada si confirmPassword está vacío
  if (!confirmPassword) return null;

  const passwordsMatch = password === confirmPassword;

  return (
    <div className={`mt-2 p-2 rounded-lg border ${
      passwordsMatch 
        ? "bg-green-50 border-green-200" 
        : "bg-red-50 border-red-200"
    }`}>
      <div className="flex items-center gap-2 text-xs">
        <span className={`font-bold ${passwordsMatch ? "text-green-600" : "text-red-600"}`}>
          {passwordsMatch ? "✓" : "✗"}
        </span>
        <span className={passwordsMatch ? "text-green-600" : "text-red-600"}>
          {passwordsMatch ? "Passwords match" : "Passwords do not match"}
        </span>
      </div>
    </div>
  );
}