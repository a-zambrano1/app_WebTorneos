import React from 'react'
import CardTorneo from '../../utils/cardTorneo'
import { useNavigate } from 'react-router-dom';

const ListaTorneos = () => {
 
 const navigate = useNavigate();
 
 return (
    <div>
        <div className='titulo-ultimos-torneos'>
            <h1 style={{color:'black'}}>Tus Torneos</h1>
        </div>
        <CardTorneo nombreTorneo='Torneo 1'/>
        <CardTorneo nombreTorneo='Torneo 2'/>
        <button type="button" class="btn btn-info" onClick={() => navigate('/welcome')}>Atrás</button>
    </div>
  )
}

export default ListaTorneos