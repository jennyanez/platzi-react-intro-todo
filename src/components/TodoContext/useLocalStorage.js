import React from "react"

// localStorage.removeItem('TODOS_V1')

// const defaultTodos = [
//   { text: 'Tomar curso de React.js', completed: true },
//   { text: 'Aprender IA', completed: false },
//   { text: 'Comprar regalos de cumple', completed: true },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Llorar mas', completed: false }
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function useLocalStorage(itemName, initialValue){
  //carga un estado inicial en lo que se ejecuta el efecto de carga
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true) //desde que inicia esta cargando
  const [error, setError] = React.useState(false) 

  //simulacion de que local storage demora en cargar 2000ms 
  //para eso se crea el efecto de carga

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem
  
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue) )
          parsedItem = initialValue
        } 
        else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
  
        setLoading(false);
      } catch (error) {
          setError(true)
          console.log(error)
          setLoading(false)
      }
    }, 2000)
  }, [])

  //esta funcion actualiza el estado y el local storage a la par
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item, 
    saveItem, 
    loading, 
    error};
}

export { useLocalStorage }