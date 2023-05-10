import React from 'react'
import Entrada4x4 from '../../utils/entradas'
import { useLocation } from 'react-router-dom';

const MinutosLibres = ({mc1, mc2, onSaveEntradas}) => {
  
  const location = useLocation();
  
  return (
    <div>
        <div className='titulo-mcs'>
            <span>{mc1}</span>
            <span>{mc2}</span>
          </div>  
        <div className='entradas-votacion'>
          <div className='separacion-entradas'>
            <Entrada4x4 numEntradas={6} onSaveEntradas={onSaveEntradas} />
          </div>
          <div className='separacion-entradas'>
            <Entrada4x4 numEntradas={6} onSaveEntradas={onSaveEntradas} />
          </div>
        </div>
    </div>
  )
}

export default MinutosLibres
