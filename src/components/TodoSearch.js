import React from 'react'
import '../styles/TodoSearch.css'

export default function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");

  console.log("Los usuarios buscan TODOs de " + searchValue)

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