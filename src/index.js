import React from 'react';
//import './components/Componente';
//import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Importar los componentes que vamos utilizando.
//import Componente from './components/Componente';
//import CrudAdmin from './components/CrudAdmin';
//import CrudCli from './components/CrudCli';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
