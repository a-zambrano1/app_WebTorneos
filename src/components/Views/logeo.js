import state from "../../state.js";
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
import { useNavigate } from "react-router-dom";
import '../../styles/styles.css'
import { MDBBtn, MDBIcon, MDBInput } from "mdb-react-ui-kit";
import { toast } from "react-toastify";



export default (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const Registro = async () => {
    state.isAdmin = false;
    
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Usuario registrado con éxito");
        navigate('/welcome');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };


  const Ingreso = async() => {
    setPersistence(auth, browserLocalPersistence);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        state.islogged = true;
        state.isAdmin = true;
        console.log(result.user.uid)
        navigate('/welcome');
      })
      .catch((error) => {
        const errorCode = error.code;
        
        if (errorCode === "auth/wrong-password") {
          console.log("Contraseña incorrecta");
        }
        if (errorCode === "auth/user-not-found") {
          console.log("Usuario no encontrado");
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
        console.log(result.user.displayName)
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
        <a className='regresar' onClick={()=>navigate('/') }>« Regresar</a>
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
          type="password"
          id="password"
          style={{height:25}}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='texto-olvidar-password'>
          <span>Olvidaste tu contraseña?</span>
        </div>
          <MDBBtn rounded color='success' 
          size='lg'
          onClick={Ingreso}>
            <span>Ingresar </span>
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