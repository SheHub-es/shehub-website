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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validación de campos vacíos
    if (!form.firstName.trim() || !form.lastName.trim() || 
        !form.email.trim() || !form.password) {
      setPopupMessage("Todos los campos son obligatorios");
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    // ✅ Validación de aceptación de política de privacidad
    if (!form.acceptTerms) {
      setPopupMessage("Debes aceptar la política de privacidad para crear una cuenta");
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    // ✅ Validación de nombre y apellido (letras, acentos, espacios, guiones, apóstrofes)
    const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+(?:[\s'-][a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+)*$/;
    
    if (!namePattern.test(form.firstName.trim())) {
      setPopupMessage("El nombre solo puede contener letras, espacios, guiones o apóstrofes");
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    if (!namePattern.test(form.lastName.trim())) {
      setPopupMessage("El apellido solo puede contener letras, espacios, guiones o apóstrofes");
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    // ✅ Validación de longitud mínima
    if (form.password.length < 8) {
      setPopupMessage("La contraseña debe tener al menos 8 caracteres");
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    // ✅ Validación de coincidencia
    if (form.password !== form.confirmPassword) {
      setPopupMessage("Las contraseñas no coinciden");
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
        // ✅ Manejo mejorado de errores del backend
        // El GlobalExceptionHandler puede devolver:
        // 1. { message: "...", status: 409 } para ApiErrorResponse
        // 2. { message: "...", timestamp: "...", status: 400 } para errores de validación
        const errorMessage = data.message || data.error || "Error en el registro";
        
        setPopupMessage(errorMessage);
        setPopupType("error");
        setShowPopup(true);
        return;
      }

      // El backend devuelve AuthResponse con { token, message, ... }
      setPopupMessage(data.message || "Usuario registrado correctamente");
      setPopupType("success");
      setShowPopup(true);

      // ✅ Opcional: Limpiar form tras éxito
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
      setPopupMessage("Error de conexión. Verifica que el servidor esté activo.");
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
