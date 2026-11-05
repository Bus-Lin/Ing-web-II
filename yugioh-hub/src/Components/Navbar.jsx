export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark border-bottom border-secondary px-3">
      <div className="container-fluid">
        <a className="navbar-brand text-warning fw-bold fs-4" href="#">
          Yu-Gi-Oh
        </a>
        
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
            <a className="nav-link active text-warning" aria-current="page" href="#">
              Inicio
            </a>
            <a className="nav-link text-light" href="#categorias">
              Categorias
            </a>
            <a className="nav-link text-light" href="#mazos">
              Decks
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 