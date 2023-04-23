import React from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import imgJuez from './media/Frame 15.png'
import { useState, useEffect } from 'react';

const TablaTorneos = () => {
    const [jueces, setJueces] = useState([])

  const getJueces = async() => {
    try {
      let result = await fetch('http://localhost:5000/api/competencia', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
      if (result.data != null) {
        console.log(result.data)
        setJueces(result.data)
      } else {
        console.log('warning', 'Error, no se encuentra la venta asociada.')
      }
    } catch (error) {
      return error
    }}

  useEffect(() => {
    getJueces()
  }, [])
  
  


  return (
    <div>
        <MDBTable striped hover align='middle' >
      <MDBTableHead>
        <tr>
            <th scope='col'>Nombre/AKA del Juez</th>
            <MDBBtn color='link' rounded size='sm'>
                Agregar Juez
            </MDBBtn>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {jueces.map((juez,index) => {
            return (
                <tr>
                    <td>
                        <img src={imgJuez}></img>
                        {juez.aka_juez}
                    </td>
                </tr>
            );
        })}
      </MDBTableBody>
    </MDBTable>
    </div>
  )
}

export default TablaTorneos