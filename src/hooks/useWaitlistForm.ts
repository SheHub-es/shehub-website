import { useTranslation } from "@/hooks/useTranslation";
import { db } from "@/lib/firebase";
import {
  EMAIL_MAX_LENGTH,
  isValidEmail,
  isValidName,
  NAME_MAX_LENGTH,
  sanitizeForSubmit,
  sanitizeNameInput,
} from "@/lib/formValidators";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useCallback, useState } from "react";

const WAITLIST_COLLECTION = "waitlist";

export interface WaitlistFormState {
  firstName: string;
  lastName: string;
  email: string;
  desiredRole: string;
  wantToBeMentor: boolean;
  acceptTerms: boolean;
}

export interface WaitlistFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  desiredRole?: string;
  terms?: string;
}

export function useWaitlistForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState<WaitlistFormState>({
    firstName: "",
    lastName: "",
    email: "",
    desiredRole: "",
    wantToBeMentor: false,
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<WaitlistFormErrors>({});
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState<"success" | "error">("success");
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const clearFieldError = useCallback((field: keyof WaitlistFormErrors) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const target = e.currentTarget;
      const { name } = target;

      if (target instanceof HTMLInputElement && target.type === "checkbox") {
        setForm((prev) => ({ ...prev, [name]: target.checked }));
        if (name === "acceptTerms") clearFieldError("terms");
        return;
      }

      let value = (target as HTMLInputElement).value;

      if (name === "firstName" || name === "lastName") {
        value = sanitizeNameInput(value);
      }
      if (name === "email" && value.length > EMAIL_MAX_LENGTH) {
        value = value.slice(0, EMAIL_MAX_LENGTH);
      }
      if (name === "firstName" && value.length > NAME_MAX_LENGTH) {
        value = value.slice(0, NAME_MAX_LENGTH);
      }
      if (name === "lastName" && value.length > NAME_MAX_LENGTH) {
        value = value.slice(0, NAME_MAX_LENGTH);
      }

      setForm((prev) => ({ ...prev, [name]: value }));
      clearFieldError(name as keyof WaitlistFormErrors);
    },
    [clearFieldError]
  );

  const setField = useCallback(
    (name: keyof WaitlistFormState, value: string | boolean) => {
      setForm((prev) => ({ ...prev, [name]: value }));
      if (name === "desiredRole") clearFieldError("desiredRole");
    },
    [clearFieldError]
  );

  const validateForm = useCallback((): boolean => {
    const newErrors: WaitlistFormErrors = {};

    const firstNameTrim = form.firstName.trim();
    if (!firstNameTrim) {
      newErrors.firstName = t("waitlist.error.required");
    } else if (!isValidName(form.firstName)) {
      newErrors.firstName = t("register.error.firstName.invalid");
    }

    const lastNameTrim = form.lastName.trim();
    if (!lastNameTrim) {
      newErrors.lastName = t("waitlist.error.required");
    } else if (!isValidName(form.lastName)) {
      newErrors.lastName = t("register.error.lastName.invalid");
    }

    const emailTrim = form.email.trim();
    if (!emailTrim) {
      newErrors.email = t("waitlist.error.email");
    } else if (!isValidEmail(form.email)) {
      newErrors.email = t("waitlist.error.email.invalid");
    }

    if (!form.desiredRole.trim()) {
      newErrors.desiredRole = t("waitlist.error.desiredRole");
    }

    if (!form.acceptTerms) {
      newErrors.terms = t("register.error.terms");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form, t]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) {
        setPopupMessage(t("waitlist.error.validation"));
        setPopupType("error");
        setShowPopup(true);
        return;
      }

      setIsLoading(true);
      setErrors({});

      try {
        if (!db) {
          setPopupMessage(t("waitlist.error.notConfigured"));
          setPopupType("error");
          setShowPopup(true);
          return;
        }

        await addDoc(collection(db, WAITLIST_COLLECTION), {
          firstName: sanitizeForSubmit(form.firstName, NAME_MAX_LENGTH),
          lastName: sanitizeForSubmit(form.lastName, NAME_MAX_LENGTH),
          email: sanitizeForSubmit(form.email, EMAIL_MAX_LENGTH),
          desiredRole: form.desiredRole.trim() || null,
          wantToBeMentor: form.wantToBeMentor,
          createdAt: serverTimestamp(),
        });

        setPopupMessage(t("waitlist.success"));
        setPopupType("success");
        setShowPopup(true);
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          desiredRole: "",
          wantToBeMentor: false,
          acceptTerms: false,
        });
      } catch {
        setPopupMessage(t("waitlist.error.connection"));
        setPopupType("error");
        setShowPopup(true);
      } finally {
        setIsLoading(false);
      }
    },
    [form, t, validateForm]
  );

  return {
    form,
    errors,
    handleChange,
    setField,
    handleSubmit,
    popupMessage,
    popupType,
    showPopup,
    setShowPopup,
    isLoading,
  };
}
