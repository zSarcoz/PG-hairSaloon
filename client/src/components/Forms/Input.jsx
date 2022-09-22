import React from "react";
import s from "../styles/Login.module.css";

function Input({
  state,
  setState,
  type,
  label,
  placeholder,
  name,
  error,
  regularExpression,
}) {
  function handleInputChange(e) {
    e.preventDefault();
    setState({
      ...state,
      value: e.target.value,
    });
  }

  function validate() {
    if (regularExpression) {
      if (regularExpression.test(state.value)) {
        setState({
          ...state,
          valid: "true",
        });
      } else {
        setState({
          ...state,
          valid: "false",
        });
      }
    }
  }

  return (
    <div>
      <label valid={state.valid}>{label}</label>
      <input
        className={s.input}
        id={name}
        type={type}
        placeholder={placeholder}
        value={state.value}
        onChange={handleInputChange}
        onBlur={validate}
        onKeyUp={validate}
        valid={state.valid}
      />
      {/* <input
        id={name}
        type={type}
        placeholder={placeholder}
        value={state.value}
        // valid={state.valid}
        // name="name"
        onChange={handleInputChange}
      /> */}

      {state.valid === "false" && error ? (
        <span valid={state.valid} className={s.spanError}>{error}</span>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Input;
