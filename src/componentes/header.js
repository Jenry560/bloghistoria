import React from "react";
import "../stilos/pagina.css"
import { IoMdMenu } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";




function Header() {
    const [clastState, setClastState] = useState(false);

    function handClick(){
        setClastState(clastState => !clastState);
    }

    let check = clastState ? "nav__link nav__link--menu nav__link--show" : "nav__link nav__link--menu";
    return (
        <header className='hero'>
        <nav className="nav container" >
            <div className="nav__logo">
                <h2 className="nav__title">La migracion</h2>
            </div>
            <ul className={`${check}`} >
                <li className="nav__items">
                    <a href="#index.html" className="nav__links" onClick={handClick} >inicio</a>
                </li>
                <li className="nav__items">
                    <a href="#knowledge" className="nav__links" onClick={handClick}>acerca de</a>
                </li>
                <li className="nav__items">
                    <a href="#inversiones" className="nav__links" onClick={handClick}>Temas</a>
                </li>
                <li className="nav__items">
                    <a href="#integrantes" className="nav__links" onClick={handClick}>Integrantes</a>
                </li>
                <IoMdCloseCircleOutline className="nav__close"  alt="imagen" onClick={handClick}/>
            </ul>
            <div className="nav__menu" >
                <IoMdMenu className="nav__img" alt="menu-imagen" onClick={handClick}/>
            </div>
        </nav>
        <section className="hero__container container">
            <h1 className="hero__title">Blog sobre la migracion, problematicas y sus diferente conceptos</h1>
             <p className="hero__paragraph">"La migración, un coraje que cruza fronteras y entrelaza culturas en busca de un mañana más prometedor."</p>
             
        </section>
    </header >
    );
}
export default Header