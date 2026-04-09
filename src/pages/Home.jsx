import HeroSlider from "../Componets/HeroSlider";
import Nosotros from "../Componets/Nosotros";


export const Home = () => {
    return (
        <div className="home-page">
            <section id="hero-section">
                <HeroSlider />
            </section>


            <section id="nosotros">
                <Nosotros />
            </section>
        </div>
    )
}