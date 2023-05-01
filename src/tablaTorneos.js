import React from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import imgJuez from './media/Frame 15.png'
import { useState, useEffect } from 'react';

const TablaTorneos = () => {
    const [jueces, setJueces] = useState([])

  const getJueces = async() => {
    try {
      let result = await fetch('http://localhost:5000/api/torneos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
      if (result != null) {
        console.log(result)
        setJueces(result[0].jueces)
      } else {
        console.log('warning', 'Error, no se encuentra el torneo.')
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
            <th>
              <MDBBtn color='link' rounded size='sm'>
                Agregar Juez
              </MDBBtn>
            </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {jueces.map((juez,index) => {
            return (
                <tr>
                    <td>
                        <img src={imgJuez}></img>
                    </td>
                    <td>
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