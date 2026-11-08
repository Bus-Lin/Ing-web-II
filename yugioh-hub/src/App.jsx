import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PiePagina from './components/PiePagina';
import Inicio from './views/Inicio';
import Favoritos from './views/Favoritos';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark text-white min-vh-100 d-flex flex-column">
        
        
        <Navbar />
        
        
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>

        
        <PiePagina />
        
      </div>
    </BrowserRouter>
  );
}