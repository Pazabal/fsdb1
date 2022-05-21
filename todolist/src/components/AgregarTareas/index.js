import React,{useState} from 'react';

function AgregarTareas(props){

    const [inputValue, setInputValue] = useState();
    console.log(props);


    
    return(
        <div className="flex">
            <input onChange={(event) => setInputValue (event.target.value)} type="text" placeholder="Agrega una tarea..." 
            className="border-[#AAAAAA] border-[1px] py-[5px]
             pl-[5px]"></input>
            <select>
                <option disabled selected value>Prioridad</option>
                <option>Alta</option>
                <option>Media</option>
                <option>Baja</option>
            </select>
            <button onClick={() => props.funcionAgregar(inputValue)} className="bg-gray-300 border-[1px] border-black px-[5px]">Agregar!</button>
        </div>
    )
}

export default AgregarTareas;

