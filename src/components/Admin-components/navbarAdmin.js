import React from 'react'
import { useNavigate } from 'react-router-dom'


const NavbarAdmin = () => {
  const navigate = useNavigate()
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#" onClick={() => navigate('/adminInicio')}>Inicio</a>
                        <a class="nav-link" href="#" onClick={() => navigate('/adminUltimasBatallas')}>Últimas Batallas</a>
                        <a class="nav-link" href="#" onClick={() => navigate('/adminInformacion')}>información acerca del Torneo</a>
                    </div>
                </div>
            </div>
    </nav>
  )
}

export default NavbarAdmin