import React from "react";
import classes from "./Input.module.css"
const Input = (props) => {
  return (
    <div className={classes.input}>
    <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} value={props.value}></input>;
    </div>
  );
};

export default Input;
