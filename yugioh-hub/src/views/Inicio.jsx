import Hero from '../Components/Hero';
import Carrusel from '../components/Carrusel';
import Tarjetas from '../components/Tarjetas';
import Novedades from '../components/Novedades';

export default function Inicio() {
  return (
    <main className="flex-grow-1">
      <Hero />
      <Carrusel />
      <Tarjetas />
      <Novedades />
    </main>
  );
}