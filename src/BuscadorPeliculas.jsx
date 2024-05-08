import React, { useState } from 'react'

const BuscadorPeliculas = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL
    const apiKey = import.meta.env.VITE_API_KEY

    const [busqueda, setBusqueda] = useState('')
    const [peliculas, setPeliculas] = useState([])

    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchPeliculas()
    }

    const fetchPeliculas = async() => {
        try {
            const response = await fetch(`${baseUrl}?query=${busqueda}&api_key=${apiKey}`)
            const data = await response.json()
            setPeliculas(data)
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='container'>
            <h1 className='title'>Buscador de Películas</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder='Escribí una película'
                    value={busqueda}
                    onChange={handleInputChange}
                />
                <button type='submit' className='search-button'>Buscar</button>
            </form>
        </div>
    )
}

export default BuscadorPeliculas