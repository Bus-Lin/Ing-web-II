import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-warning">
      <div className="container">
        {/* Logo que te lleva al Inicio */}
        <Link className="navbar-brand fw-bold text-warning" to="/">
          Yu-Gi-Oh! Hub
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              {/* Botón de favoritos que faltaba */}
              <Link className="nav-link text-warning fs-5 fw-bold" to="/favoritos">
                Mis Favoritos ❤️
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}