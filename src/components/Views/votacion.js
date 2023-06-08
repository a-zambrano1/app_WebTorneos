import React, {useState, useEffect} from 'react'
import imgReset from '../../media/rotacion-de-flecha-circular-en-sentido-antihorario.png'
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
  const [resultado1, setResultado1] = useState(0.0)
  const [resultado2, setResultado2] = useState(0.0)
  const [listValuesMC1, setListValuesMC1] = useState([])
  const [listValuesMC2, setListValuesMC2] = useState([])
  const [numEntradas,setNumEntradas] = useState(0)

  const handleSaveEntradas= (idMC, index, value) => {
    if(idMC === 0){
      const list = [...listValuesMC1]
      list[index] = value
      setListValuesMC1(list)
      setResultado1(resultado1+value)
    }else{
      const list = [...listValuesMC2]
      list[index] = value
      setListValuesMC2(list)
      setResultado2(resultado2+value)
    }
  }

  const handleSaveNENtradas = (value) => {
    setNumEntradas(value)
  }

  const location = useLocation();

  function CambioFormato (param) {
    console.log(param.formato)
    switch (param.formato) {
      case 0:
        return(<Votacion4x4 mc1={location.state.mc1} mc2={location.state.mc2} onSaveEntradas={handleSaveEntradas}
        numEnt={numEntradas} onSaveNEntr={handleSaveNENtradas} listValuesMC1={listValuesMC1} listValuesMC2={listValuesMC2} />)
      case 1:
        return(<Votacion8x8 mc1={location.state.mc1} mc2={location.state.mc2}  onSaveEntradas={handleSaveEntradas}
          numEnt={numEntradas} onSaveNEntr={handleSaveNENtradas} listValuesMC1={listValuesMC1} listValuesMC2={listValuesMC2}/>)
      case 2:
        return(<MinutosLibres mc1={location.state.mc1} mc2={location.state.mc2}  onSaveEntradas={handleSaveEntradas}
          numEnt={6} onSaveNEntr={handleSaveNENtradas} listValuesMC1={listValuesMC1} listValuesMC2={listValuesMC2}/>)
      case 3:
        return(<VotacionAcapella mc1={location.state.mc1} mc2={location.state.mc2} onSaveEntradas={handleSaveEntradas}
          numEnt={numEntradas} onSaveNEntr={handleSaveNENtradas} listValuesMC1={listValuesMC1} listValuesMC2={listValuesMC2}/>)
      case 4:
        return(<VotacionKickBack mc1={location.state.mc1} mc2={location.state.mc2} onSaveEntradas={handleSaveEntradas}
          numEnt={numEntradas} onSaveNEntr={handleSaveNENtradas} listValuesMC1={listValuesMC1} listValuesMC2={listValuesMC2}/>)    
      default:
        return(<div>Componente vacío</div>)    
    } 
  }
  useEffect(() => {
    let lista = []
    for(let i=0; i<numEntradas; i++){
      lista.push(0)
    }
    setListValuesMC1(lista)
    setListValuesMC2(lista)
    setResultado1(resultado1)
    setResultado2(resultado2)
  }, [numEntradas])

  useEffect(() => {
    setNumEntradas(0)
  }, [formatoActual])

 return (
  <div className='recuadro2 debug'>
    <div >
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
       <ResultadoVotaciones mc1={location.state.mc1} mc2={location.state.mc2} resultado1={resultado1} resultado2={resultado2} />
       <MDBBtn className='btn btn-secondary btn-rounded' onClick={()=>{
        setResultado1(0)
        setResultado2(0)
       }}
       src={imgReset}>Reset</MDBBtn>
    </div>
    <br/>
    </div>
  )
}



export default Votacion
