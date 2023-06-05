import React from 'react'
import { MDBInput, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import imgJuez from '../../media/Frame 15.png'
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import Modal from 'react-bootstrap/Modal'
import { Button } from '@mui/material'
import { toast } from 'react-toastify';


const TablaTorneos = () => {
  const [jueces, setJueces] = useState([])
  const [open, setOpen] = useState(false)
  const [nuevoJuez, setNuevoJuez] = useState('')
  const [newRow, setNewRow] = useState([{
    imagen:'',
    aka: '',
  }])
  const [limiteJueces, setLimiteJueces] = useState(5)




  const getJueces = async() => {
    try {
      let result = await fetch('http://localhost:5000/api/torneos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
      if (result != null) {
        console.log(result)
        setJueces(result[0].jueces)
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
      if(newRow.length <= limiteJueces){
        setNewRow([...newRow, {
          imagen:<img src={imgJuez}></img>,
          aka: nuevoJuez
        }])
        setOpen(false)
        toast.success('Nuevo juez agregado')
      }else{
        toast.warning('Error, se ha alcanzado el limite de jueces')
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
            <MDBBtn onClick={() => setOpen(true)}color='success' rounded size='sm'>
              Agregar Juez
            </MDBBtn>
          </th>
          <th scope='col'>A.K.A del Juez</th> 
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {newRow.map((row) => (
          <tr>
            <td>{row.imagen}</td>
            <td>{row.aka}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
    <MDBBtn className='buton-opciones-torneo btn-success success' rounded size='sm' >Guardar</MDBBtn>
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