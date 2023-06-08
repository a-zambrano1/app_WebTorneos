import React from 'react'
import { MDBInput, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import imgJuez from '../../media/Frame 15.png'
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import Modal from 'react-bootstrap/Modal'
import { Button } from '@mui/material'
import { toast } from 'react-toastify';
import { useIdTorneoStore } from '../../utils/EstadosGlobales'


const TablaTorneos = () => {
  const [jueces, setJueces] = useState([])
  const [open, setOpen] = useState(false)
  const [nuevoJuez, setNuevoJuez] = useState('')
  const [limiteJueces, setLimiteJueces] = useState(5)
  const {idTorneo} = useIdTorneoStore()




  const getJueces = async() => {
    try {
      let result = await fetch('http://localhost:5000/api/torneos/busqueda/jueces/' + idTorneo , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
      if (result != null) {
        setLimiteJueces(result.data.numero_jueces)
        setJueces(result.data.jueces)
      } else {
        console.log('warning', 'Error, no se encuentra el torneo.')
      }
    } catch (error) {
      return error
    }}

  useEffect(() => {
    getJueces()
  }, [])
  
  const guardarNuevoJuez = async() => {
    try {
      let result = await fetch('http://localhost:5000/api/torneos/jueces/' + idTorneo + '/' + nuevoJuez, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((result) => result.json())
      if (result != null) {
        toast.success('Datos Cargados')
        await getJueces()
        setOpen(false)
      }else{
        toast.warn('Error al guardar el nuevo juez')
      }
    } catch (error) {
      toast.error('Error al guardar el nuevo juez')
    }
  }


  return (
    <div className='recuadro2 debug'>
      <a className='regresar' onClick={()=>window.history.back() }>« Regresar</a>
        <MDBTable striped hover align='middle' >
      <MDBTableHead>
        <tr>
          <th>
            <MDBBtn disabled={jueces.length >= limiteJueces} onClick={() => setOpen(true)}color='success' rounded size='sm'>
              Agregar Juez
            </MDBBtn>
          </th>
          <th scope='col'>A.K.A del Juez</th> 
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {jueces.map((juez) => (
          <tr>
            <td><img src={imgJuez}></img></td>
            <td>{juez.aka_juez}</td>
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
          Agregar nuevo juez
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <MDBInput
          label="Ingresar AKA del juez"
          id="nuevoJuez"
          style={{height:45}}
          onChange={(e) => setNuevoJuez(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
          <br></br>
          <br></br>
          <Button
            
            onClick={() => guardarNuevoJuez()}
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

export default TablaTorneos