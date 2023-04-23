import React from 'react'
import { useNavigate } from 'react-router'
import './styles.css'
import Auth from './logeo';
import rapero from './media/rapper.png'
import micro from './media/google-logo.png'

const Inicio = () => {
  
  const navigate = useNavigate()


  return (
    <div className='pag-bienvenida'>
      <div className='busqueda-torneos'>
        <input placeholder='Buscar torneo...'></input>
        <button>Botón de filtros</button>
      </div>
      <div className='seccion-hacer'>
        <div>
          <span className='titulos-inicio'>¿Qué quieres hacer?</span>
        </div>
        <div className='bienvenido'>
          <span className='titulos-inicio1'>¡Votación Rápida!</span>
        </div>
          
      </div>
      <div className='seccion-hacer'>
        <div>
          <span className='titulos-inicio'>Últimos Torneos!</span>
        </div>
        <div className='bienvenido'>
          <span className='titulos-inicio1'>Lista de Torneos</span>
        </div>
        
      </div>
      <div className='menu-opciones'>
        <button className='card-verde' onClick={()=>navigate('/login')}>Ingreso Usuario
          <img src = {rapero} width = {96} height = {94}/>
        </button>
      </div>
    </div>
  )
}

export default Inicio
