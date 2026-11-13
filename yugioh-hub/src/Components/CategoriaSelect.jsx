import { useEffect, useRef, useState } from 'react'

function CategoriaSelect({ categorias, valor, onChange }) {
  const [abierto, setAbierto] = useState(false)
  const [filtro, setFiltro] = useState('')
  const ref = useRef(null)

  // Cierra el menú al hacer clic fuera de él
  useEffect(() => {
    function cerrarFuera(e) {
      if (ref.current && !ref.current.contains(e.target)) setAbierto(false)
    }
    document.addEventListener('mousedown', cerrarFuera)
    return () => document.removeEventListener('mousedown', cerrarFuera)
  }, [])

  const visibles = categorias.filter(c =>
    c.archetype_name.toLowerCase().includes(filtro.toLowerCase())
  )

  function elegir(nombre) {
    onChange(nombre)
    setAbierto(false)
    setFiltro('')
  }

  return (
    <div className="position-relative" ref={ref}>
      <button
        type="button"
        className={`cat-boton ${abierto ? 'abierto' : ''}`}
        onClick={() => setAbierto(!abierto)}
      >
        <span className="text-truncate">{valor || 'Categorías (todas)'}</span>
        <span className="ms-2 text-warning">▾</span>
      </button>

      {abierto && (
        <div className="cat-panel">
          <input
            autoFocus
            className="cat-buscador"
            placeholder="Buscar categoría..."
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
          />

          <div className="cat-lista">
            <button
              type="button"
              className={`cat-item ${valor === '' ? 'activo' : ''}`}
              onClick={() => elegir('')}
            >
              Todas las categorías
            </button>

            {visibles.map(c => (
              <button
                type="button"
                key={c.archetype_name}
                className={`cat-item ${valor === c.archetype_name ? 'activo' : ''}`}
                onClick={() => elegir(c.archetype_name)}
              >
                {c.archetype_name}
              </button>
            ))}

            {visibles.length === 0 && (
              <p className="text-secondary small mb-0 px-2">Sin resultados</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default CategoriaSelect