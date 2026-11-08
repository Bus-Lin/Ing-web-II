import { useState } from 'react';

function TarjetaDeck({ imagen, titulo, descripcion, categoria, onFavorito, esFavorito }) {
  return (
    <div className="col-12 col-md-6">
      <div className="card mb-3 h-100 bg-black text-white border border-secondary shadow">
        <div className="row g-0 align-items-center h-100">
          <div className="col-md-4">
            <img 
              src={imagen} 
              className="img-fluid rounded-start h-100 object-fit-cover m-2" 
              alt={titulo} 
            />
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <div>
                <h4 className="card-title text-warning fw-bold">{titulo}</h4>
                <p className="card-text text-light small">
                  {descripcion}
                </p>
                <p className="card-text mb-2">
                  <small className="text-secondary">{categoria}</small>
                </p>
              </div>
              
              {/* Botón interactivo de favoritos */}
              <button 
                onClick={onFavorito} 
                className={`btn btn-sm fw-bold mt-2 ${esFavorito ? 'btn-warning text-dark' : 'btn-outline-warning'}`}
              >
                {esFavorito ? '❤️ En Favoritos' : '🤍 Agregar a Favoritos'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Tarjetas() {
  // 1. CARGA LIMPIA: Inicializamos el estado directamente sin usar useEffect
  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem('favoritos');
    return guardados ? JSON.parse(guardados) : [];
  });

  // Función para agregar o quitar de favoritos
  const toggleFavorito = (deck) => {
    let nuevosFavoritos;
    const existe = favoritos.some((f) => f.id === deck.id);

    if (existe) {
      nuevosFavoritos = favoritos.filter((f) => f.id !== deck.id);
    } else {
      nuevosFavoritos = [...favoritos, deck];
    }

    setFavoritos(nuevosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
  };

  const datosDecks = [
    {
      id: 1,
      titulo: "Blue-Eyes White Destiny",
      imagen: "/imagenes/Decks/Blue-Eyes-White-Destiny.webp",
      descripcion: "Un arquetipo legendario enfocado en invocar poderosos dragones blancos de ojos azules con ataques devastadores.",
      categoria: "Estrategia ofensiva"
    },
    {
      id: 2,
      titulo: "Red Nova / Dragón Rojo",
      imagen: "/imagenes/Decks/Dragon-rojo.webp",
      descripcion: "Sincronías explosivas del reino oscuro. Un mazo rápido diseñado para dominar el campo con dragones flamígeros.",
      categoria: "Estrategia de Sincronía"
    },
    {
      id: 3,
      titulo: "Dioses Egipcios",
      imagen: "/imagenes/Decks/Dioses-Egipcios.jpg",
      descripcion: "El poder definitivo de Slifer, Obelisk y Ra reunido en una barriada mítica capaz de doblegar cualquier rival.",
      categoria: "Cartas Divinas"
    }
  ];

  return (
    <div className="container mt-5 py-5 bg-dark border border-warning rounded-4 shadow-lg" id="cartas">
      <h2 className="mb-5 text-center text-warning fw-bold text-uppercase tracking-wide">
        🎴 Tipos de Decks
      </h2>
      
      <div className="row g-4 justify-content-center px-3">
        {datosDecks.map((deck) => {
          const esFavorito = favoritos.some((f) => f.id === deck.id);
          return (
            <TarjetaDeck 
              key={deck.id}
              imagen={deck.imagen}
              titulo={deck.titulo}
              descripcion={deck.descripcion}
              categoria={deck.categoria}
              esFavorito={esFavorito}
              onFavorito={() => toggleFavorito(deck)}
            />
          );
        })}
      </div>
    </div>
  );
}