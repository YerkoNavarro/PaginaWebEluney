import React, { useRef } from 'react';
import '../css/Recomendados.css'; 
import { productos } from '../data/Productos';

const Recomendados = () => {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // Desplazamos un bloque más grande (aprox. 2 columnas) al tener 2 filas
      const scrollAmount = 680; 
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="recomendados-section">
      <div className="header-section">
        <div className="header-text">
          <h2>Recomendados</h2>
          <p>Lo más pedido de nuestra cocina y pastelería esta semana.</p>
        </div>
        <div className="header-actions">
          <a href="#menu" className="ver-menu">
        
          </a>
          
        </div>
      </div>

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
                <button className="add-btn" aria-label="Agregar">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recomendados;