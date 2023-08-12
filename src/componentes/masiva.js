import { IoMdMenu } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import '../stilos/masiva.css'

// const ble = new URL("../imagenes/iman.png",import.meta.url);

import ReactPlayer from "react-player";

const video2 = new URL("../imagenes/video2.mp4",import.meta.url)


function Masiva() {
    const [clastState, setClastState] = useState(false);
    
    function handClick(){
        setClastState(clastState => !clastState);
    }

    let check = clastState ? "nav__link nav__link--menu nav__link--show" : "nav__link nav__link--menu";
    return(
        <header className="hero3">
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
        <section className="hero__container3 container3">
            <div className="cont3">
            <h1 className="hero__title3">Migracion masiva</h1>
            <p className="hero__paragraph3">Los especialistas en historia económica denominaron “primera ola de globalización” al período de libre comercio, libre movilidad del capital y predominio del patrón oro 2 en la economía mundial que se extendió desde cerca de 1870 a 1913. Este período se caracterizó también por amplias corrientes migratorias internacionales, lo que le valió el nombre de “era de la migración masiva” (Hatton y Williamson, 1998). Se estima que durante esos años aproximadamente 60 millones de personas abandonaron una Europa con escasos recursos naturales y con exceso de mano de obra, para dirigirse a países del Nuevo Mundo con recursos naturales abundantes y escasez de mano de obra, como Argentina, Australia, Brasil, Canadá, los Estados Unidos y Nueva Zelandia. Los migrantes provenían tanto de Inglaterra, Alemania y Francia como de la Europa “periférica” de esa época (los países escandinavos, España, Italia y Portugal, Polonia, Rusia, Rumania y los antiguos países del Imperio Austrohúngaro y del Imperio Otomano). Argentina fue el principal país de destino de los migrantes europeos a América Latina; allí llegaron cerca de siete millones de ellos, de los cuales unos cuatro millones regresaron a su país de origen. Uruguay, Cuba, México y Chile también recibieron un número considerable de migrantes en ese período.</p>
            <p className="hero__paragraph3">Las políticas de inmigración de los países del Nuevo Mundo durante la primera fase de globalización3 fueron, en general, liberales. Algunos de estos países, entre ellos Argentina, establecieron oficinas en Europa destinadas a incentivar y atraer las corrientes migratorias que incrementarían la oferta de mano de obra y sostendrían una rápida expansión económica. Sin embargo, con posterioridad estas políticas se fueron haciendo paulatinamente más restrictivas, sobre todo en los decenios de 1910 y 1920. La discriminación étnica (en contra de los migrantes asiáticos, sobre todo los provenientes de China) se transformó en una práctica común en varios países receptores, especialmente anglosajones, del Nuevo Mundo. Como se puede apreciar en el cuadro 1, en 1870-1913 la diferencial de ingresos per cápita entre los países de la Europa periférica, por un lado, y países del Nuevo Mundo como Estados Unidos, Canadá y Australia, por otro, era netamente favorable a estos últimos, lo que estimulaba la migración hacia esos países. En 1913, el mayor ingreso per cápita de Argentina, que excedía en 30% a los de España e Italia, creaba un fuerte incentivo económico para emigrar hacia ese país. En el mismo año, el ingreso per cápita de Uruguay también superaba a los de España e Italia, mientras que el de Chile se encontraba casi al mismo nivel del de esos dos países europeos.</p>

            <ReactPlayer url={video2} className="png2" controls/>
            </div>
            </section>
            
    </header>
    )
};
export default Masiva