"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Hace scroll al inicio de la página cuando cambia la ruta,
 * para que al navegar se vea la página desde arriba con la barra de navegación.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
