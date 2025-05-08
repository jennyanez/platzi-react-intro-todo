import React from "react";
import { TodoContext } from '../components/TodoContext'
import '../styles/TodoForm.css';

function TodoForm() {
    const {
        setOpenModal, 
        addTodo
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = (event) => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Nuevo TODO</label>
            <textarea 
                placeholder="Cortar cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange} 
                required/>
            <div className="TodoForm-buttonContainer">
                <button 
                    className="TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                    >Cancelar</button>
                <button 
                    type="submit"
                    className="TodoForm-button--add"
                    >Agregar</button>
            </div>
        </form>
    )
}

export { TodoForm }