import React from 'react'
import Entrada4x4 from '../../utils/entradas'
import { useLocation } from 'react-router-dom';
import { useState } from 'react'

const MinutosLibres = ({mc1, mc2, onSaveEntradas, numEnt = 6,onSaveNEntr, listValuesMC1, listValuesMC2}) => {
  
  const location = useLocation();

  const [entradas, setEntradas] = useState(numEnt)

  const renderEntrada = () => {
    onSaveNEntr(entradas)
  }

  const handleChangeEntradas = (idMC, index, value) => {
   onSaveEntradas(idMC, index, value)
  }

  
  return (
    <div>
        {renderEntrada()}
        <div className='titulo-mcs'>
            <span>{mc1}</span>
            <span>{mc2}</span>
          </div>  
        <div className='entradas-votacion'>
          <div className='separacion-entradas'>
            <Entrada4x4 mc={0} onSaveEntradas={handleChangeEntradas} listValuesMC={listValuesMC1} />
          </div>
          <div className='separacion-entradas'>
            <Entrada4x4 mc={1} onSaveEntradas={handleChangeEntradas} listValuesMC={listValuesMC2}/>
          </div>
        </div>
    </div>
  )
}

export default MinutosLibres
