import React from 'react'
import "../styles/TodoItem.css"

export default function TodoItem(props) {
  return (
    <div className='todoItemComponent'>
      <li>
        <div className='todoItem_left'>
          <span 
            className={`Icon Icon-check 
            ${props.completed && "Icon-check--active"}`}
            onClick={props.onComplete}
          >
            ✅
          </span>
          <p 
            className={`TodoItem-p 
            ${props.completed && "TodoItem-p--complete"}`}
          >
            {props.text}
          </p>
        </div>
        <span className='Icon Icon-delete'
              onClick={props.onDelete}>❌</span>
      </li>
    </div>
    );
}

export {TodoItem};