import React from "react";
import Input from "./Input";

export default function Header({ onChange, onKeyPress, erro, input }) {
  return (
    <div>
      <div>
        <h2>GitHub</h2>
        <h4>Veja os repositórios do seu usuário favorito!</h4>
      </div>

      <Input
        value={input}
        onChange={onChange}
        onKeyPress={onKeyPress}
        erro={erro}
      />
    </div>
  );
}
