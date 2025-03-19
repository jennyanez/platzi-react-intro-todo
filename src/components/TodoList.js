import React from 'react'
import "../styles/TodoList.css"

export default function TodoList(props) {
  return (
    <ul>
        {props.children}
    </ul>
  )
}

export { TodoList }