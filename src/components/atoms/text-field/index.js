import React from "react";

import "./style.css";

export const InputField = ({type="text", name, onChange,placeholder="Enter Name of the Country", required=false })=> {
  return(
    <input
    className="input-field"
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={(e) => onChange(e, name)}
    required={required}
  />
  );
}