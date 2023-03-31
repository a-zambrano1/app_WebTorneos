import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './styles.css'
import Auth from './logeo';

const inicio = () => {
  
  return (
    <div className='pag-bienvenida'>
      <div className='debug bienvenido'>
        <img src='../media/micro.png'/>
        <span className='titulo-rap-rumble'>Bienvenid@ a Rap Rumble</span>         
      </div>
      <div className='debug busqueda-torneos'>
        <input placeholder='Buscar torneo...'></input>
        <button>Botón de filtros</button>
      </div>
      <div className='debug seccion-hacer'>
        <div>
          <span className='titulos-inicio'>¿Qué quieres hacer?</span>
        </div>
        <div className='bienvenido'>
          <span>Votación Rápida</span>
        </div>
          
      </div>
      <div className='debug seccion-hacer'>
        <div>
          <span className='titulos-inicio'>Últimos Torneos</span>
        </div>
        <div className='bienvenido'>
          <span>Lista de Torneo</span>
        </div>
        
      </div>
      <div className='debug menu-opciones'>
        <button className='card-verde'> Registro Usuario</button>
        <button className='card-gris'> Registro Torneo</button>
        <button className='card-verde'> Ingreso Usuario</button>
      </div>
      <div className='debug'>
        <span>Regresar</span>
      </div>
    </div>
  )
}

export default inicio
