import { useEffect, useState } from 'react'
import { buscarCartas, obtenerArquetipos } from '../services/cartasService'
import CategoriaSelect from '../Components/CategoriaSelect'
import CartaModal from '../Components/CartaModal'

const POR_PAGINA = 40

function Cartas() {
  const [cartas, setCartas] = useState([])
  const [arquetipos, setArquetipos] = useState([])
  const [texto, setTexto] = useState('')
  const [busqueda, setBusqueda] = useState('')
  const [arquetipo, setArquetipo] = useState('')
  const [offset, setOffset] = useState(0)
  const [hayMas, setHayMas] = useState(true)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [cartaSeleccionada, setCartaSeleccionada] = useState(null)

  // Carga la lista de categorías una sola vez
  useEffect(() => {
    obtenerArquetipos().then(setArquetipos).catch(() => {})
  }, [])

  // Carga cartas cuando cambia la búsqueda, la categoría o la página
  useEffect(() => {
    let activo = true
    async function cargar() {
      setCargando(true)
      setError('')
      try {
        const nuevas = await buscarCartas({
          texto: busqueda,
          arquetipo,
          num: POR_PAGINA,
          offset,
        })
        if (!activo) return
        setCartas(prev => (offset === 0 ? nuevas : [...prev, ...nuevas]))
        setHayMas(nuevas.length === POR_PAGINA)
      } catch (e) {
        if (activo) setError(e.message)
      } finally {
        if (activo) setCargando(false)
      }
    }
    cargar()
    return () => { activo = false }
  }, [busqueda, arquetipo, offset])

  function buscar(e) {
    e.preventDefault()
    setCartas([])
    setOffset(0)
    setBusqueda(texto.trim())
  }

  // Ahora recibe directamente el nombre de la categoría (no un evento)
  function cambiarCategoria(nombre) {
    setCartas([])
    setOffset(0)
    setArquetipo(nombre)
  }

  return (
    <main className="container py-5">
      <h1 className="mb-4">Cartas Yugi-Oh</h1>

      <form onSubmit={buscar} className="row g-2 mb-4">
        <div className="col-12 col-md-6">
          <input
            className="form-control bg-dark text-white border-secondary"
            placeholder="Buscar carta por nombre..."
            value={texto}
            onChange={e => setTexto(e.target.value)}
          />
        </div>

        <div className="col-8 col-md-4">
          <CategoriaSelect
            categorias={arquetipos}
            valor={arquetipo}
            onChange={cambiarCategoria}
          />
        </div>

        <div className="col-4 col-md-2">
          <button className="btn btn-warning w-100" type="submit">
            Buscar
          </button>
        </div>
      </form>

      {error && <div className="alert alert-danger">{error}</div>}

      {!cargando && !error && cartas.length === 0 && (
        <p>No se encontraron cartas.</p>
      )}

      <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-4">
        {cartas.map(carta => (
          <div className="col" key={carta.id}>
            <img
              src={carta.card_images[0].image_url_small}
              alt={`Carta ${carta.name}`}
              className="w-100 carta-img"
              onClick={() => setCartaSeleccionada(carta)}
            />
            <p className="small mt-2 mb-0">{carta.name}</p>
          </div>
        ))}
      </div>

      {cargando && <p className="mt-4">Cargando cartas...</p>}

      {!cargando && !error && hayMas && cartas.length > 0 && (
        <button
          className="btn btn-warning mt-4"
          onClick={() => setOffset(offset + POR_PAGINA)}
        >
          Ver más
        </button>
      )}

      {cartaSeleccionada && (
        <CartaModal
          carta={cartaSeleccionada}
          onCerrar={() => setCartaSeleccionada(null)}
        />
      )}
    </main>
  )
}

export default Cartas