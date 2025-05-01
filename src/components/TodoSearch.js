import React from 'react'
import '../styles/TodoSearch.css'
import { TodoContext } from './TodoContext';

export default function TodoSearch() {
  const {searchValue,
        setSearchValue} = React.useContext(TodoContext)

  return (
    <div className='todoSearchComponent'>
      <div className='searchIcon'></div>
      <input 
        placeholder='Aprender AI'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
    
  )
}

export { TodoSearch };