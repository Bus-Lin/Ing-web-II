import { Link } from 'react-router-dom'

function CategoriaCard({ nombre }) {
  return (
    <Link to={`/categorias/${encodeURIComponent(nombre)}`} className="card p-3 h-100">
      <h2 className="h6 mb-0">{nombre}</h2>
    </Link>
  )
}
export default CategoriaCard