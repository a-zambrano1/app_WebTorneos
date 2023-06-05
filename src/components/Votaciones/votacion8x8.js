import React from 'react'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import { useState } from 'react'
import Entrada4x4 from '../../utils/entradas'

const Votacion8x8 = ({mc1, mc2, onSaveEntradas, numEnt = 0, onSaveNEntr, listValuesMC1, listValuesMC2}) => {
    
    const [entradas, setEntradas] = useState(numEnt)

    const renderEntrada = () => {
        onSaveNEntr(entradas)
    }

    const handleChangeEntradas = (idMC, index, value) => {
      onSaveEntradas(idMC, index, value)
    }
  
  return (
    <div>
        Votacion8x8
    </div>
  )
}

export default Votacion8x8