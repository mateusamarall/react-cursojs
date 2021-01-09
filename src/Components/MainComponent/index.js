import React, { useEffect, useState } from 'react';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import './styles.css';
import './form.css';

function MainComponent() {
  const [tarefas, setTarefas] = useState('');
  const [tarefaFicticia, setTarefasFicticia] = useState([]);

  const data = [
    'fazer café',
    'beber água',
    'Estudar',
  ];

  useEffect(() => {
    setTarefasFicticia(data);
  }, []);

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

      <ul className="tarefas">
        {
          tarefaFicticia.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit className="edit" color="#51c5de" />
                <FaWindowClose className="delete" color="#F04C64" />
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
export default MainComponent;
