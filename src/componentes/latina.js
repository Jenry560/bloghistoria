import { IoMdMenu } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import '../stilos/latina.css'

// const bolsa = new URL("../imagenes/bolsa.png",import.meta.url);

import ReactPlayer from "react-player";

const video1 = new URL("../imagenes/video1.mp4",import.meta.url)


function Latina() {
    const [clastState, setClastState] = useState(false);
    
    function handClick(){
        setClastState(clastState => !clastState);
    }

    let check = clastState ? "nav__link nav__link--menu nav__link--show" : "nav__link nav__link--menu";
    return(
        <header className="hero1">
        <nav className="nav2 container">
            <div className="nav__logo">
                <h2 className="nav__title">La migracion</h2>
            </div>
            <ul className={`${check}`}>
            <li className="nav__items">
                    <a href="/#index.html" className="nav__links" onClick={handClick} >inicio</a>
                </li>
                <li className="nav__items">
                    <a href="/#knowledge" className="nav__links" onClick={handClick}>acerca de</a>
                </li>
                <li className="nav__items">
                    <a href="/#inversiones" className="nav__links" onClick={handClick}>Temas</a>
                </li>
                <li className="nav__items">
                    <a href="/#footer" className="nav__links" onClick={handClick}>Integrantes</a>
                </li>
                <IoMdCloseCircleOutline className="nav__close"  alt="imagen" onClick={handClick}/>
            </ul>
            <div className="nav__menu">
               <IoMdMenu className="nav__img" alt="menu-imagen"onClick={handClick}/>
            </div>
        </nav>
        <section className="hero__container1 container1">
            <div className="cont1">
            <h1 className="hero__title1">La migración internacional desde y hacia América Latina</h1>
             <p className="hero__paragraph1">Las dos fases de globalización de fines del siglo XIX y de fines del siglo XX, así como la desglobalización del período 1913-1945, fueron acontecimientos económicos importantes que afectaron de modo significativo las corrientes migratorias a nivel mundial y particularmente a nivel latinoamericano. En esta sección se realiza un análisis de esas tendencias.</p>
             <p className="hero__paragraph1">Sin embargo, también es importante reconocer los desafíos que la migración plantea. La falta de oportunidades en los países de origen puede llevar a la fuga de talentos y a la desintegración de comunidades. Además, la migración irregular puede exponer a los migrantes a situaciones peligrosas y vulnerables, y la integración exitosa en los países de destino puede ser un proceso complejo.</p>   
             <p className="hero__paragraph1">En última instancia, la migración en América Latina refleja la complejidad y la interconexión de los desafíos y oportunidades que enfrenta la región. A medida que los gobiernos y las sociedades trabajan juntos para abordar los aspectos positivos y mitigar los desafíos, es crucial fomentar enfoques equitativos y humanos que reconozcan la dignidad y los derechos de todos los individuos, independientemente de su origen o estatus migratorio.</p>  
            
             <ReactPlayer url={video1} className="png2" controls/>
            </div>
            </section>
            
    </header>
    )
};
export default Latina