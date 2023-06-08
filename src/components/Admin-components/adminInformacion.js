import NavbarAdmin from "./navbarAdmin"
import HeaderAdminTorneo from '../../utils/headerAdminTorneo'

const AdminInformacion = () => {
  return (
    <div className='recuadro2 debug'>
        <HeaderAdminTorneo/>
        <NavbarAdmin/>
        <div>
            información actual
        </div>
    </div>
  )
}

export default AdminInformacion