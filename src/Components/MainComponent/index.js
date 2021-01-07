import React, { useState } from 'react';
import './styles.css';

// export default class MainComponent extends Component {
//   render() {
//     return <h1>meu estado</h1>;
//   }
// }

function MainComponent() {
  const [tarefas, setTarefas] = useState('');

  return (
    <div className="container">
      <h1>LISTA DE TAREFAS</h1>
      <form action="#">
        <input type="text" onChange={(text) => setTarefas(text.target.value)} />
        <button type="submit">ENVIAR</button>
        <p>{tarefas}</p>
      </form>
    </div>
  );
}
export default MainComponent;
