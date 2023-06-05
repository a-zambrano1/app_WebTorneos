import React from 'react'
import { MDBInput, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import imgJuez from '../../media/Frame 15.png'
import { getAuth } from 'firebase/auth';
import Modal from 'react-bootstrap/Modal'
import { Button } from '@mui/material'

const TablaCompetidores = () => {
  const auth = getAuth();
  const email_admin = auth.currentUser.email;
  const nameTournament = 'resiliencia'   
  const [nuevoCompetidor, setNuevoCompetidor] = useState('')
  const [newRow, setNewRow] = useState([{
    imagen:<img src={imgJuez}></img>,
    aka: '',
    puntaje: 0,
  }])

  const [open, setOpen] = useState(false)
      const [competidores, setCompetidores] = useState([])
      const getJueces = async() => {
        try {
          let result = await fetch('http://localhost:5000/api/torneos/busqueda/' + email_admin + '/' + nameTournament, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((response) => response.json())
          if (result != null) {
            console.log(result)
            setCompetidores(result[0].participantes)
          } else {
            console.log('warning', 'Error, no se encuentra el torneo.')
          }
        } catch (error) {
          return error
        }}
    
      useEffect(() => {
        getJueces()
      }, [])


      const guardarNuevoCompetidor = async() => {
        try {
          setNewRow([...newRow, {
            imagen:<img src={imgJuez}></img>,
            aka: nuevoCompetidor,
            puntaje: 0,
          }])
          setOpen(false)
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
              <MDBBtn color='success' onClick={() => setOpen(true)} rounded size='sm'>
                Agregar Participante
              </MDBBtn>
            </th>
          <th scope='col'>A.K.A del Competidor</th>
          <th>Puntaje</th>   
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        {newRow.map((row) => (
            <tr>
              <td>{row.imagen}</td>
              <td>{row.aka}</td>
              <td>{row.puntaje}</td>
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
            
            onClick={() => guardarNuevoCompetidor()}
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