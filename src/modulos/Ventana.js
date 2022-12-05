import React from "react";

function Ventana(props){

  const closeInfo = ()=>{
    const content = document.getElementById('producto-content')
    content.style.transform = 'translateY(20px)'
    content.style.opacity = '0'
    content.style.transition = 'all 0.4s'
    setTimeout(props.closeInfo,500);
  }


  return(
    <section id="sub-win">
    <div id='producto-content'>
      <span id='close' onClick={closeInfo}><i className="fa fa-times" aria-hidden="true"></i></span>
      {props.info}
    </div>
  </section>
  )
}

export default Ventana;