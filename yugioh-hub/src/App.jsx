import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import PiePagina from './Components/PiePagina'
import Home from './pages/Home'
import Categorias from './pages/Categorias'
import CartasPorCategoria from './pages/CartasPorCategoria'
import Cartas from './pages/Cartas'   // ← NUEVO: importa la página
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/categorias/:arquetipo" element={<CartasPorCategoria />} />
        <Route path="/cartas" element={<Cartas />} />   {/* ← NUEVO: la ruta */}
      </Routes>
      <PiePagina />
    </>
  )
}
export default App