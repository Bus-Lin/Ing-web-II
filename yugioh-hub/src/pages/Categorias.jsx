import { useEffect, useState } from 'react'
import CategoriaCard from '../Components/CategoriaCard'
import { obtenerArquetipos } from '../services/cartasService'

function Categorias() {
  const [arquetipos, setArquetipos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    async function cargar() {
      try {
        setArquetipos(await obtenerArquetipos())
      } catch (e) {
        setError(e.message)
      } finally {
        setCargando(false)
      }
    }
    cargar()
  }, [])

  // son muchos arquetipos: filtramos y mostramos máximo 60
  const filtrados = arquetipos
    .filter(a => a.archetype_name.toLowerCase().includes(busqueda.toLowerCase()))
    .slice(0, 60)

  return (
    <main className="container py-5">
      <h1>Categorías</h1>
      <input
        className="form-control my-4"
        placeholder="Buscar arquetipo..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
      />

      {cargando && <p>Cargando categorías...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!cargando && !error && (
        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-3">
          {filtrados.map(a => (
            <div className="col" key={a.archetype_name}>
              <CategoriaCard nombre={a.archetype_name} />
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
export default Categorias