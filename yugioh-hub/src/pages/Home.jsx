import Hero from '../Components/Hero'
import Carrusel from '../Components/Carrusel'
import Novedades from '../Components/Novedades'
import Categoria from '../Components/Categoria'
import Tarjetas from '../Components/Tarjetas'

function Home() {
  return (
    <>
      <Hero />
      <Carrusel />
      <Novedades />
      <Categoria />
      <Tarjetas />
    </>
  )
}

export default Home