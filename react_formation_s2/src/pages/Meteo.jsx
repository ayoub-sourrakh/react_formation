import React from 'react'
import { useState } from 'react'
import '../assets/styles/pages/Meteo.css'

const Meteo = () => {

    const [inputVille, setInputVille] = useState()
    const [latVille, setLatVille] = useState()
    const [lonVille, setLonVille] = useState()
    const [tempVille, setTempVille] = useState()

    const getLatLonVille = () => {
        
        fetch('http://api.openweathermap.org/geo/1.0/direct?q='+inputVille+'&appid=c21a75b667d6f7abb81f118dcf8d4611', {method: 'GET'} )
        .then((res) => res.json())
        .then((data) => {
            setLatVille(data[0].lat);
            setLonVille(data[0].lon);
        })
    }

    const getTempVille = () => {

        fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latVille+'&lon='+lonVille+'&appid=c21a75b667d6f7abb81f118dcf8d4611', {method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            setTempVille((data.main.temp) - 273,15)
        })

    }

    const defaultParams = () => {
        setInputVille('')
        setTempVille()
    }

    const request = e => {

        e.preventDefault()

        getTempVille()

    }

  return (
    <div className='meteo'>
        <h1>Météo</h1>

        <form onSubmit={request}>
            <input type="text" onClick={defaultParams} onChange={(e) => setInputVille(e.target.value)} value={inputVille} name='ville' placeholder='Ville' />
            <button onMouseEnter={getLatLonVille} type='submit'>Go</button>
        </form>
        {
            tempVille &&
            <h3>La température à <x>{inputVille}</x> est de <x>{tempVille}</x> C°.</h3>
        }
        

    </div>
  )
}

export default Meteo