"use client";

import { useEffect, useState } from "react";

interface PopupProps {
  message: string;
  type: "success" | "error";
  show: boolean;
  onClose: () => void;
}

export default function Popup({ message, type, show, onClose }: PopupProps) {
  const [isVisible, setIsVisible] = useState(show);

  // Handle visibility when `show` changes
  useEffect(() => {
    setIsVisible(show);

    if (show) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 3000); // Auto-close after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!isVisible) return null;

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded shadow-lg text-white font-medium ${bgColor}`}
    >
      {message}
    </div>
  );
}
