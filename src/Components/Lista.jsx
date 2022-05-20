import React from 'react'
import { useEffect, useState } from 'react'
import CardPelicula from './CardPelicula'


const Lista = ({filtro, seleccion, setSeleccion}) => {
    
    let url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e5d7bd721c16d0fb25c3647492515e0c"
    
    const [pelis, setPelis] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {setPelis(data.results)})
        }, [])
        
    

    return (
        <div className='listaPeliculas' >
            {pelis.filter((el) => el.title.toLowerCase().includes(filtro.toLowerCase())).map((el) => <CardPelicula el={el} key={el.id} setSeleccion={setSeleccion} />) }
        </div>
        )
}

export default Lista