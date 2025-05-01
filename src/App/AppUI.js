import React from 'react'

import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Welcome } from '../components/Welcome';
import { EmptyTodos } from '../components/utils/EmptyTodos';
import { TodosError } from '../components/utils/TodosError';
import { TodosLoading } from '../components/utils/TodosLoading';

function AppUI (
    {loading,
    error,
    searchValue,
    setSearchValue,
    completedTodos,
    totalTodos,
    searchedTodos,
    completeTodo,
    deleteTodo}
){
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
            {/* el && es el equivalente a un then */}
            {loading && 
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
            } 
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

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

export { AppUI }
