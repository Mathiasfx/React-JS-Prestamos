import React, {Fragment, useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Loader from './componentes/Loader';

function App() {
///////////////////////////////////////////VariabalesGlobales para mi App y Funciones
const[cantidad, guardarCantidad] = useState(0); 
const[plazo, guardarPlazo] = useState(''); 
const[total,guardarTotal]  = useState(0);
const[cargando,guardarCargando] = useState(false);

let componente;
//Cargar componente condicional
if(cargando){
  componente = <Loader/>
}else if(total === 0){
  componente = <Mensaje />
}else{
  componente = <Resultado
                  total = {total}
                  plazo = {plazo}
                  cantidad = {cantidad}
               />
}


///////////////////////////////////////////VariabalesGlobales para mi App y Funciones

//Inicio Estructura
  return (
    <Fragment>      
      <Header
        titulo="Cotizador BVA"  
      />

      <div className="container">
        <Formulario
          cantidad = {cantidad}
          guardarCantidad = {guardarCantidad}
          plazo = { plazo }
          guardarPlazo = {guardarPlazo}
          guardarTotal = {guardarTotal}
          guardarCargando = {guardarCargando}
        />
      <div className="mensajes">
        {componente}
      </div>
      
        
      </div>
      
    </Fragment>
  );
}

export default App;
