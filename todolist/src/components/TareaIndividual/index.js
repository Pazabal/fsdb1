import React from 'react';

function TareaIndividual(props){
    return(
        <div className="flex justify-between w-[90%] p-[20px] my-[5px] rounded-[5px] border-[1px] border-[#BBBBBB]" style={{backgroundColor: props.color}}>
            <p>{props.text}</p>
            <button className="px-[10px] py-[5px] font-bold rounded-[5px] border-black border-[1px] bg-[#BBBBBB]">X</button>
        </div>
    )

}

export default TareaIndividual;