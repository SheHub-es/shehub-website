"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LinkedInCallbackPage() {
  const params = useSearchParams();
  const router = useRouter();
  const code = params.get("code");
  const error = params.get("error");

  const [status, setStatus] = useState("Procesando autenticación...");

  useEffect(() => {
    if (error) {
      setStatus("Error en LinkedIn: " + error);
      return;
    }

    if (!code) {
      setStatus("No se recibió ningún código de LinkedIn");
      return;
    }

    // Enviar el code al backend
    fetch("http://localhost:8080/auth/user/oauth/linkedin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("LOGIN OK:", data);

        if (data.token) {
          // Guarda el token localmente
          localStorage.setItem("token", data.token);

          setStatus("Inicio de sesión exitoso. Redirigiendo...");

          // Redirige donde tú quieras
          setTimeout(() => {
            router.push("/dashboard"); // cambia la ruta si necesitas otra
          }, 1500);
        } else {
          setStatus("No se recibió token del backend");
        }
      })
      .catch(() => {
        setStatus("Error al contactar al backend");
      });
  }, [code, error, router]);

  return (
    <div style={{ padding: 40 }}>
      <h1>{status}</h1>
    </div>
  );
}
