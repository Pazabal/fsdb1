import React from "react";
import City from "../City";

function CitiesTab (props) {
    <div className="flex w-full justify-around">
       {props.cities.map(city => (
           <City
                name = {city.name}
           />
       ))}
    </div>
}

export default CitiesTab;