import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton';
import { Welcome } from './components/Welcome';

const defaultTodos = [
  { text: 'Tomar curso de React.js', completed: true },
  { text: 'Aprender IA', completed: false },
  { text: 'Comprar regalos de cumple', completed: false },
  { text: 'Llorar con la llorona', completed: false }
]

function App() {
  return (
    <>
      <Welcome userName='Jenny' />
      <TodoSearch />

      <TodoCounter completed={4} total={12}/>

      

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}



export default App;
