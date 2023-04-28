import React from 'react'
import Entrada4x4 from './entradas'
import HeaderVotar from './HeaderVotar'
import CerrarVotar from './cerrarVotar'

const MinutosLibres = () => {
  return (
    <div>
      <CerrarVotar/>
      <HeaderVotar/>  
      <div className='titulo-mcs'>
            <span>5inko</span>
            <span>Zzata</span>
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
