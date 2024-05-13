import React from "react";

export const Select = ({ label, fieldName, options, handleChange, value }) => {
  return (
    <div className="form-group">
      <label className="mb-1" htmlFor={fieldName}>{label}</label>
      <select className="form-select form-control" id={fieldName} name={fieldName} value={value} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
