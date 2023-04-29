import React from 'react'
import Entrada4x4 from './entradas'
import { useLocation } from 'react-router-dom';

const MinutosLibres = ({mc1, mc2}) => {
  
  const location = useLocation();
  
  return (
    <div>
        <div className='titulo-mcs'>
            <span>{mc1}</span>
            <span>{mc2}</span>
          </div>  
        <div className='entradas-votacion'>
          <div className='separacion-entradas'>
            {Array.from({length: 6}, (_,i) => <Entrada4x4 key={i} />)}
          </div>
          <div className='separacion-entradas'>
            {Array.from({length: 6}, (_,i) => <Entrada4x4 key={i} />)}
          </div>
        </div>
    </div>
  )
}

export default MinutosLibres
