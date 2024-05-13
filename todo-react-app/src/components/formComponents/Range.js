import React from 'react';

export const Range = ({label, fieldName, disabled=false, handleChange, value=23}) => {
  return (
    <div className='input-group'>
      <label htmlFor={fieldName} className="form-label">{label}</label>
      <input type="range" className="form-range" min="0" max="100" defaultValue={value} onChange={handleChange} name={fieldName} disabled={disabled}></input>
    </div>
  )
}
