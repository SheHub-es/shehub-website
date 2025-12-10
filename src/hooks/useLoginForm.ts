import { useState } from "react";

interface LoginForm {
  email: string;
  password: string;
  acceptTerms: boolean;
}

export function useLoginForm() {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
    acceptTerms: false,
  });

  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState<"success" | "error">("success");
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password) {
      setPopupMessage("Email y contraseña son obligatorios");
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8080/auth/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setPopupMessage(data.message || "Error en el login");
        setPopupType("error");
        setShowPopup(true);
        return;
      }

      setPopupMessage("Login exitoso");
      setPopupType("success");
      setShowPopup(true);

      // Aquí guardarías el token en localStorage o context
      // localStorage.setItem("token", data.token);
      
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
    setPopupMessage, 
    setPopupType,
    isLoading,
  };
}