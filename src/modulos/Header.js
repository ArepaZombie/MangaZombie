import React, { useState } from 'react';
import Boton from './Boton';
import Ventana from './Ventana'

function FormularioInicioSesion({onsubmit}){

  const checkDNI = (e) =>{
    const ascii = e.keyCode || e.which;
    if(ascii<48 || ascii>57){
      e.preventDefault();
      return;
    }
  }

  const checkForm = (e) =>{
    window.event.preventDefault();
    
    let test=/^\d{8}$/; //solo aceptará dígitos
    if(!test.test(e.target['dni'].value)){
      window.event.preventDefault();
      alert("Ingrese DNI valido");
      return;
    }  

    test=/^[a-zA-z]+$/;
    if(!test.test(e.target['nombre'].value)){
      window.event.preventDefault();
      alert("Ingrese nombre valido");
      return;
    } 

    test= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(!test.test(e.target['email'].value)){
      window.event.preventDefault();
      alert("Ingrese email valido");
      return;
    }

    test=/^.+$/
    if(!test.test(e.target['direccion'].value)){
      window.event.preventDefault();
      alert("Ingrese direccion valida");
      return;
    }
    
    test=/^\d{9}$/; //solo aceptará dígitos
    if(!test.test(e.target['telefono'].value)){
      window.event.preventDefault();
      alert("Ingrese telefono valido");
      return;
    } 

    onsubmit()
  }

  return(
    <div>
    <h2>INICIO DE SESIÓN</h2>
    <form onSubmit={(e)=>checkForm(e)}>
      <p>DNI</p>
      <input  name='dni' onKeyPress={(e)=>checkDNI(e)} placeholder="DNI"></input>

      <p>Nombre</p>
      <input name='nombre' placeholder="Nombre"></input>                          

      <p>Email</p>
      <input  name='email' placeholder="E-mail"></input>                       

      <p>Direccion</p>
      <input  name='direccion' placeholder="Direccion"></input>                 

      <p>Teléfono</p>
      <input  name='telefono' onKeyPress={(e)=>checkDNI(e)} placeholder="Telefono"></input>                          
    
      <input type="submit" value="Enviar"></input>
    </form>
    </div>
  )
}

function Header({setSesion,sesion}){
  const [showInicio,setShowInicio]=useState(false)

  const iniciarSesion = () => {
    alert("Sesion iniciada");
    setShowInicio(false)
    setSesion();
  }

  return (
  <header>
    <p>ZombieManga!</p>
    <Boton tipo={sesion ? 'info':'carrito'} texto={sesion?'Sesión Iniciada':'Iniciar Sesión'} onclick={()=>setShowInicio(true)}/>
    {showInicio && <Ventana info={<FormularioInicioSesion onsubmit={()=>iniciarSesion()}/>} closeInfo={()=>setShowInicio(false)}/>}
  </header>)
}

export default Header;



