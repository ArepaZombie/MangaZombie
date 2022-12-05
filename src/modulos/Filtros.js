import React from "react";
import info from "../info";
import MangaBox from "./MangaBox";
import Ventana from './Ventana';

function Filtro(props){
  return(
  <p className="categoria" onClick={props.onclick} id={props.tipo}>{props.tipo.toUpperCase()}</p>)
}

function Filtros(){
  const [result, setResult]=React.useState([])
  const [subwin,setSubwin]=React.useState(false);

  const filtros = ['shonen','seinen','shojo','yaoi','serie','tomo'].map((tipo)=>{
    return(<Filtro tipo={tipo} key={tipo}  onclick={(e)=>openSubwin(e)}/>)
})

  const openSubwin = (e) =>{
    if(e.target.className=="categoria"){
    const finded = [];
    const str = e.target.id

    if(str=="tomo"||str=="serie"){
      for (let manga in info){
        if(info[manga].tipo == str){
          finded.push(manga)
      }
    }
  }
  
    else{
      for (let manga in info){
        if(info[manga].demo == str){
          finded.push(manga)
      }
    }
  }

    setResult(finded.map(manga=><MangaBox manganame={manga} key={manga} />))
    setSubwin(true)}
  }


  return(
  <div>
    <h2 id="categoria-title">DESCUBRE MAS MANGAS!</h2>
    <section id="categorias" >
      {filtros}
      {subwin && <Ventana info={result} closeInfo={()=>setSubwin(false)}/>}
    </section>
  </div>)
}

export default Filtros;