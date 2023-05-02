import NavbarAdmin from "./navbarAdmin"
import HeaderAdminTorneo from '../../utils/headerAdminTorneo'

const AdminInformacion = () => {
  return (
    <div>
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