import HeroSlider from "../Componets/HeroSlider";
import Nosotros from "../Componets/Nosotros";
import Personalizado from "../Componets/Personalizado";
import Carta from "../Componets/Carta";


export const Home = ({rows}) => {
    return (
        <div className="home-page">
            <section id="hero-section">
                <HeroSlider />
            </section>
            <section id="carta">
                <Carta rows={rows}/>
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