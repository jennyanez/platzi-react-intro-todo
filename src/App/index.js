import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// localStorage.removeItem('TODOS_V1')

// const defaultTodos = [
//   { text: 'Tomar curso de React.js', completed: true },
//   { text: 'Aprender IA', completed: false },
//   { text: 'Comprar regalos de cumple', completed: true },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Llorar mas', completed: false }
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));



function App() {

  //estado de lista de todos, utilizando el hook de local storage para que sea este quien use el estado de React
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
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
    <AppUI
      loading={loading}
      error={error}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}



export default App;
