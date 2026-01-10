"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface PopupProps {
  message: string;
  type: "success" | "error";
  show: boolean;
  onClose: () => void;
}

export default function Popup({ message, type, show, onClose }: PopupProps) {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);

    if (show) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 4000); 

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3.5 rounded-xl font-medium flex items-center gap-3 shadow-lg animate-in slide-in-from-bottom-5 fade-in duration-300 z-50 min-w-[300px] max-w-[500px]"
      style={{
        backgroundColor: type === "success" 
          ? "var(--color-success)" 
          : "var(--color-error)",
        color: "var(--color-white)",
        borderRadius: "var(--input-border-radius)"
      }}
    >
      {type === "success" ? (
        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
      ) : (
        <XCircle className="w-5 h-5 flex-shrink-0" />
      )}
      <span className="text-sm">{message}</span>
    </div>
  );
}
