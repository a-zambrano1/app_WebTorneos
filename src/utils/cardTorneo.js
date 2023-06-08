import React from 'react'
import torneo_logo from '../media/torneo_logo.png'
import borrar from '../media/borrar.png'
import cerrar_sesion from '../media/cerrar-sesion.png'
import { useNavigate } from 'react-router-dom'
import { useIdTorneoStore } from './EstadosGlobales'

const CardTorneo = ({nombreTorneo, id_torneo}) => {
  const {setIdTorneo} = useIdTorneoStore()
  const navigate = useNavigate();
  
  return (
    <div className='card-torneo'>
        <img src={torneo_logo} width={45}/>
        <p style={{color:'white'}}>{nombreTorneo}</p>
        <div>
            <img src={cerrar_sesion} width={30} onClick={() => {navigate('/adminInicio')
          setIdTorneo(id_torneo)}}/>
        </div>
            
    </div>
  )
}

export default CardTorneo