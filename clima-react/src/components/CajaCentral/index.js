import React from "react";
import CitiesTab from "./CitiesTab";

function CajaCentral () {
    return (
        <>
            <div className="w-1/2 h-1/2 bg-green-600 flex justify-around items-start">
                <CitiesTab
                    cities={[
                        {name: "Montevideo"},
                        {name: "Bogota"},
                        {name: "Buenos Aires"},
                    ]}
                />
            </div>
        </>
    )
}
export default CajaCentral;