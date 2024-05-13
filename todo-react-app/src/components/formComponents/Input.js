import React from 'react'

export const Input = ({type="text", label, fieldName, placeholder, value, handleChange}) => {
  return (
    <div className='form-group'>
        <label className='mb-1' htmlFor={fieldName}>{label}</label>
        <input type={type} className='form-control' id={fieldName} name={fieldName} placeholder={placeholder} value={value} onChange={handleChange}/>
    </div>
  )
}
