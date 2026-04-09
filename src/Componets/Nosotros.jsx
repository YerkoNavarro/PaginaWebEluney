import { useState } from "react";
import "../css/Nosotros.css";

const imagenes = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
];

const caracteristicas = [
  {
    icono: "🍽️",
    titulo: "Calidad Innegociable",
    descripcion: "Solo trabajamos con productores locales para asegurar la frescura diaria.",
  },
  {
    icono: "❤️",
    titulo: "Servicio con Pasión",
    descripcion: "Nuestra cocina es abierta porque no tenemos nada que ocultar, solo amor por dar.",
  },
  {
    icono: "🕐",
    titulo: "Historia y Tradición",
    descripcion: "Desde 2015 rescatando recetas familiares y dándoles un giro moderno.",
  },
];

export default function Nosotros() {
  const [actual, setActual] = useState(0);

  const irAnterior = () => {
    setActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  const irSiguiente = () => {
    setActual((prev) => (prev + 1) % imagenes.length);
  };

  return (
    <section className="nosotros">

      {/* COLUMNA IZQUIERDA: texto */}
      <div className="nosotros__texto">
        <span className="nosotros__etiqueta">NUESTRA ALMA</span>
        <h2 className="nosotros__titulo">Sobre Nosotros</h2>
        <p className="nosotros__parrafo">
          Eluney nació de una pasión compartida por el fuego del hogar y la
          precisión de la pastelería. Somos un espacio donde la velocidad del
          fast food no compromete la calidad artesanal. Cada ingrediente es
          seleccionado con rigor, cada masa es amasada a mano y cada cliente
          es tratado como parte de nuestra familia.
        </p>

        {/* Lista de características */}
        <ul className="nosotros__lista">
          {caracteristicas.map((item, index) => (
            <li key={index} className="nosotros__item">
              <span className="nosotros__icono">{item.icono}</span>
              <div>
                <h3 className="nosotros__item-titulo">{item.titulo}</h3>
                <p className="nosotros__item-desc">{item.descripcion}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* COLUMNA DERECHA: slider de imágenes */}
      <div className="nosotros__slider">
        <img
          src={imagenes[actual]}
          alt={`foto ${actual + 1}`}
          className="nosotros__imagen"
        />

        {/* Botones */}
        <button className="nosotros__btn nosotros__btn--izq" onClick={irAnterior}>
          &#8592;
        </button>
        <button className="nosotros__btn nosotros__btn--der" onClick={irSiguiente}>
          &#8594;
        </button>

        {/* Puntos */}
        <div className="nosotros__puntos">
          {imagenes.map((_, index) => (
            <button
              key={index}
              onClick={() => setActual(index)}
              className={`nosotros__punto ${index === actual ? "nosotros__punto--activo" : ""}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}