import { MDBBtn } from 'mdb-react-ui-kit'

const Entrada4x4 = ({mc, onSaveEntradas, listValuesMC}) => {
  const changeValor = (valor, index) => {
    onSaveEntradas(mc, index, valor)
  }
  return (
    <div>
      {listValuesMC.map((valor,index) => {
        return(
        <div key={index} className='entrada'>    
          <MDBBtn onClick={() => changeValor(valor-0.5,index)} class="btn btn-outline-secondary btn-rounded">-</MDBBtn>
          <span>{valor}</span>
          <MDBBtn onClick={() => changeValor(valor+0.5,index)} class="btn btn-outline-secondary btn-rounded">+</MDBBtn>
      </div>
      )})}
    </div>

  )
}

export default Entrada4x4
