import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export default function RutaProtegida({ children }) {
  const { usuario, cargando } = useAuth();

  if (cargando) {
    return (
      <div className="container mt-5 text-center">
        <p>Verificando sesión...</p>
      </div>
    );
  }

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return children;
}