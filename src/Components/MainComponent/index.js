import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './styles.css';
import './form.css';

function MainComponent() {
  const [tarefas, setTarefas] = useState('');
  console.log(tarefas);

  return (
    <div className="container">
      <h1>LISTA DE TAREFAS</h1>
      <form action="#" className="form">
        <input
          type="text"
          value={tarefas}
          onChange={(text) => setTarefas(text.target.value)}
        />
        <button type="submit">

          <FaPlus color="#FFF" />

        </button>

      </form>
    </div>
  );
}
export default MainComponent;
