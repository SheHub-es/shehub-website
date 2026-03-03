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
    setPopupMessage(t("auth.unavailable"));
    setPopupType("error");
    setShowPopup(true);
    setIsLoading(false);
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