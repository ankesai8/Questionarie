import React from "react";

import "./style.css";

export const MultipleChoiceField = ({ choice, onChange, checked,name, jumps }) => {

  return (
    <label className="option">
      <input
        className="radio-btn"
        type="radio"
        name={name}
        checked={checked}
        value={choice.value}
        onChange={(e) => onChange(e, name, jumps)}
      />
      <span>{choice.label}</span>
    </label>
  );
};  

