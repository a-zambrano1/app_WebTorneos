import React from 'react'

const RegistroTorneo = () => {
  return (
    <div className='pag-torneo'>
        <div className='bienvenido'>
            <img src='../media/micro.png'/>
            <span className='titulo-rap-rumble'>Bienvenid@ a Rap Rumble</span>    
            <span>Registro de Torneos</span>     
        </div>
        <div className='nombre-torneo'>
            <input placeholder='Nombre del Torneo'></input>
            <select>
                <option>Liga</option>
                <option>Copa</option>
            </select>
        </div>
        <div className='opciones-torneo'>
            <input placeholder='Número de MCs'></input>
            <input placeholder='Número de Fechas'></input>
            <input placeholder='Número de Jueces'></input>
            <input placeholder='Descripción del torneo'></input>
        </div>
        <button className='boton-registrar'> Registrar</button>    
    </div>
  )
}

export default RegistroTorneo