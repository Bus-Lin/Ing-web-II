export default function Carrusel() {
  return (
    <div className="container mt-5">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Contenedor con fondo elegante y borde dorado suave */}
        <div
          className="carousel-inner p-4 rounded-5 border shadow-lg"
          style={{
            backgroundColor: "#131313",
            borderColor: "#c5a059",
          }}
        >
          {/* Imagen 1: Blue-Eyes */}
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="/imagenes/Decks/Blue-Eyes-White-Destiny.webp"
              alt="Blue-Eyes White Destiny"
              className="img-fluid d-block mx-auto"
              style={{
                height: "400px", // Altura fija estricta para evitar saltos
                width: "auto", // Mantiene la proporción de la carta
                objectFit: "contain", // Previene que la imagen se estire
                borderRadius: "8px",
                border: "2px solid rgba(76, 129, 228, 0.4)",
                boxShadow:
                  "0 15px 35px rgba(0,0,0,0.8), 0 0 20px rgba(0, 119, 255, 0.2)",
                transform: "translateY(-5px)",
              }}
            />
          </div>

          {/* Imagen 2: Dragón Rojo */}
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="/imagenes/Decks/Dragon-rojo.webp"
              alt="Dragón Rojo Archidemonio"
              className="img-fluid d-block mx-auto"
              style={{
                height: "400px", // Altura fija estricta
                width: "auto",
                objectFit: "contain",
                borderRadius: "8px",
                border: "2px solid rgba(228, 86, 86, 0.4)",
                boxShadow:
                  "0 15px 35px rgba(0,0,0,0.8), 0 0 20px rgba(235, 55, 55, 0.2)",
                transform: "translateY(-5px)",
              }}
            />
          </div>

          {/* Imagen 3: Dioses Egipcios */}
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="/imagenes/Decks/Dioses-Egipcios.jpg"
              alt="Dioses Egipcios"
              className="img-fluid d-block mx-auto"
              style={{
                height: "400px", // Altura fija estricta
                width: "auto",
                objectFit: "contain",
                borderRadius: "8px",
                border: "2px solid rgba(197, 160, 89, 0.4)",
                boxShadow:
                  "0 15px 35px rgba(0,0,0,0.8), 0 0 20px rgba(197, 160, 89, 0.2)",
                transform: "translateY(-5px)",
              }}
            />
          </div>
        </div>

        {/* Indicadores inferiores */}
        <div className="d-flex justify-content-center align-items-center mt-4">
          <div className="carousel-indicators position-relative mb-0">
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              style={{
                backgroundColor: "#c5a059",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style={{
                backgroundColor: "#c5a059",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              style={{
                backgroundColor: "#c5a059",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
              }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}