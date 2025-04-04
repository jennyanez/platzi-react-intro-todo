import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton';
import { Welcome } from './components/Welcome';

// const defaultTodos = [
//   { text: 'Tomar curso de React.js', completed: true },
//   { text: 'Aprender IA', completed: false },
//   { text: 'Comprar regalos de cumple', completed: true },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Llorar mas', completed: false }
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1')

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify([]) )
    parsedItem = []
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem)

  //esta funcion actualiza el estado y el local storage a la par
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem];
}

function App() {

  //estado de lista de todos, utilizando el hook de local storage para que sea este quien use el estado de React
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  //estado de buscar todo
  const [searchValue, setSearchValue] = React.useState("");

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
    saveTodos(todoListCopy);
  }

  const deleteTodo = (text) => {
    const todoListCopy = [...todos]; //crea una copia del estado del array todos
    const todoIndex = todoListCopy.findIndex(
      (todo) => todo.text === text
    );
    todoListCopy.splice(todoIndex, 1)
    saveTodos(todoListCopy);
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
