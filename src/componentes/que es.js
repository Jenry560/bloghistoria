import React from "react";
const queEs = new URL("../imagenes/que migracion.jpg",import.meta.url);

function  Que(){
    return(
        <section className="knowledge" id="knowledge"  >
            <div className="knowledge__container container">
                <div className="knowledge__texts">
                    <h2 className="subtitle">Que es la migracion?</h2>
                    <p className="about__paragraph">La migración es el movimiento de personas de un lugar a otro, ya sea dentro de un país o a través de fronteras internacionales, con el propósito de establecerse temporal o permanentemente en un nuevo lugar. Puede ser impulsada por diversas razones, como oportunidades económicas, búsqueda de seguridad, reunificación familiar o escape de conflictos.</p>
                </div>

            <figure className="knowledgepicture">
                <img src={queEs} className="knowledge__img" alt="que es"/>
            </figure>
          </div>
        </section>
        )
}

export default Que