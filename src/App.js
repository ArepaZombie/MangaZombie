import React, { useState } from 'react';
import './App.css'

/*COMPONENTES */
import Header from'./modulos/Header'
import Hero from './modulos/Hero'
import Store from './modulos/Store';
import Footer from './modulos/Footer';



function App() {
  const [sesionIniciada, setSesionIniciada] = useState(false) /*INICIO DE SESION*/

  return (
    <div className="App">
      <Header setSesion={()=>setSesionIniciada(true)} sesion={sesionIniciada}/>
      <Hero />
      <Store sesion={sesionIniciada}/>
      <Footer />
    </div>
  );
}

export default App;
