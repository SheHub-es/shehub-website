export async function loginUser(credentials) {
  try {
    const res = await fetch("http://localhost:8080/auth/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) {
      throw new Error("Credenciales incorrectas");
    }

    return await res.json();
  } catch (error) {
    console.error("Error en login:", error);
    throw error;
  }
}
