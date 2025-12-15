import { useTranslation } from "@/hooks/useTranslation";
import { useState } from "react";

interface LoginForm {
  email: string;
  password: string;
  acceptTerms: boolean;
}

export function useLoginForm() {
  const { t } = useTranslation();
  
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
      setPopupMessage(t('login.error.required'));
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
        setPopupMessage(data.message || t('login.error.failed'));
        setPopupType("error");
        setShowPopup(true);
        return;
      }

      setPopupMessage(t('login.success'));
      setPopupType("success");
      setShowPopup(true);

      
    } catch {
      setPopupMessage(t('login.error.connection'));
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