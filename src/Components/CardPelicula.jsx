import React from "react";
import { Link } from "react-router-dom";

const CardPelicula = ({ el, setSeleccion }) => {
  let img = "https://image.tmdb.org/t/p/w500";
  

  return (
    <div>
      <div className="movie">
        <img src={img + el.poster_path} className="poster" alt={el.title} />
        <div className="movie-details">
          <div className="box">
            <div className="title">{el.title}</div>
            <p className="rating">{el.vote_average}</p>
          </div>
          <Link to={`/${el.id}`} className="detalle" onClick={()=>{setSeleccion(el)}}>Detalle</Link>
        </div>
      </div>
    </div>
  );
};

export default CardPelicula;
