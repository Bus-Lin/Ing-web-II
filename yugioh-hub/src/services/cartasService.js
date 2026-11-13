const BASE_URL = 'https://db.ygoprodeck.com/api/v7'

// Opcional: con un correo, MyMemory sube el límite diario de traducción.
// Déjalo vacío ('') si no quieres usarlo.
const EMAIL_MYMEMORY = ''

export async function obtenerArquetipos() {
  const res = await fetch(`${BASE_URL}/archetypes.php`)
  if (!res.ok) throw new Error('No se pudieron cargar las categorías')
  return await res.json()
}

export async function obtenerCartasPorArquetipo(arquetipo) {
  const res = await fetch(
    `${BASE_URL}/cardinfo.php?archetype=${encodeURIComponent(arquetipo)}&sort=name`
  )
  if (!res.ok) throw new Error('No se encontraron cartas')
  const json = await res.json()
  return json.data
}

export async function obtenerCartas(num = 40, offset = 0) {
  const res = await fetch(
    `${BASE_URL}/cardinfo.php?num=${num}&offset=${offset}&sort=name`
  )
  if (!res.ok) throw new Error('No se pudieron cargar las cartas')
  const json = await res.json()
  return json.data
}

export async function buscarCartas({ texto = '', arquetipo = '', num = 40, offset = 0 } = {}) {
  const params = new URLSearchParams({ num, offset, sort: 'name' })
  if (texto) params.set('fname', texto)
  if (arquetipo) params.set('archetype', arquetipo)

  const res = await fetch(`${BASE_URL}/cardinfo.php?${params}`)
  if (res.status === 400) return [] // la API responde 400 cuando no hay coincidencias
  if (!res.ok) throw new Error('No se pudieron cargar las cartas')
  const json = await res.json()
  return json.data
}

/* ===== Traducción al español ===== */

const cacheTraducciones = new Map()

// Parte el texto en bloques de máximo ~400 caracteres (límite de la API: 500 bytes)
function dividirEnBloques(texto, max = 400) {
  const piezas = texto.split(/(?<=[.!?;:,])\s+|\n+/).filter(Boolean)
  const bloques = []
  let actual = ''
  for (const pieza of piezas) {
    if (actual && (actual + ' ' + pieza).length > max) {
      bloques.push(actual)
      actual = pieza
    } else {
      actual = actual ? `${actual} ${pieza}` : pieza
    }
  }
  if (actual) bloques.push(actual)
  return bloques
}

export function traducirAEspanol(texto) {
  // Se guarda la promesa para no repetir una traducción que ya está en curso
  if (cacheTraducciones.has(texto)) return cacheTraducciones.get(texto)

  const promesa = (async () => {
    const traducidos = []
    for (const bloque of dividirEnBloques(texto)) {
      const params = new URLSearchParams({ q: bloque, langpair: 'en|es' })
      if (EMAIL_MYMEMORY) params.set('de', EMAIL_MYMEMORY)

      const res = await fetch(`https://api.mymemory.translated.net/get?${params}`)
      if (!res.ok) throw new Error('No se pudo traducir la descripción')

      const json = await res.json()
      const traducido = json.responseData?.translatedText || ''
      // El servicio a veces avisa del límite diario dentro del propio texto
      if (Number(json.responseStatus) !== 200 || /MYMEMORY WARNING/i.test(traducido)) {
        throw new Error('Se alcanzó el límite de traducciones de hoy. Intenta más tarde.')
      }
      traducidos.push(traducido)
    }
    return traducidos.join(' ')
  })()

  cacheTraducciones.set(texto, promesa)
  promesa.catch(() => cacheTraducciones.delete(texto)) // si falla, se podrá reintentar
  return promesa
}