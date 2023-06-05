import React from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import imgJuez from '../../media/Frame 15.png'
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
    <div className='recuadro2 debug'>
      <a className='regresar' onClick={()=>window.history.back() }>« Regresar</a>
        <MDBTable striped hover align='middle' >
      <MDBTableHead>
        <tr>
          <th>
            <MDBBtn color='success' rounded size='sm'>
              Agregar Juez
            </MDBBtn>
          </th>
          <th scope='col'>A.K.A del Juez</th> 
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      <tr>
            <td>
              <img src={imgJuez}></img>
            </td>
            <td>
              <span>Zzatanas</span>
            </td>
          </tr>
          <tr>
            <td>
              <img src={imgJuez}></img>
            </td>
            <td>
              <span>Jay Jay</span>
            </td>
          </tr>
            <tr>
            <td>
              <img src={imgJuez}></img>
            </td>
            <td>
              <span>Zenaku</span>
            </td>
          </tr>
      </MDBTableBody>
    </MDBTable>
    </div>
  )
}

export default TablaTorneos