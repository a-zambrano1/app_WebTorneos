import { MDBBtn } from 'mdb-react-ui-kit'

const Entrada4x4 = ({mc, onSaveEntradas, listValuesMC}) => {
  
  const changeValor = (valor, index, result) => {
    if((valor >= 0 && valor <= 4)){
      onSaveEntradas(mc, index, valor, parseFloat(result))
    }
  }

  return (
    <div >
      {listValuesMC.map((valor,index) => {
        return(
        <div key={index} className='entrada'>    
          <MDBBtn onClick={() => changeValor(valor-0.5,index, -0.5)} color className="btn btn-outline-secondary btn-rounded">-</MDBBtn>
          <span>{valor}</span>
          <MDBBtn onClick={() => changeValor(valor+0.5,index, 0.5)} color className="btn btn-outline-secondary btn-rounded">+</MDBBtn>
      </div>
      )})}
    </div>

  )
}

export default Entrada4x4
