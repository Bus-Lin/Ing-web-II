import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { obtenerCartasPorArquetipo } from '../services/cartasService'

function CartasPorCategoria() {
  const { arquetipo } = useParams()
  const [cartas, setCartas] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function cargar() {
      try {
        setCartas(await obtenerCartasPorArquetipo(arquetipo))
      } catch (e) {
        setError(e.message)
      } finally {
        setCargando(false)
      }
    }
    cargar()
  }, [arquetipo])

  return (
    <main className="container py-5">
      <Link to="/categorias">← Volver</Link>
      <h1 className="my-4">{arquetipo}</h1>

      {cargando && <p>Cargando cartas...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!cargando && !error && cartas.length > 0 && (
        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-4">
          {cartas.map(carta => (
            <div className="col" key={carta.id}>
              <img
                src={carta.card_images[0].image_url_small}
                alt={`Carta ${carta.name}`}
                className="w-100"
              />
              <p className="small mt-2 mb-0">{carta.name}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
export default CartasPorCategoria