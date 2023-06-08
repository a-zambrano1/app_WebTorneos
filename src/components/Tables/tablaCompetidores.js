import React from 'react'
import { MDBInput, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import imgJuez from '../../media/Frame 15.png'
import { getAuth } from 'firebase/auth';
import Modal from 'react-bootstrap/Modal'
import { Button } from '@mui/material'
import { toast } from 'react-toastify';
import { useIdTorneoStore } from '../../utils/EstadosGlobales'



const TablaCompetidores = () => {
  const auth = getAuth();
  const email_admin = auth.currentUser.email;
  const nameTournament = 'resiliencia'   
  const [nuevoCompetidor, setNuevoCompetidor] = useState('')
  const [limiteParticipantes,setLimiteParticipantes] = useState(0)
  const {idTorneo} = useIdTorneoStore()

  const [open, setOpen] = useState(false)

      const [competidores, setCompetidores] = useState([])

      const getParticipantes = async() => {
        try {
          let result = await fetch('http://localhost:5000/api/torneos/busqueda/participantes/' + idTorneo, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((result) => result.json())
          if (result != null) {
            setLimiteParticipantes(result.data.numero_participantes)
            setCompetidores(result.data.participantes)
          } else {
            toast.error('Error, no se encuentra el torneo.')
          }
        } catch (error) {
          return error
        }}
    

      useEffect(() => {
        getParticipantes();
      }, [])




      const guardarNuevoCompetidor = async (nuevoCompetidor) => {
        try {
          let result = await fetch('http://localhost:5000/api/torneos/participantes/' +idTorneo+'/'+nuevoCompetidor, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((result) => result.json())
          if (result != null) {
            toast.success("Datos Cargados")
            await getParticipantes()
            setOpen(false)
          } else {
            toast.warn('Error, no se guardó el competidor.')
          }
        } catch (error) {
          return error
        }
      }

          
  
  return (
    <div className='recuadro2 debug'>
      <a className='regresar' onClick={()=>window.history.back() }>« Regresar</a>
      <MDBTable stripped hover align='middle'>
        <MDBTableHead>
          <tr>
          <th>
              <MDBBtn disabled={competidores.length >= limiteParticipantes} color='success' onClick={() => setOpen(true)} rounded size='sm'>
                Agregar Participante
              </MDBBtn>
            </th>
          <th scope='col'>A.K.A del Competidor</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>  
        {competidores.map((row) => (
            <tr>
              <td><img src={imgJuez}></img></td>
              <td>{row.aka_participante}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      <Modal
      show={open}
      onHide={() => setOpen(false)}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <Modal.Header closeButton>
        <Modal.Title>
          Agregar nuevo participante
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <MDBInput
          label="Ingresar AKA del participante"
          id="nuevoCompetidor"
          style={{height:45}}
          onChange={(e) => setNuevoCompetidor(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
          <br></br>
          <br></br>
          <Button
            
            onClick={() => guardarNuevoCompetidor(nuevoCompetidor)}
          >
            Guardar
          </Button>
          <Button
            style={{
              backgroundColor: 'transparent',
              borderRadius: '100px',
              color: 'black',
            }}
            onClick={() => setOpen(false)}
          >
            Salir
          </Button>
          <br></br>
          <br></br>
        </Modal.Footer>
  </Modal>
    </div>

  )
}

export default TablaCompetidores