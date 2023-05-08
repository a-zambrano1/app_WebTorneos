import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'

const ResultadoVotaciones = ({resultado1, resultado2}) => {
  return (
    <div>
      <span className='titulo-resultados'>RESULTADOS</span>
      <div className='recuadro-resultado texto-resultado'>
        <span>{resultado1}</span>
        <span>{resultado2}</span>
      </div>
      <MDBBtn className='btn btn-success'>Guardar</MDBBtn>
    </div>
  )
}

export default ResultadoVotaciones
