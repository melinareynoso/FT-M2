import React from "react";
import { useParams } from "react-router-dom";

// class City extends React.Component{
//     //constructor -> cuando quiero definir un estado
//     // constructor(props){
//         //super(props)
//         //this.state = {}
//     //}

//     render(){
//         return(
//             <div>Hola, soy una city!</div>
//         )
//     }
// }



function City({city}){

    if(!city) {
        alert("¡La ciudad no existe!")
        return(<div>¡La ciudad no existe!</div>)
    }

    // let params = useParams();

    return(
        <div className="ciudad">
            <div className="container">
                <h2>{city.name}</h2>
                <div className="info">
                    <div>Temperatura: {city.temp} ºC</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind} km/h</div>
                    <div>Cantidad de nubes: {city.clouds}</div>
                    <div>Latitud: {city.latitud}º</div>
                    <div>Longitud: {city.longitud}º</div>
                </div>
            </div>
        </div>
    )
}

export default City;
