import React, {useState} from 'react'
import CerrarVotar from '../../utils/cerrarVotar'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import { useLocation } from 'react-router-dom'
import MinutosLibres from '../Votaciones/minutosLibres'
import Votacion4x4 from '../Votaciones/votacion4x4'
import Votacion8x8 from '../Votaciones/votacion8x8'
import VotacionAcapella from '../Votaciones/votacionAcapella'
import VotacionKickBack from '../Votaciones/votacionKickBack'
import ResultadoVotaciones from '../Votaciones/resultadoVotaciones'

const Votacion = () => {
  

  const [formatoActual, setFormatoActual] = useState(0)

  const location = useLocation();

  function CambioFormato (param) {
    console.log(param.formato)
    switch (param.formato) {
      case 0:
        return(<Votacion4x4 mc1={location.state.mc1} mc2={location.state.mc2}/>)
      case 1:
        return(<Votacion8x8 mc1={location.state.mc1} mc2={location.state.mc2}/>)
      case 2:
        return(<MinutosLibres mc1={location.state.mc1} mc2={location.state.mc2}/>)
      case 3:
        return(<VotacionAcapella mc1={location.state.mc1} mc2={location.state.mc2}/>)
      case 4:
        return(<VotacionKickBack mc1={location.state.mc1} mc2={location.state.mc2}/>)    
      default:
        return(<div>Componente vacío</div>)    
    } 
  }

 return (
    <div>
        <CerrarVotar/>
        <div className= 'header-admin-torneos'>
            <text className='titulo-login'>4x4 <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}} onClick={() => setFormatoActual(0)}>
          </MDBBtn></text>
            <text className='titulo-login'>8x8 <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}} onClick={() => setFormatoActual(1)}>
          </MDBBtn></text>
            <text className='titulo-login'>Minuto Libre <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}} onClick={() => setFormatoActual(2)}>
          </MDBBtn></text>
            <text className='titulo-login'>Acapella <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}} onClick={() => setFormatoActual(3)}>
          </MDBBtn></text>
            <text className='titulo-login'>KickBack <MDBBtn rounded color='success' size='lg' style={{width:50, height:50}} onClick={() => setFormatoActual(4)}>
        </MDBBtn></text>
      </div>
       <CambioFormato formato={formatoActual}/>
       <ResultadoVotaciones />
    </div>
  )
}



export default Votacion
