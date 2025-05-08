import React from 'react'
import "../styles/CreateTodoButton.css"

export default function CreateTodoButton({setOpenModal}) {
  return (
    <button className='createTodoButton' 
            onClick={() => {
                  setOpenModal(state => !state);
             }}
    >
        +
    </button>
  )
}

export {CreateTodoButton};