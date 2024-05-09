import React from 'react'

export const TextArea = ({label, fieldName, placeholder}) => {
  return (
    <div className='form-group'>
        <label className='mb-1' htmlFor={fieldName}>{label}</label>
        <textarea className='form-control' id={fieldName} name={fieldName} placeholder={placeholder}></textarea>
    </div>
  )
}
