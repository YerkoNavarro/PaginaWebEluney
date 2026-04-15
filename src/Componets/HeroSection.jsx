import React from "react";
import "../css/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      {/* IMAGEN DE FONDO FIJA */}
      <img
        src="img/portada-1.webp" 
        alt="Hero Background"
        className="hero__imagen"
      />

      {/* Capa oscura para que el texto resalte */}
      <div className="hero__overlay" />

      {/* Contenido centrado o alineado a la izquierda */}
      <div className="hero__contenido">
        <h1 className="hero__titulo">Tu comida favorita</h1>
        <p className="hero__subtitulo">
          Desde hamburguesas jugosas hasta pastelería fina.
        </p>
        <button className="hero_cta">Ver Carta</button>
      </div>
    </section>
  );
}