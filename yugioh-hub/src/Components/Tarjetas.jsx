export default function Tarjetas() {
  return (
    <div className="container mt-5 py-5 bg-dark border border-warning rounded-4 shadow-lg">
      <h2 className="mb-5 text-center text-warning fw-bold text-uppercase tracking-wide">
        🎴 Tipos de Decks Legendarios
      </h2>
      
      <div className="row g-4 justify-content-center px-3">
        
        {/* Tarjeta 1: Blue-Eyes */}
        <div className="col-12 col-md-6">
          <div className="card mb-3 h-100 bg-black text-white border border-secondary shadow">
            <div className="row g-0 align-items-center h-100">
              <div className="col-md-4">
                <img 
                  src="/imagenes/Decks/Blue-Eyes-White-Destiny.webp" 
                  className="img-fluid rounded-start h-100 object-fit-cover m-2" 
                  alt="Blue-Eyes White Destiny" 
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title text-warning fw-bold">Blue-Eyes White Destiny</h4>
                  <p className="card-text text-light">
                    Un arquetipo legendario enfocado en invocar poderosos dragones blancos de ojos azules con ataques devastadores.
                  </p>
                  <p className="card-text">
                    <small className="text-secondary">Estrategia ofensiva</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjeta 2: Dragón Rojo */}
        <div className="col-12 col-md-6">
          <div className="card mb-3 h-100 bg-black text-white border border-secondary shadow">
            <div className="row g-0 align-items-center h-100">
              <div className="col-md-4">
                <img 
                  src="/imagenes/Decks/Dragon-rojo.webp" 
                  className="img-fluid rounded-start h-100 object-fit-cover m-2" 
                  alt="Dragón Rojo" 
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title text-warning fw-bold">Red Nova / Dragón Rojo</h4>
                  <p className="card-text text-light">
                    Sincronías explosivas del reino oscuro. Un mazo rápido diseñado para dominar el campo con dragones flamígeros.
                  </p>
                  <p className="card-text">
                    <small className="text-secondary">Estrategia de Sincronía</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjeta 3: Dioses Egipcios */}
        <div className="col-12 col-md-6">
          <div className="card mb-3 h-100 bg-black text-white border border-secondary shadow">
            <div className="row g-0 align-items-center h-100">
              <div className="col-md-4">
                <img 
                  src="/imagenes/Decks/Dioses-Egipcios.jpg" 
                  className="img-fluid rounded-start h-100 object-fit-cover m-2" 
                  alt="Dioses Egipcios" 
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title text-warning fw-bold">Dioses Egipcios</h4>
                  <p className="card-text text-light">
                    El poder definitivo de Slifer, Obelisk y Ra reunido en una barriada mítica capaz de doblegar cualquier rival.
                  </p>
                  <p className="card-text">
                    <small className="text-secondary">Cartas Divinas</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}