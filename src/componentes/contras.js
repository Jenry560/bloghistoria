
import { BsArrowLeft} from "react-icons/bs";
import { BsArrowRight} from "react-icons/bs";



const positivo = new URL("../imagenes/positivo.jpg",import.meta.url);
const negativos = new URL("../imagenes/negativo.jpg",import.meta.url);






function Contras(){
    const ChangePosition = (add)=>{
        const sliders =[...document.querySelectorAll(".testimony__body")]
        let value;
        
        const currentTestimony = document.querySelector(".testimony__body--show").dataset.id;
        value = Number(currentTestimony)
        value+= add;
        
        sliders[Number(currentTestimony)-1].classList.remove("testimony__body--show")
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add("testimony__body--show")
    }
   
    return(
        <section className="testimony">
        <h1 className="subtitle1">Aspectos positivos y negativos</h1>
        <div className="testimony__container container" >
            <BsArrowLeft  className="testimony__arrow " id="before" onClick={()=>ChangePosition(-1)} />
            <section className="testimony__body testimony__body--show" data-id="1" >
                <div className="testimony__text">
                    <h2 className="letras green" >Postivos<br/><span className="testimony__course">Contribución a la diversidad cultural y social</span></h2>
                    <p className="testimony__review">“La migración es positiva debido a su capacidad para enriquecer la diversidad cultural y social de una región. Cuando personas de diferentes orígenes se mudan a un nuevo lugar, traen consigo sus tradiciones, idiomas, alimentos y perspectivas únicas. Esto puede conducir a un ambiente más inclusivo y tolerante, donde las interacciones entre personas de diferentes culturas promueven la comprensión mutua y la apreciación por la diversidad.</p>
                </div>
                <figure className="testimony__picture">
                    <img src={positivo} className="testimony__img" alt="padre"/>
                </figure>
            </section>
            <section className="testimony__body" data-id="2">
                <div className="testimony__text">
                    <h2 className="letras red">Negativos<br/><span className="testimony__course" color="red">Presión sobre los servicios públicos y recursos</span></h2>
                    <p className="testimony__review">“Un aspecto negativo de la migración es que puede ejercer presión sobre los servicios públicos y recursos disponibles en una región. Si una gran cantidad de personas llega a una comunidad en un corto período de tiempo, puede resultar en una escasez de viviendas asequibles, dificultades para acceder a atención médica y educación de calidad, así como congestión en las infraestructuras de transporte. Esto puede afectar tanto a los migrantes como a los residentes locales, creando tensiones y desafíos para satisfacer las necesidades básicas de todos.</p>
                </div>
                <figure className="testimony__picture">
                    <img src={negativos} className="testimony__img" alt="padre2"/>
                </figure>
            </section>
        
            <BsArrowRight className="testimony__arrow testimony__arrow--1" id="next" onClick={()=>ChangePosition(1)}/>
        </div>
        
    </section>

    )
};

export default Contras
