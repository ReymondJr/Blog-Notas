import React, { useState } from 'react';
import "./estilo.css"
import { Button, TextField } from '@mui/material';

const Tarea = () => {
  const [tareas, setTareas] = useState([]);
  const [tareasRealizadas, setTareasRealizadas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, { descripcion: nuevaTarea, realizada: false }]);
      setNuevaTarea('');
    }
  };

  const marcarRealizada = (index) => {
    const nuevasTareas = [...tareas];
    const tarearealizada = nuevasTareas.splice(index, 1)[0];
    tarearealizada.realizada = true;
    setTareas(nuevasTareas);
    setTareasRealizadas([...tareasRealizadas, tarearealizada])
  };

  const marcarPorHacer = (index) => {
        const nuevasTareasRealizadas = [...tareasRealizadas];
        const tareaPorHacer = nuevasTareasRealizadas.splice(index, 1)[0];
        tareaPorHacer.realizada = false;
        setTareasRealizadas(nuevasTareasRealizadas);
        setTareas([...tareas, tareaPorHacer]);
    };

  return (
    <div className='todo'>
      <h1 className='Blog'>Blog de Notas</h1>
      <TextField  label="Tarea" className='fullwidth'
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <div className='agregar'>
        <Button variant='contained' color='success'  onClick={agregarTarea}>Agregar Tarea</Button>
      </div>
      
      <h2>Tareas Pendientes</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li
            key={index}>
            <input type='checkbox'
            checked={tarea.realizada}
            onChange={() => marcarRealizada(index)}
            />
           <span className={tarea.realizada ? 'realizado' : 'por-hacer'} >         
            {tarea.descripcion}
            </span>
          </li>
        ))}
      </ul>
      <h2>Tareas Realizadas</h2>
      <ul>
        {tareasRealizadas.map((tarea, index) => (
            <li key={index}>
                <input type="checkbox"
                checked={tarea.realizada}
                onChange={() => marcarPorHacer(index)}
                />
                <span className={tarea.realizada ? 'realizado' : 'por-hacer'} >         
            {tarea.descripcion}
            </span>
            </li>
            ))}
      </ul>
    </div>
  );
};

export default Tarea;
