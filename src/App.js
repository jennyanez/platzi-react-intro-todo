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
  { text: 'Comprar regalos de cumple', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Llorar mas', completed: false }
];

function App() {
  //estado de buscar todo
  const [searchValue, setSearchValue] = React.useState("");

  //estado de lista de todos
  const [todos, setTodos] = React.useState(defaultTodos);

  //estados derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length; // la doble negacion (!!) es para que el valor que devuelva el array sea convertido a boolean
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    }
  );

  const completeTodo = (text) => {
    const todoListCopy = [...todos]; //crea una copia del estado del array todos
    const todoIndex = todoListCopy.findIndex(
      (todo) => todo.text === text
    )
    todoListCopy[todoIndex].completed = true;
    setTodos(todoListCopy);
  }

  const deleteTodo = (text) => {
    const todoListCopy = [...todos]; //crea una copia del estado del array todos
    const todoIndex = todoListCopy.findIndex(
      (todo) => todo.text === text
    );
    todoListCopy.splice(todoIndex, 1)
    setTodos(todoListCopy);
  }

  return (
    <>
      <Welcome userName='Jenny' />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
       />

      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}



export default App;
