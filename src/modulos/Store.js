import React, { useState } from "react";
import info from "../info";

//Modulos
import Exhibicion from './Exhibicion';
import Filtros from './Filtros';
import Ventana from "./Ventana";
import Boton from "./Boton";

function CarritoBoton({onclick}){
  return( <p id="carrito-boton"
  onClick={onclick}>
    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
  </p>)
}

function MangaCarrito({manganame,id,onclick}){
  const minfo = info[manganame]

  return(
    <div className="manga-carrito">
      <p>{minfo.title}</p>
      <p>{minfo.precio}</p>
      <p className="btn-menos" pos={id} id={id} onClick={onclick}><i className="fa fa-minus" aria-hidden="true"></i></p>
    </div>
  )
}



function Store({sesion}){
  const [carrito,setCarrito] = useState([]);
  const [showCarrito, setShowCarrito] = useState(false);

  const agregarCarrito = (e) => {
    if(e.target.className === "btn btn-carrito"){
      const manga = e.target.attributes.manganame.value
      const carr_aux = carrito.slice()
      carr_aux.push(manga)
      setCarrito(carr_aux);
    }
  }

  const eliminarCarrito = (e) => {
    let indx = 'fuck'
    try {
      indx = parseInt(leerCarro(e))
    }
    catch{
      indx = parseInt(e.target.parentNode.attributes.pos.value)
    }
    
    setCarrito(carrito.filter((x,i)=>i!==indx))
  }

  const leerCarro = (e)=>{
    return e.target.attributes.pos.value;
  }

  const carritoElementos = () => carrito.map((manga,i)=>{
    return(<MangaCarrito manganame={manga} key={i} id={i} onclick={(e)=>eliminarCarrito(e)}/>)
  })
  
  const totalCarrito = () => {
    let c=0
    carrito.forEach((manga)=>c+=parseFloat(info[manga].precio))
    return c
  }

  const VentanaCarrito = <div>
    <h2>CARRITO DE COMPRAS</h2>
    {carritoElementos()}
    <hr></hr>
    <h2>Total: {totalCarrito()}</h2>
    <div id='carrito-botones'>
    <Boton tipo='compra' texto='PAGAR CARRITO' onclick={()=>{
      if(sesion){
      alert("Compra realizada!")
      setCarrito([])
      setShowCarrito(false)}

      else{alert("Por favor inicie sesión")}
      }
    }/>
    <Boton tipo='borrar' texto='BORRAR CARRITO' onclick={()=>{
      setCarrito([])
      setShowCarrito(false)
      alert("Carrito vaciado")
    }}/>
    </div>
  </div>

  return(
  <div id='store' onClick={(e)=>agregarCarrito(e)}>
    <Exhibicion tipo='estrenos'/>
    <Exhibicion tipo='terminados'/>
    <Filtros />
    {carrito.length > 0 && <CarritoBoton onclick={()=>setShowCarrito(true)}/>}
    {showCarrito && <Ventana info={VentanaCarrito} closeInfo={()=>setShowCarrito(false)} key='ven' />}
  </div>
  )
}

export default Store;