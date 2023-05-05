import React from 'react'

const ResultadoVotaciones = ({resultado1, resultado2}) => {
  return (
    <div>
      <span className='titulo-resultados'>RESULTADOS</span>
      <div className='recuadro-resultado texto-resultado'>
        <span>{resultado1}</span>
        <span>{resultado2}</span>
      </div>
    </div>
  )
}

export default ResultadoVotaciones
