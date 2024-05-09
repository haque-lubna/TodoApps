import React from "react";

export const Select = ({ label, fieldName, options }) => {
  return (
    <div className="form-group">
      <label className="mb-1" htmlFor={fieldName}>{label}</label>
      <select className="form-select form-control" id={fieldName} name={fieldName}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
