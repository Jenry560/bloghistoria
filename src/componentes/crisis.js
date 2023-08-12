import { IoMdMenu } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import '../stilos/crisis.css'
import ReactPlayer from "react-player";

const video4 = new URL("../imagenes/video4.mp4",import.meta.url)


function Crisis() {
    const [clastState, setClastState] = useState(false);
    
    function handClick(){
        setClastState(clastState => !clastState);
    }

    let check = clastState ? "nav__link nav__link--menu nav__link--show" : "nav__link nav__link--menu";
    return(
        <header className="hero2">
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
        <section className="hero__container2 container2">
            <div className="cont2">
            <h1 className="hero__title2">Crisis y desglobalización</h1>
             <p className="hero__paragraph2">El avance de la primera fase de la globalización e integración de los mercados de trabajo a nivel internacional. En 1914 empezaron 30 años de inestabilidad económica y política, principalmente en Europa, durante los cuales se sucedieron la primera guerra mundial, la altísima inflación de los años veinte, la crisis económica de los treinta y la segunda guerra mundial. Esta serie de turbulencias redundó en políticas de inmigración cada vez más restrictivas. Estados Unidos estableció cuotas a la inmigración en 1921 y 1924, con la consiguiente reducción de las corrientes migratorias procedentes de Europa. Los migrantes reaccionaron cambiando ese destino por Brasil y Argentina. Este último país recibió unos tres millones de europeos en el decenio de 1920, aunque alrededor de dos millones regresaron a su país de origen (Chiswick y Hatton, 2002). Paralelamente, la Unión Soviética adoptó medidas para restringir la emigración, lo que redujo su participación en las corrientes migratorias mundiales con destino a América.</p>
             
    
             <ReactPlayer url={video4} className="png2" controls/>
            </div>
            </section>
            
    </header>
    )
};
export default Crisis