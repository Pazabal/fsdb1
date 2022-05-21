import React,{useState} from 'react';
import './index.css';
import AgregarTareas from '../AgregarTareas';
import TareaIndividual from '../TareaIndividual';

function CajaCentral() {

    const [tareas, setTareas] = useState([])
    console.log(tareas);

    return(
        <div className="caja-central w-[90%] items-center bg-white rounded-[5px] flex flex-col py-[10px]">
            <h1 className="text-[24px] font-bold">Lista de tareas!</h1>

           <AgregarTareas funcionAgregar={(valor) => setTareas([...tareas, valor])} />

            <h3 className="text-[20px] font-bold">Tareas</h3>

            <div className="flex flex-col w-full items-center">

                {tareas.map((texto) => <TareaIndividual text={texto} color="#9c1f27"/>)}
                {/* <TareaIndividual texto="Tocar la guitarra" color="#9c1f27"/>

                <TareaIndividual texto="Tocar el piano" color="#d9d023"/>

                <TareaIndividual texto="Tocar la flauta" color="#32a852"/> */}

            </div>
        </div>


    )
}

export default CajaCentral;