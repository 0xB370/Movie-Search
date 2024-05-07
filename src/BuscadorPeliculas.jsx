import React from 'react'

const BuscadorPeliculas = () => {
    return (
        <div className='container'>
            <h1 className='title'>Buscador de Películas</h1>
            <form>
                <input 
                    type="text"
                    placeholder='Escribí una película'
                />
                <button type='submit' className='search-button'>Buscar</button>
            </form>
        </div>
    )
}

export default BuscadorPeliculas