import React, { useEffect, useState } from 'react';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import './styles.css';
import './form.css';

function MainComponent() {
  const [tarefas, setTarefas] = useState('');
  const [tarefasFicticia, setTarefasFicticia] = useState([]);
  const [indexTarefa, setIndexTarefa] = useState(-1);

  function handleSubmit(e) {
    e.preventDefault();

    tarefas.trim();
    if (tarefasFicticia.indexOf(tarefas) !== -1) return;
    const novastarefas = [...tarefasFicticia];
    if (indexTarefa === -1) {
      setTarefasFicticia([...novastarefas, tarefas]);
      setTarefas('');
    } else {
      novastarefas[indexTarefa] = tarefas;
      setTarefasFicticia([...novastarefas]);
      setIndexTarefa(-1);
    }
  }
  function handleDeleteTarefa(e, index) {
    const novatarefas = [...tarefasFicticia];
    novatarefas.splice(index, 1);
    setTarefasFicticia([...novatarefas]);
  }

  function handleEditTarefa(e, index) {
    setIndexTarefa(index);
    setTarefas(tarefasFicticia[index]);
  }

  useEffect(() => {
    localStorage.setItem('tarefas_usuario', JSON.stringify(tarefasFicticia));
  }, [tarefasFicticia]);
  const data = JSON.parse(localStorage.getItem('tarefas_usuario'));
  useEffect(() => {
    if (data) {
      setTarefasFicticia(data);
    }
  }, []);

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
          tarefasFicticia.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit className="edit" color="#51c5de" onClick={(e) => handleEditTarefa(e, index)} />
                <FaWindowClose className="delete" color="#F04C64" onClick={(e) => handleDeleteTarefa(e, index)} />
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
export default MainComponent;
