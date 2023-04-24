import React from 'react'
import imgBatalla from './media/batalla.png'
import {useNavigate } from 'react-router-dom'
import NavbarAdmin from './navbarAdmin'
import HeaderAdminTorneo from './headerAdminTorneo'
const AdminTorneo = () => {
  
  const navigate = useNavigate();
  
  return (
    <div className='titulo-login'>
        <HeaderAdminTorneo />
        <NavbarAdmin/>
        <img src={imgBatalla}></img>
    </div>
  )
}

export default AdminTorneo