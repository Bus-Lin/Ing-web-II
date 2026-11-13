import { Link, NavLink } from "react-router-dom";

const claseLink = ({ isActive }) =>
  `nav-link ${isActive ? "text-warning fw-bold" : "text-white"}`;

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark border-bottom border-secondary px-3">
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
          <div className="navbar-nav ms-auto">
            <NavLink to="/" end className={claseLink}>Inicio</NavLink>
            <NavLink to="/cartas" className={claseLink}>Cartas Yugi-Oh</NavLink>
            <NavLink to="/decks" className={claseLink}>Decks</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}