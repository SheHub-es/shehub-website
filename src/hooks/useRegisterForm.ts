import { RegisterUserRequest } from "@/interfaces/RegisterUserRequest";
import { useState } from "react";

export function useRegisterForm() {
  const [form, setForm] = useState<RegisterUserRequest>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    desiredRole: "",
    wantToBeMentor: false,
    acceptTerms: false,
  });

  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState<"success" | "error">("success");
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.currentTarget;
    const { name, value } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Función para validar contraseña fuerte
  const validatePassword = (password: string): { isValid: boolean; error: string } => {
    if (password.length < 8) {
      return { isValid: false, error: "Password must be at least 8 characters" };
    }
    if (password.length > 128) {
      return { isValid: false, error: "Password must not exceed 128 characters" };
    }
    if (!/[a-z]/.test(password)) {
      return { isValid: false, error: "Password must contain at least one lowercase letter" };
    }
    if (!/[A-Z]/.test(password)) {
      return { isValid: false, error: "Password must contain at least one uppercase letter" };
    }
    if (!/\d/.test(password)) {
      return { isValid: false, error: "Password must contain at least one number" };
    }
    if (!/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) {
      return { isValid: false, error: "Password must contain at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)" };
    }
    return { isValid: true, error: "" };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validación de campos vacíos
    if (!form.firstName.trim() || !form.lastName.trim() || 
        !form.email.trim() || !form.password) {
      setPopupMessage("All fields are required");
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    // ✅ Validación de aceptación de política de privacidad
    if (!form.acceptTerms) {
      setPopupMessage("You must accept the privacy terms to create an account");
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    // ✅ Validación de nombre y apellido
    const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+(?:[\s'-][a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+)*$/;
    
    if (!namePattern.test(form.firstName.trim())) {
      setPopupMessage("First name can only contain letters, spaces, hyphens or apostrophes");
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    if (!namePattern.test(form.lastName.trim())) {
      setPopupMessage("Last name can only contain letters, spaces, hyphens or apostrophes");
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    // ✅ Validación de contraseña fuerte
    const passwordValidation = validatePassword(form.password);
    if (!passwordValidation.isValid) {
      setPopupMessage(passwordValidation.error);
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    // ✅ Validación de coincidencia
    if (form.password !== form.confirmPassword) {
      setPopupMessage("Passwords do not match");
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    setIsLoading(true);

    try {
      // Excluir confirmPassword y acceptTerms antes de enviar al backend
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword, acceptTerms, ...registerData } = form;

      const response = await fetch(
        "http://localhost:8080/auth/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.message || data.error || "Registration error";
        
        setPopupMessage(errorMessage);
        setPopupType("error");
        setShowPopup(true);
        return;
      }

      setPopupMessage(data.message || "User registered successfully");
      setPopupType("success");
      setShowPopup(true);
      setTimeout(() => {
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          desiredRole: "",
          wantToBeMentor: false,
          acceptTerms: false,
        });
      }, 2000);

    } catch {
      setPopupMessage("Connection error. Check that the server is active.");
      setPopupType("error");
      setShowPopup(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    handleChange,
    handleSubmit,
    popupMessage,
    popupType,
    showPopup,
    setShowPopup,
    isLoading, 
  };
}
