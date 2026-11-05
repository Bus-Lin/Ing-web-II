import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Carrusel from "./Components/Carrusel";
import Tarjetas from "./Components/Tarjetas";
import PiePagina from "./Components/PiePagina";
import Novedades from "./Components/Novedades";
function App() {
  return (
    <div className="bg-dark min-vh-100 text-dark">
      <Navbar />
      <Hero />
      <Carrusel />
      <Tarjetas />
      <Novedades />
      <PiePagina />
    </div>
  );
}

export default App;
