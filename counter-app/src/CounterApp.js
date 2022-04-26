//funcional component
import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ valor = 10 }) => {
  //hooks--funcion
  /* const [nombre, setNombre]= useState('fany');
console.log(nombre, setNombre);*/
  const [counter, setCounter] = useState(valor);

  //handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter((c) => c+1);
  };

  const handleDelete = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => setCounter(valor);

  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>

      <button onClick={handleReset}>Reset</button>

      <button onClick={handleDelete}>-1</button>
    </div>
  );
};

CounterApp.propType = {
  valor: PropTypes.number.isRequired
};

export default CounterApp;
