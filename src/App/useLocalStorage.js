import React from "react"

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify([]) )
    parsedItem = []
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem)

  //esta funcion actualiza el estado y el local storage a la par
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem];
}

export { useLocalStorage }