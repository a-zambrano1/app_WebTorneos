import state from "./state.js";
import auth from "./firebase";
import imgGoogle from './media/google-logo.png'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { useState } from "react";
import SweetAlert from "sweetalert";
import { Navigate,useNavigate } from "react-router-dom";
import './styles.css'
import { MDBBtn, MDBIcon, MDBInput } from "mdb-react-ui-kit";



export default (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const Registro = async () => {
    state.isAdmin = false;
    
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        state.islogged = true;
        SweetAlert({
          title: "Registrado con éxito",
          text: "Cuenta registrada, ahora puedes iniciar",
          icon: "success",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/weak-password") {
          SweetAlert({
            title: "Error al registrarse",
            text: "Contraseña insegura, debe ser de al menos 6 caracteres.",
            icon: "error",
          });
        }
        if (errorCode === "auth/email-already-in-use") {
          SweetAlert({
            title: "Error al registrarse",
            text: "El correo ya se encuentra registrado.",
            icon: "error",
          });
        }
      });
  };

  const Ingreso = async() => {
    setPersistence(auth, browserLocalPersistence);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        state.islogged = true;
        state.isAdmin = true;
        
        SweetAlert({
          title: "Inicio de sesión",
          text: "Sesión iniciada",
          icon: "success",
        });
        navigate('/welcome');
      })
      .catch((error) => {
        const errorCode = error.code;
        //console.log(errorCode);
        if (errorCode === "auth/wrong-password") {
          SweetAlert({
            title: "Error al iniciar sesión",
            text: "Correo y/o contraseña incorrecta.",
            icon: "error",
          });
        }
        if (errorCode === "auth/user-not-found") {
          SweetAlert({
            title: "Error al iniciar sesión",
            text: "Correo no registrado.",
            icon: "error",
          });
        }
      });

  };

  const ingresoGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        state.isAdmin = false;
        navigate('/welcome');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });

  };

  return (
    <div>
      <br/>
      <div>
        <a className='regresar' onClick={()=>window.history.back() }>« Regresar</a>
      </div>
      <br/>
      <div className='opciones-login'>
        <span className='raprumble'>Rap 
          <span className='raprumble1'>Rumble</span>
        </span>
        </div>
      <div className='opciones-login'>
        <span>Ingreso de Usuario</span>
      </div>
      <br/>
    <section>
      <div className="cuadro-informacion">
        <MDBInput
          label="Ingresar Correo"
          id="email"
          style={{height:25}}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MDBInput
          minLength="8"
          label="Ingresar Contraseña"
          id="password"
          style={{height:25}}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='texto-olvidar-password'>
          <span>Olvidaste tu contraseña?</span>
        </div>
          <MDBBtn rounded color='success' size='lg'>
            <span>Ingresar</span>
            <i class="fas fa-right-to-bracket"></i>
          </MDBBtn>
        <div className='ingreso-correo'>
          <span>-------- O iniciar sesión con --------</span>
          <br/>
          <div className="opciones-login">
          <MDBBtn className="me-2" size="lg" style={{backgroundColor: '#dd4b39'}} href="#" onClick={ingresoGoogle}>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          </div>
          <br/>
          <div className='crear-cuenta'>
            <span>¿No estás registrado aún?</span>
            <a onClick={()=>navigate('/registro_usuario')}>Crear Cuenta</a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};