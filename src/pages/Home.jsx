import HeroSlider from "../Componets/HeroSlider";
import Nosotros from "../Componets/Nosotros";
import Personalizado from "../Componets/Personalizado";


export const Home = () => {
    return (
        <div className="home-page">
            <section id="hero-section">
                <HeroSlider />
            </section>


             <section id="servicios">
                <Personalizado />
            </section>

            <section id="nosotros">
                <Nosotros />
            </section>
            
        </div>
    )
}