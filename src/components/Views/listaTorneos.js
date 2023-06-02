import React, { useEffect } from 'react'
import CardTorneo from '../../utils/cardTorneo'
import { useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { set } from 'firebase/database';

const ListaTorneos = () => {
 
 const navigate = useNavigate();
  
 const auth = getAuth();
 const email_admin = auth.currentUser.email;
 const [torneos, setTorneos] = useState([]);

 const  TorneoGet = async () =>{
  console.log("Trayendo torneos de la BD...")
  console.log(email_admin)
  try {
    let result = await fetch(
      'http://localhost:5000/api/torneos/busquedaNombres/' + email_admin, {
          method: "get",
          headers: {
              'Content-Type': 'application/json'
          }
      })
      result = await result.json();
      const torneos = Object.values(result) 
      setTorneos(result.data);
  } catch (error) {
    console.log(error);
  }
}


  useEffect(() => {
    TorneoGet();
  }, [])



 return (
  <div className='recuadro2 debug'>
        <div className='titulo-ultimos-torneos'>
            <span className='raprumble'>Mis 
          <span className='raprumble1'>Torneos</span>
        </span>
        </div>
        {torneos.map((torneo) => <CardTorneo nombreTorneo={torneo.nombre_competencia} />)}
        <MDBBtn onClick={()=>navigate('/welcome')} rounded color='success' size='lg'> Atrás</MDBBtn>
        <br/>
    </div>
  )
}

export default ListaTorneos