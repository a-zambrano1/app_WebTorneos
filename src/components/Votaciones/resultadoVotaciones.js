import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import { toast } from 'react-toastify'

const ResultadoVotaciones = ({resultado1, resultado2}) => {
  
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
    </div>
  )
}

export default ResultadoVotaciones
