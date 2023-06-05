import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import { toast } from 'react-toastify'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from '@mui/material'


const ResultadoVotaciones = ({mc1, mc2, resultado1, resultado2}) => {
  
  const [open, setOpen] = React.useState(false);
  const [resultado, setResultado] = useState("");

  const calcularResultados = () => {
    if(resultado1 === 0 && resultado2 === 0){
      setResultado("No hay votos")
      setOpen(true)
    }else if(resultado1 - resultado2 > 1.5){
      setResultado(mc1)
      setOpen(true)
    }else if(resultado2 - resultado1 > 1.5){
      setResultado(mc2)
      setOpen(true)
    }else{
      setResultado("Replica")
      setOpen(true)
    }
  }

  const guardar = () => {
    if(resultado1 === 0 && resultado2 === 0){
      toast.success('Guardado con exito')
    }else{
      toast.error('Error al guardar')
    }
  }
  
  return (
    <div >
      <span className='titulo-resultados'>RESULTADOS</span>
      <div className='recuadro-resultado texto-resultado'>
        <span>{resultado1}</span>
        <span>{resultado2}</span>
      </div>
      <MDBBtn type='success' className='btn btn-success' onClick={() => calcularResultados()}>Obtener Resultados</MDBBtn>
      <Modal
      show={open}
      onHide={() => setOpen(false)}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <Modal.Header closeButton>
        <Modal.Title>
          Resultado de las Votaciones
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>{resultado}</span>
      </Modal.Body>
      <Modal.Footer>
          <br></br>
          <br></br>
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

export default ResultadoVotaciones
