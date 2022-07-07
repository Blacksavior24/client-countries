import React from "react";
import {Link} from 'react-router-dom';
import './landing.css'

export default function LandingPage(){
    return(
        <div className="landing">
            <div className="cont">
            <h1>Welcome ^-^</h1>
            <p className="parra">Ingresé para ver los paises</p>
            <Link to='/countries'>
                <button className="boton">Ingresar</button>
            </Link>
            <h2 className="h2"> Application designed by</h2>
            <a href="https://www.linkedin.com/in/emerson-edward-villalta-quispe-1b09a01aa/" className="a" target="_blank" >Emerson Villalta</a>
            </div>
        </div>
    )
}