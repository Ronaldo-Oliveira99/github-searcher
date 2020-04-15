import React from "react";

export default function Input({ onKeyPress, value, onChange, erro }) {
  const hasError = Boolean(erro);
  const errorStyle = hasError ? { borderColor: "red" } : {};
  return (
    <div>
      <form onSubmit={onKeyPress}>
        <input
          data-test="entrada"
          type="text"
          placeholder="Insira o nome do usuário"
          value={value}
          onChange={onChange}
          style={errorStyle}
        ></input>
      </form>
    </div>
  );
}
