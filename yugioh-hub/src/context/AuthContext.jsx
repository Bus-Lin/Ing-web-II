import { useEffect, useState } from "react";
import { AuthContext } from ".//authContextInstance.js"; // <-- importa tu contexto creado en el otro archivo
import { supabase } from "../services/supabaseClient";
import {
  iniciarSesion,
  cerrarSesion,
  obtenerSesionActual,
} from "../services/authService";

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    obtenerSesionActual()
      .then((session) => {
        setUsuario(session?.user ?? null);
      })
      .catch((error) => {
        console.error("Error al obtener la sesión inicial:", error);
        setUsuario(null);
      })
      .finally(() => {
        setCargando(false);
      });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUsuario(session?.user ?? null);
        setCargando(false);
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const login = (email, password) => iniciarSesion(email, password);
  const logout = () => cerrarSesion();

  return (
    <AuthContext.Provider value={{ usuario, cargando, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}