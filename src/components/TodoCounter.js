import React from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from './TodoContext';

export default function TodoCounter() {
  const {completedTodos, totalTodos } = React.useContext(TodoContext)

  return (
    <h2>
        Has completado {completedTodos} de {totalTodos} TODOS
    </h2>
  )
}

export { TodoCounter };