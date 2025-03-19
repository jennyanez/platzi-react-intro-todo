import React from 'react';
import "../styles/Welcome.css"

export default function Welcome( { userName }) {
  return (
    <div className='welcomeComponent'>
      <h1>Welcome back, { userName } </h1>
      <div className='welcome--user_picture'></div>
    </div>
    
  )
}

export { Welcome };