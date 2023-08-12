import React from "react";
import { Link } from "react-router-dom";

const causas = new URL("../imagenes/causas.jpg",import.meta.url);
const latina = new URL("../imagenes/america latina.jpg",import.meta.url);
const masiva = new URL("../imagenes/masiva.jpg",import.meta.url);
const crisis = new URL("../imagenes/crisis.jpg",import.meta.url);


function Temas(){
    return(
        <section className="information" id="inversiones">
        <div className="information__container container">
            <div className="information__texts">
                <h2 className="subtitle">Migracion y globalización</h2>
            </div>
     <div className="picture__cont">
        <figure className="information__pictures">
            <img src={causas} className="information__img" alt="causas"/>
            <div className="capa">
                <Link to="/causas" className="absolute2">Causas de las emigraciones</Link>
  
            </div>
        </figure>
        <figure className="information__pictures">
            <img src={latina} className="information__img" alt="latina"/>
            <div className="capa">
                <Link to="/latina" className="absolute">America latina</Link>
            
            </div>
        </figure>
        <figure className="information__pictures">
            <img src={masiva} className="information__img" alt="masiva"/>
            <div className="capa">
              <Link to="/masiva" className="absolute">Migracion masiva</Link>
              
            </div>
        </figure>
        <figure className="information__pictures">
            <img src={crisis} className="information__img"alt="crisis"/>
            <div className="capa">
                <Link to="/crisis" className="absolute2">Crisis y desglobalización</Link>
          
            </div>
        </figure>
     </div>
      </div>
    </section>
    )
};

export default Temas