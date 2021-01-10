import React, { useState } from 'react';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import './styles.css';
import './form.css';

function MainComponent() {
  const [tarefas, setTarefas] = useState('');
  const [tarefaFicticia, setTarefasFicticia] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    tarefas.trim();
    if (tarefaFicticia.indexOf(tarefas) !== -1) return;
    const novatarefas = [...tarefaFicticia];

    setTarefasFicticia([...novatarefas, tarefas]);
  }

  return (
    <div className="container">
      <h1>LISTA DE TAREFAS</h1>
      <form onSubmit={(e) => handleSubmit(e)} action="#" className="form">
        <input
          type="text"
          value={tarefas}
          onChange={(text) => setTarefas(text.target.value)}
        />
        <button type="submit">

          <FaPlus color="#FFF" />

        </button>

      </form>

      <ul className="tarefas">
        {
          tarefaFicticia.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit className="edit" color="#51c5de" />
                <FaWindowClose className="delete" color="#F04C64" />
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
export default MainComponent;
