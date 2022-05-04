import React from "react";

import "./style.css";

export const Button = ({text, type=""})=> {
 return <button type={type}  className="button">{text}<span className="icon">&rarr;</span></button>
}