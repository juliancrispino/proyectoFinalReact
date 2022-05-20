import React from "react";
import { Link } from "react-router-dom";


const DetailPelicula = ({ seleccion, setVistas, vistas }) => {

    let imgUrl = "https://image.tmdb.org/t/p/w500";

    if(seleccion){

        return (
    
            <div className="detallePeli">
                <h1>{seleccion.title}</h1>
                <h5>Fecha de lanzamiento: {seleccion.release_date}</h5>
                <p>Calificacion: {seleccion.vote_average}</p>
                <Link className="detalle regresar" to="/">Regresar</Link>
                <div className="peliYResumen">
                    <img src={imgUrl + seleccion.poster_path} />
                    <p>{seleccion.overview}</p>
                </div>
            </div>
        );
    }
};

export default DetailPelicula;
