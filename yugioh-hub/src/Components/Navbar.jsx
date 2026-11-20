import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth"; // Verifica que la ruta coincida con tu archivo

const claseLink = ({ isActive }) =>
  `nav-link ${isActive ? "text-warning fw-bold" : "text-white"}`;

export default function Navbar() {
  const { usuario, cargando, logout } = useAuth();
  const navigate = useNavigate();

  const manejarLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark border-bottom border-secondary px-3 sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-warning fw-bold fs-4" to="/">
          Yu-Gi-Oh
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto align-items-md-center gap-md-2">
            <NavLink to="/" end className={claseLink}>
              Inicio
            </NavLink>
            <NavLink to="/cartas" className={claseLink}>
              Cartas Yugi-Oh
            </NavLink>
            <NavLink to="/decks" className={claseLink}>
              Decks
            </NavLink>

            {/* Bloque condicional según estado de sesión */}
            {cargando ? null : usuario ? (
              <>
                <NavLink to="/favoritos" className={claseLink}>
                  Favoritos
                </NavLink>
                <span className="navbar-text text-secondary small px-2">
                  {usuario.email}
                </span>
                <button
                  onClick={manejarLogout}
                  className="btn btn-outline-danger btn-sm ms-md-1"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="btn btn-warning btn-sm fw-bold text-dark ms-md-2"
              >
                Iniciar sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}