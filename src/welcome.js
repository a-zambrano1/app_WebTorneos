import React from 'react'
import { useNavigate } from 'react-router-dom/dist';

const Welcome = () => {
    const navigate = useNavigate();
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
                <span>Votación Rápida</span>
            </div>
        </div>
        <div className='seccion-hacer'>
            <div>
             <span className='titulos-inicio'>Últimos Torneos</span>
         </div>
            <div className='bienvenido'>
              <span>Lista de Torneo</span>
            </div>
         </div>
        <div className='menu-opciones'>
            <button className='card-gris' onClick={()=>navigate('/registro_torneo')}> Registro Torneo</button>
        </div>
    </div>
  )
}

export default Welcome
