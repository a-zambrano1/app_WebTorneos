import React, { useEffect } from 'react'
import CardTorneo from '../../utils/cardTorneo'
import { useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { set } from 'firebase/database';
import { toast } from 'react-toastify';

const ListaTodosTorneos = () => {
 
 const navigate = useNavigate();
  
 const auth = getAuth();
 const email_admin = auth.currentUser.email;
 const [torneos, setTorneos] = useState([]);

 const  TorneoGet = async () =>{
  console.log("Trayendo torneos de la BD...")
  console.log(email_admin)
  try {
    let result = await fetch(
      'http://localhost:5000/api/torneos/',{
          method: "get",
          headers: {
              'Content-Type': 'application/json'
          }
      })
      result = await result.json();
      const torneos = Object.values(result) 
      setTorneos(result.data);
      console.log(result.data)
  } catch (error) {
    toast.error('Error al traer torneos')
  }
}


  useEffect(() => {
    TorneoGet();
  }, [])



 return (
  <div className='recuadro2 debug'>
        <div className='titulo-ultimos-torneos1'>
          <span className='raprumble2'>Torneos</span>
        </div>
        {torneos.map((torneo,index) => <CardTorneo key={index} nombreTorneo={torneo.nombre_torneo} id_torneo={torneo._id} />)}
        <MDBBtn onClick={()=>navigate('/')} rounded color='success' size='lg'> Atrás</MDBBtn>
        <br/>
    </div>
  )
}

export default ListaTodosTorneos