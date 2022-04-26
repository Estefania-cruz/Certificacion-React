import React from 'react';
import ReactDOM from 'react-dom';
//import PrimerApp from './PrimerApp';
import './index.css';
import CounterApp from './CounterApp';

//const saludo = <h1>hola mundo</h1>;
const divRoot = document.querySelector('#root');
//ReactDOM.render(<PrimerApp saludo= "hola soy fany"/>, divRoot);
ReactDOM.render(<CounterApp valor={10}/>, divRoot);
//console.log(divRoot);
