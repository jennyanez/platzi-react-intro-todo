import React from 'react';
import '../styles/TodoCounter.css';

export default function TodoCounter({ total, completed }) {
  return (
    <h2>
        Has completado {completed} de {total} TODOS
    </h2>
  )
}

export { TodoCounter };