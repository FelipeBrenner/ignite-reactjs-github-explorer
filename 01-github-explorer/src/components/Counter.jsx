import { useState } from 'react';

/*

  imutabilidade

  usuario = ['diego3g', 'dieegosf', 'danileao']

  usuarios.push('rafacamarda')

  novoUsuarios = [...usuarios, 'rafacamarda']

*/

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}