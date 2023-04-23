import React from 'react'
import { useNavigate } from 'react-router'
import './styles.css'
import Auth from './logeo';
import rapero from './media/rapper.png'
import micro from './media/micro.png'

const Inicio = () => {
  
  const navigate = useNavigate()


  return (
    <div className='pag-bienvenida'>
      <div className='bienvenido'>
        <img src = {micro} width = {96} height = {94}/>
        <span className='titulo-rap-rumble'>Bienvenid@ a Rap Rumble!</span>         
      </div>
      <div className='busqueda-torneos'>
        <input placeholder=' 🔍︎ Buscar torneo...'></input>
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
        <img src = {rapero} width = {92} height = {90}/>
        </button>
      </div>
    </div>
  )
}

export default Inicio
