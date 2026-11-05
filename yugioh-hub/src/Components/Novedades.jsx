export default function Novedades() {
  return (
    <section className="container mt-5 py-5 mb-5">
      <div className="text-center mb-5">
        <span className="badge bg-warning text-dark mb-2 px-3 py-2 fw-bold text-uppercase">
          Actualizaciones
        </span>
        <h2 className="text-warning fw-bold">Últimas Novedades del Duelo</h2>
      </div>

      <div className="row g-4 justify-content-center">
        
        {/* Noticia 1 */}
        <div className="col-12 col-md-4">
          <div className="card h-100 bg-black text-white border border-secondary shadow-lg">
            <div className="card-body d-flex flex-column">
              <div className="mb-3 text-warning">
                <h3 className="fs-1">🏆</h3>
              </div>
              <h5 className="card-title text-warning fw-bold">
                Nueva Banlist de Master Duel
              </h5>
              <p className="card-text text-light small mb-4">
                Konami ha anunciado los ajustes para la temporada competitiva de noviembre. Descubre qué cartas han sido limitadas o prohibidas y cómo afectará esto al meta actual.
              </p>
              <button className="btn btn-outline-warning mt-auto btn-sm fw-bold">
                Leer más
              </button>
            </div>
          </div>
        </div>

        {/* Noticia 2 */}
        <div className="col-12 col-md-4">
          <div className="card h-100 bg-black text-white border border-warning shadow-lg" style={{ transform: "scale(1.05)", zIndex: 1 }}>
            <div className="card-body d-flex flex-column">
              <div className="mb-3 text-warning">
                <h3 className="fs-1">📦</h3>
              </div>
              <h5 className="card-title text-warning fw-bold">
                Lanzamiento: Blue-Eyes White Destiny
              </h5>
              <p className="card-text text-light small mb-4">
                El tan esperado Structure Deck ya está disponible. Refuerza tu estrategia con el nuevo soporte para el Dragón Blanco de Ojos Azules y domina a tus oponentes con poder puro.
              </p>
              <button className="btn btn-warning text-dark mt-auto btn-sm fw-bold">
                Ver análisis
              </button>
            </div>
          </div>
        </div>

        {/* Noticia 3 */}
        <div className="col-12 col-md-4">
          <div className="card h-100 bg-black text-white border border-secondary shadow-lg">
            <div className="card-body d-flex flex-column">
              <div className="mb-3 text-warning">
                <h3 className="fs-1">📖</h3>
              </div>
              <h5 className="card-title text-warning fw-bold">
                Guía de Sincronía Actualizada
              </h5>
              <p className="card-text text-light small mb-4">
                Hemos subido una nueva guía de combos paso a paso para maximizar el potencial del Dragón Rojo Archidemonio. ¡Aprende a llenar tu campo en un solo turno!
              </p>
              <button className="btn btn-outline-warning mt-auto btn-sm fw-bold">
                Leer más
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}