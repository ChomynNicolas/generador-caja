import React, { useState } from 'react'

import FormComp from './components/FormComp/FormComp'
import ColorBlocks from './components/ColorBlocks/ColorBlocks'
import './App.css';

function App() {

const [valoresCuadro,setValoresCuadro]= useState([]);



  


  return (
    <div className="App">
      <FormComp guardarValores={setValoresCuadro} valores={valoresCuadro}/>
      <ColorBlocks ponerLosBloques={valoresCuadro}/>
    </div>
  );
}

export default App;
