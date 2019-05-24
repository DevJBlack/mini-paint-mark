import React from 'react'


export default function ColorPicker(props){
  return (
  <div>
    <button style={{backgroundColor: 'blue', border: 'none'}} onClick={() => props.handleColorClick('blue')}>blue</button>
    <button style={{backgroundColor: 'orange', border: 'none'}} onClick={() => props.handleColorClick('orange')}>orange</button>
    <button style={{backgroundColor: 'green', border: 'none'}} onClick={() => props.handleColorClick('green')}>green</button>
    <button style={{backgroundColor: 'purple', border: 'none'}} onClick={() => props.handleColorClick('purple')}>purple</button>
  </div>
 ) 
}