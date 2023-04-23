import React from 'react'
import { useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    setPersistence,
    browserLocalPersistence,
    GoogleAuthProvider,
    signInWithPopup
  } from "firebase/auth";
  import auth from "./firebase";
import micro from "./media/micro.png"

const RegistroUser = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const nuevoRegistro = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Cuenta registrada, ahora puedes iniciar")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/weak-password") {
          alert("Contraseña insegura, debe ser de al menos 6 caracteres.")
        }
        if (errorCode === "auth/email-already-in-use") {
          alert("El correo ya se encuentra registrado.")
        }
      });
    }


    const  testeoLoginPost = async (e) =>{
      console.log("Entre al perreo")
      try {
        let result = await fetch(
          'http://localhost:5000/api/usuarios', {
              method: "post",
              body: JSON.stringify({ email, password }),
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          result = await result.json();
          console.warn(result);
      } catch (error) {
        console.log(error);
      }
    }

    const  testeoLoginGet = async (e ) =>{
      console.log("Entre al perreo")
      try {
        let result = await fetch(
          'http://localhost:5000/api/usuarios', {
              method: "get",
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          result = await result.json();
          console.warn(result);
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className='pag-torneo'>
        <div className='bienvenido'>
            <img src={micro}/>
            <span className='titulo-rap-rumble'>Bienvenid@ a Rap Rumble</span>    
            <span>Registro de Usuarios</span>     
        </div>
        <div className='opciones-torneo'>
            <input placeholder='Nombre de Usuario'></input>
            <input onChange={(e) => setEmail(e.target.value)} placeholder='Correo Electrónico'></input>
            <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Contraseña'></input>
        </div>
        <button onClick={(e) => testeoLoginPost(e)} className='boton-registrar'> Registrar</button>    
    </div>
  )
}

export default RegistroUser