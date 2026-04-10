import {pasos} from '../data/Personalizado';
import {pasteleria} from '../data/Personalizado';
import '../css/Personalizado.css';
import { Palette, ChefHat, PackageCheck } from "lucide-react";

const iconos = {
  Palette: Palette,
  ChefHat: ChefHat,
  PackageCheck: PackageCheck,
};


export default function Personalizado() {
    return(
    <section className="pasteleria">

            <div className='pasteleria__header'>
                <span className='pasteleria__etiqueta'></span>
                 <h2 className="pasteleria__titulo">Pastelería Personalizada</h2>
        <p className="pasteleria__subtitulo">
          Creamos el dulce perfecto para tu momento especial. 
          Cada pedido es único, hecho con amor y dedicación artesanal.
        </p>
      </div>

      {/* PASOS */}
      <div className="pasteleria__pasos">
        {pasos.map((paso) => {
          const IconoComponente = iconos[paso.icono];

          return (
          <div key={paso.numero} className="pasteleria__paso">
            <div className="pasteleria__paso-icono">
              {IconoComponente ? <IconoComponente size={28} /> : null}
            </div>
            <span className="pasteleria__paso-numero">{paso.numero}</span>
            <h3 className="pasteleria__paso-titulo">{paso.titulo}</h3>
            <p className="pasteleria__paso-desc">{paso.descripcion}</p>
          </div>
          );
        })}
      </div>

      {/* PRODUCTOS */}
      <div className="pasteleria__productos">
        {pasteleria.map((producto) => (
          <div key={producto.nombre} className="pasteleria__card">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="pasteleria__card-imagen"/>
            <div className="pasteleria__card-info">
              <h3 className="pasteleria__card-nombre">{producto.nombre}</h3>
              <p className="pasteleria__card-desc">{producto.descripcion}</p>
              <div className="pasteleria__card-footer">
                <span className="pasteleria__card-precio">{producto.precio}</span>
                <a
                  href="https://wa.me/tunumero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pasteleria__card-btn"
                >
                  Pedir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
          