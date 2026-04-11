import React, { useRef } from 'react';
import '../css/Recomendados.css'; 
import { productos } from '../data/Productos';

const Recomendados = () => {
  // 1. Creamos una referencia para el contenedor de las tarjetas
  const scrollContainerRef = useRef(null);

  // 2. Función para desplazar a la derecha al hacer clic en la flecha
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // Calculamos cuánto desplazar (ancho de card + gap)
      const scrollAmount = 304; // 280px ancho + 24px gap
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth' // Desplazamiento suave
      });
    }
  };

  return (
    <section className="recomendados-section">
      {/* Encabezado */}
      <div className="header-section">
        <div className="header-text">
          <h2>Recomendados</h2>
          <p>Lo más pedido de nuestra cocina y pastelería esta semana.</p>
        </div>
        <div className="header-actions">
          <a href="#menu" className="ver-menu">
            Ver todo el menú &rarr;
          </a>
          {/* 3. Nuevo botón de flecha para desplazarse */}
          <button 
            className="scroll-arrow" 
            onClick={scrollRight} 
            aria-label="Ver más productos recomendados"
          >
            &rarr;
          </button>
        </div>
      </div>

      {/* Grilla de Productos */}
      {/* 4. Asignamos la referencia al contenedor que queremos desplazar */}
      <div className="cards-grid" ref={scrollContainerRef}>
        {productos.map((producto) => (
          <div className="card" key={producto.id}>
            <img 
              src={producto.imagen} 
              alt={producto.titulo} 
              className="card-image" 
            />
            <div className="card-content">
              <span className="tag">{producto.etiqueta}</span>
              <h3 className="card-title">{producto.titulo}</h3>
              <p className="card-desc">{producto.descripcion}</p>
              <div className="card-footer">
                <span className="price">{producto.precio}</span>
                {/* El botón '+' está oculto por CSS, no lo eliminamos */}
                <button className="add-btn" aria-label="Agregar al carrito">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recomendados;