import NavbarAdmin from "./navbarAdmin"
import HeaderAdminTorneo from './headerAdminTorneo'

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