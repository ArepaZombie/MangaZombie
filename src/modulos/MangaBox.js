import React from "react"
import info from "../info"
import Boton from "./Boton"

function MangaBox({manganame,agregarcarrito}){
  const manga = info[manganame]
  return(
    <div className="producto-info">
      <img src={manga.cover} alt='Cover'></img>
      <div>
        <h2>{manga.title}</h2>
        <p>{manga.autor}</p>
        <p>{manga.sinopsis}</p>
        <p>Año: {manga.año} <span className={`btn ${manga.demo}`}>{manga.demo.toUpperCase()}</span> <span className={`btn ${manga.tipo}`}>{manga.tipo.toUpperCase()}</span></p>
        <p>Precio: <span>{manga.precio} /S</span></p>
        <Boton tipo='carrito' texto='AGREGAR AL CARRITO' manganame={manganame} onclick={agregarcarrito}/>
      </div>
    </div>
  )
}

export default MangaBox;