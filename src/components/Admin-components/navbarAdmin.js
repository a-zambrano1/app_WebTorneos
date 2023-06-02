import React from 'react'
import { useNavigate } from 'react-router-dom'


const NavbarAdmin = () => {
  const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#" onClick={() => navigate('/adminInicio')}>Inicio</a>
                        <a className="nav-link" href="#" onClick={() => navigate('/adminUltimasBatallas')}>Últimas Batallas</a>
                        <a className="nav-link" href="#" onClick={() => navigate('/adminInformacion')}>información acerca del Torneo</a>
                    </div>
                </div>
            </div>
    </nav>
  )
}

export default NavbarAdmin