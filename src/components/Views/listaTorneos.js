import React from 'react'
import CardTorneo from '../../utils/cardTorneo'
import { useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { MDBBtn } from 'mdb-react-ui-kit';

const ListaTorneos = () => {
 
 const navigate = useNavigate();
  
 const auth = getAuth();
 const email_admin = auth.currentUser.email;

 const  TorneoGet = async (e) =>{
  console.log("Trayendo torneos de la BD...")
  //console.log('http://localhost:5000/api/torneos/busqueda/' + email)
  try {
    let result = await fetch(
      'http://localhost:5000/api/torneos/busqueda/' + email_admin, {
          method: "get",
          headers: {
              'Content-Type': 'application/json'
          }
      })
      result = await result.json();
      console.warn(result);
  } catch (error) {
    console.log(error);
  }
}



 return (
  <div className='recuadro2 debug'>
        <div className='titulo-ultimos-torneos'>
            <span className='raprumble'>Mis 
          <span className='raprumble1'>Torneos</span>
        </span>
        </div>
        <MDBBtn rounded color='success' size='lg' onClick={(e) => TorneoGet(e)}>Recargar Torneos</MDBBtn>
        <CardTorneo nombreTorneo='Torneo 1'/>
        <MDBBtn onClick={()=>navigate('/welcome')} rounded color='success' size='lg'> Atrás</MDBBtn>
        <br/>
    </div>
  )
}

export default ListaTorneos