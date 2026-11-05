export default function PiePagina() {
  return (
    <footer className="container-fluid bg-dark text-white p-5 mt-5 border-top border-warning shadow-lg">
      <div className="row text-center">
        
        {/* Columna 1: Información o eslogan */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h5 className="text-warning fw-bold">Juega Yu-Gi-OH!</h5>
          <p className="text-light small">
            Proyecto web desarrollado con React y Bootstrap para la universidad.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h6 className="text-warning text-uppercase fw-bold mb-3">Enlaces</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-light">Inicio</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-light">Contacto</a>
            </li>
            <li>
              <a 
                href="https://yugioh.fandom.com/es/wiki/Yu-Gi-Oh!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-decoration-none text-light"
              >
                Wiki Fandom de Yu-Gi-Oh!
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Créditos o Estado */}
        <div className="col-12 col-md-4">
          <h6 className="text-warning text-uppercase fw-bold mb-3">Información</h6>
          <p className="text-light small">
            Sitio no oficial creado con fines educativos. Yu-Gi-Oh! es propiedad intelectual de Konami y Kazuki Takahashi.
          </p>
        </div>

      </div>

      {/* Línea divisoria y Copyright */}
      <hr className="border-warning my-4 opacity-50" />
      <div className="text-center text-light small">
        <p className="mb-0">© 2026 Jairo Antonio Herazo — Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}