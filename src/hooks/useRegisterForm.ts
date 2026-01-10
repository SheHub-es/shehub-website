import { useTranslation } from "@/hooks/useTranslation";
import { RegisterUserRequest } from "@/interfaces/RegisterUserRequest";
import { useState } from "react";

export function useRegisterForm() {
  const { t } = useTranslation();
  
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
      return { isValid: false, error: t('register.error.password.minLength') };
    }
    if (password.length > 128) {
      return { isValid: false, error: t('register.error.password.maxLength') };
    }
    if (!/[a-z]/.test(password)) {
      return { isValid: false, error: t('register.error.password.lowercase') };
    }
    if (!/[A-Z]/.test(password)) {
      return { isValid: false, error: t('register.error.password.uppercase') };
    }
    if (!/\d/.test(password)) {
      return { isValid: false, error: t('register.error.password.number') };
    }
    if (!/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) {
      return { isValid: false, error: t('register.error.password.special') };
    }
    return { isValid: true, error: "" };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validación de campos vacíos
    if (!form.firstName.trim() || !form.lastName.trim() || 
        !form.email.trim() || !form.password) {
      setPopupMessage(t('register.error.required'));
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    // ✅ Validación de aceptación de política de privacidad
    if (!form.acceptTerms) {
      setPopupMessage(t('register.error.terms'));
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    // ✅ Validación de nombre y apellido
    const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+(?:[\s'-][a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+)*$/;
    
    if (!namePattern.test(form.firstName.trim())) {
      setPopupMessage(t('register.error.firstName.invalid'));
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    if (!namePattern.test(form.lastName.trim())) {
      setPopupMessage(t('register.error.lastName.invalid'));
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
      setPopupMessage(t('register.error.password.mismatch'));
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
        const errorMessage = data.message || data.error || t('register.error.failed');
        
        setPopupMessage(errorMessage);
        setPopupType("error");
        setShowPopup(true);
        return;
      }

      setPopupMessage(data.message || t('register.success'));
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
      setPopupMessage(t('register.error.connection'));
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
