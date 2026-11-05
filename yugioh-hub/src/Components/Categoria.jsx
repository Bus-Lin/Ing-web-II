import { categoriesData } from '../Data/Decksdata';

export default function Categories() {
  return (
    <section className="py-4 bg-dark border-bottom border-secondary text-white">
      <div className="container text-center">
        <h3 className="mb-3 text-warning fw-bold">Explora por Categorías</h3>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {categoriesData.map((category, index) => (
            <button key={index} className="btn btn-outline-warning rounded-pill px-3">
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}