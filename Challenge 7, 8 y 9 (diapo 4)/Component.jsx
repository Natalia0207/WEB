import React from 'react';
import useContador from './useContador'; 
const Component = () => {
  const [contador, sumar, restar, reiniciar] = useContador(10)
  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>   )
}
export default Component;
