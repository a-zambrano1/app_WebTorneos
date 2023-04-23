import React from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import imgJuez from './media/Frame 15.png'
import { useState } from 'react';

const TablaTorneos = () => {
    const jueces = [{"id_juez":{"$oid":"640eb26555b3a92e5026d63f"},"aka_juez":"Zzatanas"},
    {"id_juez":{"$oid":"640eb26555b3a92e5026d640"},"aka_juez":"Dima"},
    {"id_juez":{"$oid":"640eb26555b3a92e5026d641"},"aka_juez":"Keco"}]
    
     
    
    

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