import React from 'react'
import '../../styles/TodosLoading.css'

export default function TodosLoading() {
  return (
    <div className='LoadingTodo-container'>
      <div className='LoadingTodo-left'>
        <span className='LoadingTodo-completeIcon'></span>
        <span className='LoadingTodo-text'></span>
      </div>
      <span className='LoadingTodo-deleteIcon'></span>
    </div>
  )
}


export { TodosLoading }