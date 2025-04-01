import React from 'react'
import CheckPNG from '../assets/check.png'
import CirclePNG from '../assets/circle.png'
import DeletePNG from '../assets/delete.png'
import "../styles/TodoIcon.css"

const iconTypes = {
  "check": CheckPNG,
  "circle": CirclePNG,
  "delete": DeletePNG
}

export default function TodoIcon({ type, onClick }) {
  return (
    <div className={`Icon Icon-${type}`} onClick={onClick}>
        <img src={iconTypes[type]} alt={`icon-${type}`} />
    </div>
  )
}

export { TodoIcon }