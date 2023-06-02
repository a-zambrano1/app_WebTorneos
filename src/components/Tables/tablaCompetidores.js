import React from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import imgJuez from '../../media/Frame 15.png'
import { getAuth } from 'firebase/auth';

const TablaCompetidores = () => {
  const auth = getAuth();
  const email_admin = auth.currentUser.email;
  const nameTournament = 'UdeRap 2023'   
      const [competidores, setCompetidores] = useState([])
      const getJueces = async() => {
        try {
          let result = await fetch('http://localhost:5000/api/torneos/busqueda/' + email_admin + '/' + nameTournament, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((response) => response.json())
          if (result != null) {
            console.log(result)
            setCompetidores(result[0].participantes)
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
        <MDBTable striped hover align='middle' >
      <MDBTableHead>
        <tr>
            <th scope='col'>Nombre/AKA del Competidor</th>
            <th>
              <MDBBtn color='success' rounded size='sm'>
                Agregar Participante
              </MDBBtn>
            </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {competidores.map((competidores,index) => {
            return (
                <tr>
                    <td>
                        <img src={imgJuez}></img>
                    </td>
                    <td>
                        {competidores.aka_participante}
                    </td>
                </tr>
            );
        })}
      </MDBTableBody>
    </MDBTable>
    </div>
  )
}

export default TablaCompetidores