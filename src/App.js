import React, { Component } from 'react';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

/*import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
*/

//Importar los componentes que vamos utilizando.
//import Componente from './components/Componente';
import CrudAdmin from './components/CrudAdmin';
//import CrudCli from './components/CrudCli';

function App() {
  return (
    <div className="App">
          <nav>
            <ul class="Opciones">
            <li><a href="CrudAdmin.js">Administrador</a></li>
            <li><a href="CrudCli.js">Cliente</a></li>
            </ul>
          </nav>
          <br></br>
          <br></br>
          <br></br>
      <center>
        <br></br>
        <br></br>
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
      </center>
      <br></br>
      <br></br>
      <br></br>
      <h1>Bienvenido</h1>
      <br></br>
      <br></br>

      <CrudAdmin/>
    </div>




















    
  );
}
export default App;
/*
<section class= "componentes">
       <Componente/>
       <CrudAdmin/>
       <CrudCli/>
      </section>
      <CrudAdmin/>
      <CrudCli/>
      
      <button>
          <a
            className= "App-link"
            href='http://localhost:3000/'
            target="_blank"
            rel="noopener noreferrer"
            >
            ingresar
          </a>
        </button>
*/