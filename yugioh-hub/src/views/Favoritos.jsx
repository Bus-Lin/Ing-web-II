import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Favoritos() {
  // Leemos directamente del localStorage al iniciar la vista
  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem('favoritos');
    return guardados ? JSON.parse(guardados) : [];
  });

  // Función para quitar un deck de favoritos desde esta vista
  const eliminarFavorito = (id) => {
    const actualizados = favoritos.filter((f) => f.id !== id);
    setFavoritos(actualizados);
    localStorage.setItem('favoritos', JSON.stringify(actualizados));
  };

  return (
    <main className="flex-grow-1 container mt-5 py-5">
      <h2 className="text-warning fw-bold mb-4 text-center">Tus Decks Favoritos ❤️</h2>
      
      {favoritos.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-light fs-5">Aún no has guardado ningún deck en tu colección.</p>
          <Link to="/" className="btn btn-warning fw-bold mt-3">Explorar Decks</Link>
        </div>
      ) : (
        <div className="row g-4 justify-content-center">
          {favoritos.map((deck) => (
            <div key={deck.id} className="col-12 col-md-6">
              <div className="card mb-3 h-100 bg-black text-white border border-warning shadow">
                <div className="row g-0 align-items-center h-100">
                  <div className="col-md-4">
                    <img 
                      src={deck.imagen} 
                      className="img-fluid rounded-start h-100 object-fit-cover m-2" 
                      alt={deck.titulo} 
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body d-flex flex-column justify-content-between h-100">
                      <div>
                        <h4 className="card-title text-warning fw-bold">{deck.titulo}</h4>
                        <p className="card-text text-light small">{deck.descripcion}</p>
                        <p className="card-text mb-2"><small className="text-secondary">{deck.categoria}</small></p>
                      </div>
                      <button 
                        onClick={() => eliminarFavorito(deck.id)} 
                        className="btn btn-outline-danger btn-sm fw-bold mt-2"
                      >
                        ❌ Quitar de Favoritos
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}