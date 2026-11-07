import exodiaImg from "../assets/Imagenes/hero/Exodia.webp";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-dark text-white py-5 border-bottom border-secondary"
    >
      <div className="container">
        <div className="row align-items-center mt-4 mb-4">
          {/* Columna izquierda: Texto y botones */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start">
            {/* Insignia o Badge superior */}
            <span className="badge bg-warning text-dark mb-3 px-3 py-2 fw-bold text-uppercase">
              🎴 ¡El arte del Duelo te espera!
            </span>

            <h1 className="display-4 fw-bold text-warning">Juega Yugi-OH</h1>

            <p className="lead text-light my-3">
              Descubre el fascinante mundo de Yu-Gi-Oh! Domina los arquetipos
              legendarios, construye estrategias imbatibles y conviértete en el
              mejor duelista.
            </p>

            {/* Contenedor de Botones de Acción */}
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mt-4">
              <a
                href="#guias"
                className="btn btn-warning btn-lg fw-bold shadow"
              >
                Aprende a jugar Decks
              </a>
              <a
                href="#cartas"
                className="btn btn-warning btn-lg fw-bold shadow text-center"
              >
                Conoce las cartas de Yugi-Oh
              </a>
              <a
                href="https://yugioh.fandom.com/es/wiki/Yu-Gi-Oh!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg fw-bold"
              >
                Explorar Wiki
              </a>
            </div>
          </div>

          {/* Columna derecha: Imagen de Exodia con efecto visual de marco */}
          <div className="col-12 col-md-6 text-center">
            <div className="p-3 bg-secondary bg-opacity-10 rounded-4 border border-secondary shadow-lg d-inline-block">
              <img
                src={exodiaImg}
                alt="Exodia, Win automatico"
                className="img-fluid rounded"
                style={{ maxHeight: "380px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
