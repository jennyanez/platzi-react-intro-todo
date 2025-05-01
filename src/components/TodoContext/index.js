import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider ({ children }) {
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
        <TodoContext.Provider value={{
            loading,
            error,
            searchValue,
            setSearchValue,
            completedTodos,
            totalTodos,
            searchedTodos,
            completeTodo,
            deleteTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider };