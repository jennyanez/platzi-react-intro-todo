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
import { TodoContext } from '../components/TodoContext';
import { Modal } from '../components/utils/Modal';
import { TodoForm } from '../components/TodoForm';

function AppUI (){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
  return (
      <>
        <Welcome userName='Jenny' />
          
        <TodoSearch/>
        <TodoCounter/>

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
          
        <CreateTodoButton 
          setOpenModal={setOpenModal}
        />

        {
          openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )  
        }
      </>
  );
}

export { AppUI }
