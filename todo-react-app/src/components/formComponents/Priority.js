import React from 'react'

export const Priority = ({label, fieldName}) => {
  return (
    <div className='input-group'>
      <label htmlFor={fieldName} className="form-label">{label}</label>
      <input type="range" className="form-range" name={fieldName}></input>
    </div>
  )
}
