import React from 'react'
import './InputItem.css'


const InputItem = ({ label, name, type, placeholder, value, onChange }) => {
  return (
    <div className='input-item'>
      <p>{label}</p>
      <input 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        required 
      />
    </div>
  )
}

export default InputItem;