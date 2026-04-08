import React from 'react';
import '../css/Recomendados.css'; 
import { productos } from '../data/Productos';

const Recomendados = () => {
  return (
    <section className="recomendados-section">
      {/* Encabezado */}
      <div className="header-section">
        <div className="header-text">
          <h2>Recomendados</h2>
          <p>Lo más pedido de nuestra cocina y pastelería esta semana.</p>
        </div>
        <a href="#menu" className="ver-menu">
          Ver todo el menú &rarr;
        </a>
      </div>

      {/* Grilla de Productos */}
      <div className="cards-grid">
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