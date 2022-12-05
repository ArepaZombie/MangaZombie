import React from 'react';

function Boton(props){
  return(
  <p className={`btn btn-${props.tipo}`} 
    manganame={props.manganame}
    onClick={props.onclick}>
    {props.texto}
    </p>
    )
}

export default Boton;