import React from 'react';
import info from '../info';
import Boton from './Boton';
import MangaBox from './MangaBox';
import Ventana from './Ventana';

function MangaMiniBox({manganame,openinfo}){
  const manga = info[manganame];
  
  const showInfo = (e) =>{
    if(e.target.className == 'manga-img'){
    
    const arrManga = Array.from(document.getElementsByClassName('manga-cover'))
    for (let i=0;i<arrManga.length;i++) {
      const arrChild = Array.from(arrManga[i].children);
      arrChild[0].style.filter = 'blur(0px)'
      arrChild[1].style.display = 'none'
      arrChild[1].style.opacity = '0'
    }
    
    e.target.style.filter = 'blur(4px)'
    e.target.nextElementSibling.style.display = 'inherit'
    e.target.nextElementSibling.style.opacity = '1'
    }
  }
  
  const hideInfo = (e) =>{
    if(e.target.className == 'manga-img'){
    e.target.style.filter = 'blur(0px)'
    e.target.nextElementSibling.style.display = 'none'
    e.target.nextElementSibling.style.opacity = '0'
    }
  }

  return(
    <div className="manga">
      <div className="manga-cover" 
        onMouseOver={(e)=>showInfo(e)} 
        onMouseLeave={(e)=>hideInfo(e)}>
        <img src={manga.cover} alt="cover" className="manga-img"
          ></img>
        <div className="manga-hover">
          <p className="price">{manga.precio}</p>
          <Boton tipo='carrito' texto='AGREGAR AL CARRITO' manganame={manganame}/>
          <Boton tipo='info' texto='MAS INFORMACIÓN' manganame={manganame} onclick={openinfo}/>
        </div>
      </div>  
      <h3 className="manga-titulo">{manga.title}</h3>
    </div>
  )
}



function Exhibicion(props){
  const [subwin,setSubwin]=React.useState(false);
  const [mangaInfo, setMangaInfo] = React.useState([])
  
  const estrenos = ['csm12','jjk20','op100','opm26'].map(name => <MangaMiniBox manganame={name} key={name} openinfo={(e)=>openInfo(e)}/>)
  const terminados = ['fma', 'berserk', 'seven','punpun'].map(name => <MangaMiniBox manganame={name} key={name} openinfo={(e)=>openInfo(e)}/>)

  const openInfo = (e) =>{
      setMangaInfo(e.target.attributes.manganame.value)
      setSubwin(true)
  }

  return(
    <section className='exhibicion' id={props.tipo}>
      <h2>{props.tipo.toUpperCase()}</h2>
      <div className='manga-container'>
        {props.tipo == 'estrenos'? estrenos:terminados}
      </div>
      {subwin && <Ventana info={<MangaBox manganame={mangaInfo}/>} closeInfo={()=>setSubwin(false)}/>}
    </section>
  )
}

export default Exhibicion;
