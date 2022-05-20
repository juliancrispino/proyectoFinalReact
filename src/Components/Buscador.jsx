import React from 'react'
import { Input } from 'reactstrap'

export const Buscador = ({setFiltro}) => {


    return (
        <Input className='buscador' bsSize='sm' placeholder='Ingrese pelicula a buscar...' onChange={(e) => setFiltro(e.target.value)} />    
    )
}

export default Buscador