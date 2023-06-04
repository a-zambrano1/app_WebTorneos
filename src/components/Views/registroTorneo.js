import { MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import React from 'react';
import { useState } from 'react';
import { getAuth } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const RegistroTorneo = () => {
  
  const [nombre_torneo, setNombreTorneo] = useState("");
  const [tipo, setTipo_Torneo] = useState("liga");
  const [descripcion, setDescripcion] = useState("");
  const [numero_fechas, setNumeroFechas] = useState("");
  const [numero_participantes, setNumeroParticipantes] = useState("");
  const [numero_jueces, setNumeroJueces] = useState("");
  const auth = getAuth();
  const email_admin = auth.currentUser.email;

  const notify = (type, message) => {
    toast[type](message)
  }

    const TorneoPost = async (e) =>{  
      console.log("Eviando informacion a la BD...")
      try {
        const result = await fetch(
          'http://localhost:5000/api/torneos/' + email_admin, {
              method: "post",
              body: JSON.stringify({nombre_torneo,tipo,numero_participantes, numero_fechas, descripcion, email_admin, numero_jueces}),
              headers: {
                  'Content-Type': 'application/json'
              }
          }).then((response) => response.json())
          if (result.data != null) {;
            console.log(result);
            toast.success('Torneo registrado con éxito')
          }else{
            if(result.status == 99){
              toast.error('Ya tienes un torneo registrado con ese nombre')
            }
            if(result.status == 100){
              toast.error('El nombre del torneo es obligatorio')
            } else if(result.status == 101){
              toast.error('Debe haber al menos un MC')
            }else if(result.status == 102){
              toast.error('Debe haber al menos una fecha')
            }else if(result.status == 103){
              toast.error('Debe haber al menos un juez')
            }  
          }
      } catch (error) {
        console.log(error);
        toast.error('Error al registrar torneo') 
      }
    }

    

  
  return (
    <div className='recuadro2 debug'>
    <div className='pag-torneo'>
      <br/>
      <div>
        <a className='regresar' onClick={()=>window.history.back() }>« Regresar</a>
      </div>
      <br/>
      <div className='opciones-login'>
        <span className='raprumble'>Rap 
          <span className='raprumble1'>Rumble</span>
        </span>
      </div>
      <div className='opciones-login'>
        <span>Registro de Torneo</span>
      </div>
      <br/>
      <div className='nombre-torneo'>
        <MDBInput className='mb-4' 
          style={{height:25, width:135}} 
          label='Nombre del torneo'
          type='text'
          id="nombre_torneo"
          onChange={(e) => setNombreTorneo(e.target.value)}
          ></MDBInput>
        <select className="form-select" 
          style={{height:45, width:90}} 
          aria-label="Default select example"
          type='text'
          label='Tipo de torneo'
          id="tipo"
          onChange ={(e) => setTipo_Torneo(e.target.value)}
          >
          <option value='Liga'>Liga</option>
          <option value='Copa'>Copa</option>
        </select>
      </div>
      <div className='numero-mcs'>
          <MDBInput className='mb-4'
            style={{height:40}} 
            size='lg'
            type='number'
            id="numero_participantes"
            onChange ={(e) => setNumeroParticipantes(e.target.value)}
            label='Número de MCs'
            >
          </MDBInput>
          <MDBInput className='mb-4' 
            style={{height:40}} 
            label='Número de Fechas'
            type='number'
            id="numero_fechas"
            onChange={(e) => setNumeroFechas(e.target.value)}>
          </MDBInput>
          <MDBInput className='mb-4' 
            tyle={{height:40}} 
            type='number'
            label='Número de Jueces'
            id="numero_jueces"
            onChange={(e) => setNumeroJueces(e.target.value)}>
          </MDBInput>
          <MDBInput className='mb-4' 
            style={{height:45}} 
            id="descripcion"
            type='text'
            label='Descripción del Torneo'
            onChange={(e) => setDescripcion(e.target.value)}></MDBInput>
      </div>  
      <MDBBtn onClick={(e) => TorneoPost(e)} rounded color='success' size='lg'>Registrar</MDBBtn>
    </div>
    <br/>
    </div>
  )
}

export default RegistroTorneo