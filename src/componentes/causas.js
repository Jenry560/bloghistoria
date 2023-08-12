import { IoMdMenu } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import '../stilos/causas.css'


import ReactPlayer from "react-player";

const video3 = new URL("../imagenes/video3.mp4",import.meta.url)

// const bit = new URL("../imagenes/wallet.png",import.meta.url);


function HeaderC() {
    const [clastState, setClastState] = useState(false);
    
    function handClick(){
        setClastState(clastState => !clastState);
    }

    let check = clastState ? "nav__link nav__link--menu nav__link--show" : "nav__link nav__link--menu";
    return (
        <header className='heroX'>
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
        <section className="hero__containerX containerx">
            <div className="contX">
            <h1 className="hero__titleX">Las emigraciones y sus causas junto a la globalización</h1>
             <p className="hero__paragraphX">La primera fase de la globalización, desde aproximadamente 1870 hasta 1913, vino acompañado de grandes flujos migratorios desde Europa a los países del Nuevo Mundo. En contraste, en la segunda fase de la globalización de fines del siglo XX la migración internacional enfrenta, principalmente en los países desarrollados, regímenes de inmigración más restrictivos. En América Latina, durante la primera fase, Argentina fue el más importante receptor de migrantes europeos.</p>
             <p className="hero__paragraphX"> Cerca de siete millones de europeos llegaron al país en ese período, en respuesta a las atractivas oportunidades económicas de la belle époque argentina de fines del siglo XIX e inicios del XX. En cambio, en las últimas décadas del siglo XX Argentina se transformó en país de emigración neta al restodel mundo, particularmente de personas de alto nivel educativo. Este artículo presenta estimaciones econométricas de  patrones migratorios hacia y desde Argentina en el siglo XX y analiza los determinantes de los flujos migratorios internacionales en América Latina en general, incluyendo los patrones de inmigración intrarregional, particularmente entre países limítrofes.</p>
             
             <ReactPlayer url={video3} className="png2" controls/>
            </div>
            </section>
    </header >
    );
}


function Causas(){
    return(
        <>
        <HeaderC/>
        </>
    )
}

export default Causas