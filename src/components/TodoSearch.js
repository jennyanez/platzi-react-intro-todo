import React from 'react'
import '../styles/TodoSearch.css'

export default function TodoSearch({
  searchValue, 
  setSearchValue
}) {


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