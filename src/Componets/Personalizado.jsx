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

      <div className="pasteleria__intro">
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
              <h3 className="pasteleria__paso-titulo">{paso.titulo}</h3>
            </div>
            );
          })}
        </div>
      </div>

      {/* IMAGEN BANNER — ocupa todo el ancho */}
      <div className="pasteleria__banner">
        <img
          src="img/pasteleria.webp"
          alt="Pastelería Eluney"
          className="pasteleria__banner-imagen"
        />
        <div className="pasteleria__banner-overlay">
          <p className="pasteleria__banner-texto">Hecho con amor, entregado con pasión</p>
        </div>
      </div>

      
      
               
                
              
           
         
     
  

    </section>
  );
}
          