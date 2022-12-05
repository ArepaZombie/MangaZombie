import React from 'react';

import hero1 from '../img/hero/csm-hero.jpg';
import hero2 from '../img/hero/fma_hero.jpg';
import hero3 from '../img/hero/op_hero.webp';

const listImg = [hero1,hero2,hero3];

function Hero(){
  const [indx, setIndx] = React.useState(0);

  setTimeout(() => {
    if(indx>=listImg.length-1){setIndx(0)}
    else{setIndx(indx+1)}
  }, 1500);

  return(
  <section id="hero">
    <img src={listImg[indx]} alt="hero" id="hero-img"></img>
  </section>
  )
}

export default Hero;