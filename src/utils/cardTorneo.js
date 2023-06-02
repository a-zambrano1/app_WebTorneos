import React from 'react'
import torneo_logo from '../media/torneo_logo.png'
import borrar from '../media/borrar.png'
import cerrar_sesion from '../media/cerrar-sesion.png'
import { useNavigate } from 'react-router-dom'

const CardTorneo = ({nombreTorneo}) => {
  
  const navigate = useNavigate();
  
  return (
    <div className='card-torneo'>
        <img src={torneo_logo} width={45}/>
        <p style={{color:'white'}}>{nombreTorneo}</p>
        <div>
            <img src={borrar} width={30} />
            <img src={cerrar_sesion} width={30} onClick={() => navigate('/adminInicio')}/>
        </div>
            
    </div>
  )
}

export default CardTorneo