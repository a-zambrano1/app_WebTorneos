import NavbarAdmin from "./navbarAdmin"
import HeaderAdminTorneo from '../../utils/headerAdminTorneo'

const AdminInformacion = () => {
  return (
    <div className='recuadro2 debug'>
        <HeaderAdminTorneo/>
        <NavbarAdmin/>
        <div>
            información más actual
        </div>
        <div>
            Descripción de la Liga
            @DescripciónTraidaDeLaBD
        </div>
    </div>
  )
}

export default AdminInformacion