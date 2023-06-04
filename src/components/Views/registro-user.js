import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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
import { MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';

const RegistroUser = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [aka, setAka] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [roles, setRoles] = useState(['normal']);
    const navigate = useNavigate();

    const auth = getAuth();

    const registroCompleto = async (e) => { 
      if(testeoLoginPost(e) == true){
        if(nuevoRegistro() == true){
          toast.success("Usuario registrado con éxito");
        }else{
          toast.error("Error al registrar usuario");
        }
      }
      
    }

    const nuevoRegistro = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          return true;
        })
        .catch((error) => {
          toast.error("Error al registrar usuario");
          return false;
        });
    }


    const testeoLoginPost = async (e) =>{
      console.log("Se accede al post")
      try {
        const result = await fetch(
          'http://localhost:5000/api/usuarios/registro', { 
              method: "post",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ nombre,apellido, aka, email, password, roles }),
              headers: {
                'Content-Type': 'application/json'
              }
              
            }).then((response) => response.json())
            if (result.data != null) {
              console.log(result);
              toast.success('Usuario registrado con éxito')
            }else{
              if(result.status == 99){
                toast.error('Ya existe un usuario con ese correo')
              }else if(result.status == 200){
                toast.error('Debe ingresar un nombre')
              }else if(result.status == 201){
                toast.error('Debe ingresar un apellido')
              } else if(result.status == 202){
                toast.error('Debe ingresar un aka')
              } else if(result.status == 98){
                toast.error('Debe ingresar un correo')
              } else if(result.status == 100){
                toast.error('La contraseña es demasiado corta')
              } else if(result.status == 101){
                toast.error('La contraseña debe tener al menos una letra')
              }else if(result.status == 102){
                toast.error('La contraseña debe tener al menos una letra mayuscula')
              }else if(result.status == 103){
                toast.error('La contraseña debe tener al menos un numero')      
              }  
            }
          return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }

    const  testeoLoginGet = async (e) =>{
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
    <div className='recuadro2 debug'>
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
        <span>Registro de Usuario</span>
      </div>
      <br/>
      <section>
        <div className='cuadro-informacion'>
        <MDBInput
          label="Ingresar Nombre"
          id="nombre"
          style={{height:25}}
          onChange={(e) => setNombre(e.target.value)}
        />
        <MDBInput
          label="Ingresar Apellido"
          id="apellido"
          style={{height:25}}
          onChange={(e) => setApellido(e.target.value)}
        />
        <MDBInput
          label="Ingresar A.K.A"
          id="aka"
          style={{height:25}}
          onChange={(e) => setAka(e.target.value)}
        />
          <MDBInput
          label="Ingresar Correo"
          type='email'
          id="email"
          style={{height:25}}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <MDBInput
          minLength="8"
          label="Ingresar Contraseña"
          id="password"
          type='password'
          style={{height:25}}
          onChange={(e) => setPassword(e.target.value)}
        />
        <MDBBtn onClick={(e) => registroCompleto(e)} rounded color='success' size='lg'>Registrar</MDBBtn>
        </div>  
        <br/>
      </section> 
    </div>
    </div>
  )
}

export default RegistroUser