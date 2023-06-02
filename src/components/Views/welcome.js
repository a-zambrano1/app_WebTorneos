import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom/dist';
import { MDBBtn } from 'mdb-react-ui-kit';
import micro from '../../media/micro.png'
import trofeo from '../../media/trophy.png'
import { getAuth} from 'firebase/auth';
import { set } from 'firebase/database';




const Welcome = () => {
    const navigate = useNavigate();
    const [aka, setAka] = useState('');
    const auth = getAuth();
    const email_admin = auth.currentUser.email;

    useEffect(() => {
        if (!auth.currentUser) {
            navigate('/login');
        }else{
            setAka(aka.toString());
        }
    }, [])

    const  TorneoGet = async () =>{
        console.log("Trayendo usuarios de la BD...")
        console.log(email_admin)
        try {
          let result = await fetch(
            'http://localhost:5000/api/usuarios/busqueda/' + email_admin, {
                method: "get",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            result = await result.json();
            console.log(result)
            const data = Object.values(result)
            if(data[1].aka != null){
                const aka = data[1].aka;
                setAka(aka.toString());
            }else{
            	console.log("No se pudo encontrar el aka");
            }    
        } catch (error) {
          console.log(error);
        }
      }

      useEffect((e) => {
        TorneoGet(e);
        aka.toString();
        }, [])

  return (
    <div className='recuadro2 debug'>
    <div className='pag-bienvenida'>       
        <div className='bienvenido'>
        <img src = {micro} width = {96} height = {94}/>
        <span className='titulo-rap-rumble'>Bienvenid@ a
        <span>Rap Rumble! </span>
        </span>         
      </div>
        <div className='seccion-hacer'>
            <div>
                <span className='titulos-inicio'>Hola {aka.toString()}</span>
            </div>
            <div>
                <span>¿Qué quieres hacer el día de hoy?</span>
            </div>
            <br/>
            <div>
                <MDBBtn onClick={()=>navigate('/InicioVotar')} rounded color='success' size='lg'> ¡Votación Rápida!</MDBBtn>
            </div>
        </div>
        <div className='seccion-hacer'>
            <div>
                <MDBBtn rounded color='success' size='lg' onClick={() => navigate('/listaTorneos')}>Ir a tus Torneos</MDBBtn>
            </div>
         </div>
         <div className='seccion-hacer'>
            <div>
                <MDBBtn onClick={()=>navigate('/login')} rounded color='success' size='lg'> Cerrar Sesión</MDBBtn>
            </div>
         </div>
        <br/>  
        <div className='menu-opciones'>
            <MDBBtn className='titulo-login' rounded color='success' size='lg'  onClick={()=>navigate('/registro_torneo')}> Registrar Torneo
                <img src = {trofeo} width = {72} height = {70}/>
            </MDBBtn>
        </div>
    </div>
    </div>
  )
}

export default Welcome
