import { useState } from "react";
import { RegisterUserRequest } from "@/interfaces/RegisterUserRequest";

export function useRegisterForm() {
  const [form, setForm] = useState<RegisterUserRequest>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    desiredRole: "",
    wantToBeMentor: false,
  });

  // Estado del popup
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState<"success" | "error">("success");
  const [showPopup, setShowPopup] = useState(false);

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

    console.log("📌 Datos listos para enviar:", form);

    // Validación rápida de contraseñas
    if (form.password !== form.confirmPassword) {
      setPopupMessage("Las contraseñas no coinciden");
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/auth/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Backend devolvió error
        setPopupMessage(data.error || "Error en el registro");
        setPopupType("error");
        setShowPopup(true);
        return;
      }

      console.log("✅ Registro exitoso:", data);

      setPopupMessage(data.message || "Usuario registrado correctamente");
      setPopupType("success");
      setShowPopup(true);

    } catch (err) {
      console.error(err);
      setPopupMessage("Hubo un error al registrar");
      setPopupType("error");
      setShowPopup(true);
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
  };
}
