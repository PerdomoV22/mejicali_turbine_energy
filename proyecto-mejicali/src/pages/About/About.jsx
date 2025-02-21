import Fotoproyecto1 from '../../assets/images/proyecto-gmd-2022.jpg';
import PanelAbout from './PanelAbout';
import HeroSection from '../../components/UI/HeroSection';
import Principles from './Principales';
import InfoSection from './InfoSection';

const About = () => {
    return (
        <>
            <HeroSection 
                src={Fotoproyecto1}
                title="¿Quiénes Somos?"
                description="Desde 2021, revolucionamos la forma en que el mundo recibe su energía. Con tecnología de vanguardia y soluciones rápidas, brindamos a las empresas la estabilidad energética que necesitan para crecer sin límites."
            />
            <PanelAbout />
            <Principles />
            <InfoSection />
        </>
    ); 
} 

export default About;