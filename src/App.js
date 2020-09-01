import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar componentes
import MiComponente from './components/MiComponente';

function HolaMundo(nombre,edad){
  var presentacion = (
  <div>
    <h2>Hola, soy {nombre}</h2>
    <h3>Tengo {edad} años</h3>
  </div>
  );

  return presentacion;
}

function App() {
  var nombre = "Joselyn";

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          HolaMundo(nombre,25)
        }   
      <section className="componentes">
        <MiComponente />
        <MiComponente />
        <MiComponente />
        <MiComponente />
      </section>    
      </header>
    </div>
  );
}

export default App;
