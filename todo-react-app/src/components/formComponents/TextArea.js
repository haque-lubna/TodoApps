import React from 'react'

export const TextArea = ({label, fieldName, placeholder, value, handleChange}) => {
  return (
    <div className='form-group'>
        <label className='mb-1' htmlFor={fieldName}>{label}</label>
        <textarea className='form-control' id={fieldName} name={fieldName} placeholder={placeholder} value={value} onChange={handleChange}></textarea>
    </div>
  )
}
