import React from 'react'
import "../styles/TodoItem.css"
import { DeleteIcon } from './DeleteIcon'
import { TodoIcon } from './TodoIcon'

export default function TodoItem(props) {
  return (
    <div className='todoItemComponent'>
      <li>
        <div className='todoItem_left'>
          <TodoIcon type={props.completed ? "check" : "circle"}
                    onClick={props.onComplete}
          />
    
          <p 
            className={`TodoItem-p 
            ${props.completed && "TodoItem-p--complete"}`}
          >
            {props.text}
          </p>
        </div>
        <DeleteIcon onDelete={props.onDelete} />
   
      </li>
    </div>
    );
}

export {TodoItem};