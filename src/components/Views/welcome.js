import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom/dist';
import { MDBBtn } from 'mdb-react-ui-kit';
import micro from '../../media/micro.png'
import trofeo from '../../media/trophy.png'
import { getAuth} from 'firebase/auth';




const Welcome = () => {
    const navigate = useNavigate();
    const [nombreUsuario, setNombreUsuario] = useState('Admin');
    const auth = getAuth();

    useEffect(() => {
        if (!auth.currentUser) {
            navigate('/login');
        }else{
            setNombreUsuario(auth.currentUser.displayName);
        }
    }, [])

  return (
    <div className='pag-bienvenida'>
        <button type="button" class="btn btn-info" onClick={() => navigate('/login')}>Cerrar Sesión</button>
        <div className='bienvenido'>
        <img src = {micro} width = {96} height = {94}/>
        <span className='titulo-rap-rumble'>Bienvenid@ a
        <span>Rap Rumble! </span>
        </span>         
      </div>
        <div className='seccion-hacer'>
            <div>
                <span className='titulos-inicio'>Hola {nombreUsuario}, ¿Qué quieres hacer el día de hoy?</span>
            </div>
            <div>
                <MDBBtn onClick={()=>navigate('/InicioVotar')} rounded color='success' size='lg'> ¡Votación Rápida!</MDBBtn>
            </div>
        </div>
        <div className='seccion-hacer'>
            <div>
                <MDBBtn rounded color='success' size='lg' onClick={() => navigate('/listaTorneos')}>Ir a tus Torneos</MDBBtn>
            </div>
         </div>
        <div className='menu-opciones'>
            <MDBBtn className='titulo-login' rounded color='success' size='lg'  onClick={()=>navigate('/registro_torneo')}> Registrar Torneo
                <img src = {trofeo} width = {72} height = {70}/>
            </MDBBtn>
        </div>
    </div>
  )
}

export default Welcome
