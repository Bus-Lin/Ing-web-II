import { useContext } from "react";
import { AuthContext } from "./authContextInstance"; // <-- cambia esto al archivo real del contexto

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
}