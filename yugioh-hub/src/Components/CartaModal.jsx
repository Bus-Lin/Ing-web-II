import { useEffect, useState } from 'react'
import { traducirAEspanol } from '../services/cartasService'
import { TIPOS, ATRIBUTOS, RAZAS } from '../Data/traducciones'

// true = traduce sola al abrir la carta. false = solo traduce al presionar el botón.
const TRADUCIR_AUTOMATICO = true

const t = (mapa, valor) => mapa[valor] || valor

function CartaModal({ carta, onCerrar }) {
  const [traduccion, setTraduccion] = useState('')
  const [verEspanol, setVerEspanol] = useState(TRADUCIR_AUTOMATICO)
  const [errorTraduccion, setErrorTraduccion] = useState('')

  // Se calcula, no se guarda: está traduciendo si se pidió español y aún no llega el texto
  const traduciendo = verEspanol && !traduccion
  const mostrandoEspanol = verEspanol && traduccion

  // Cierra con Escape y bloquea el scroll del fondo
  useEffect(() => {
    function alPresionar(e) {
      if (e.key === 'Escape') onCerrar()
    }
    document.addEventListener('keydown', alPresionar)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', alPresionar)
      document.body.style.overflow = ''
    }
  }, [onCerrar])

  // Pide la traducción cuando se quiere ver en español y todavía no existe
  useEffect(() => {
    if (!verEspanol || traduccion || !carta) return
    let activo = true

    traducirAEspanol(carta.desc)
      .then(texto => {
        if (activo) setTraduccion(texto)
      })
      .catch(e => {
        if (activo) {
          setErrorTraduccion(e.message)
          setVerEspanol(false)
        }
      })

    return () => {
      activo = false
    }
  }, [verEspanol, traduccion, carta])

  function alternarIdioma() {
    setErrorTraduccion('')
    setVerEspanol(v => !v)
  }

  if (!carta) return null

  return (
    <div className="carta-overlay" onClick={onCerrar}>
      <div
        className="carta-modal bg-dark text-white border border-secondary rounded-4 shadow-lg"
        onClick={e => e.stopPropagation()}
      >
        <button
          type="button"
          className="btn-close btn-close-white carta-cerrar"
          aria-label="Cerrar"
          onClick={onCerrar}
        />

        <div className="row g-4 align-items-start">
          <div className="col-12 col-md-5 text-center">
            <img
              src={carta.card_images[0].image_url}
              alt={`Carta ${carta.name}`}
              className="img-fluid rounded"
              style={{ maxHeight: '70vh' }}
            />
          </div>

          <div className="col-12 col-md-7">
            <h2 className="h4 text-warning fw-bold">{carta.name}</h2>
            <p className="text-secondary mb-3">{t(TIPOS, carta.type)}</p>

            {traduciendo && (
              <p className="text-warning small mb-2">
                <span className="spinner-border spinner-border-sm me-2" />
                Traduciendo al español...
              </p>
            )}

            <p
              className="mb-2"
              style={{ whiteSpace: 'pre-line', opacity: traduciendo ? 0.5 : 1 }}
            >
              {mostrandoEspanol ? traduccion : carta.desc}
            </p>

            <button
              type="button"
              className="btn btn-outline-warning btn-sm mb-3"
              onClick={alternarIdioma}
              disabled={traduciendo}
            >
              {mostrandoEspanol ? 'Ver original (inglés)' : 'Traducir al español'}
            </button>

            {errorTraduccion && (
              <p className="text-danger small">{errorTraduccion}</p>
            )}

            <ul className="list-unstyled small mb-0">
              {carta.attribute && (
                <li><strong>Atributo:</strong> {t(ATRIBUTOS, carta.attribute)}</li>
              )}
              {carta.race && (
                <li><strong>Raza:</strong> {t(RAZAS, carta.race)}</li>
              )}
              {carta.level && <li><strong>Nivel:</strong> {carta.level}</li>}
              {carta.atk !== undefined && <li><strong>ATK:</strong> {carta.atk}</li>}
              {carta.def !== undefined && <li><strong>DEF:</strong> {carta.def}</li>}
              {carta.archetype && (
                <li><strong>Arquetipo:</strong> {carta.archetype}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartaModal