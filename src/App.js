import React, { useState } from "react";
import { fetchUsersbyName } from "./service/api";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Container from "./components/Container";

export default function App() {
  const [datas, setData] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [erro, setErro] = useState("");
  const [eMgs, setEmsg] = useState("");
  const [eData, setEdata] = useState("");

  const handleError = message => {
    setError(true);
    switch (message) {
      case "usuarioInexistente":
        setEmsg("404 - Usuário não encontrado");
        setEdata("nao-encontrado");
        break;
      default:
        setEmsg("O usuário não tem nenhum repositório");
        setEdata("sem-repositorios");
        break;
    }
  };

  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
    if (
      input.match(/[^a-zA-Z0-9 -]/g) ||
      input.match(/--/) ||
      input.match(/-$/g) ||
      input.length > 39 ||
      input.substr(0, 1) === "-"
    ) {
      setErro(input);
    } else {
      setErro("");
    }
  };

  const onPressInput = e => {
    e.preventDefault();
    if (
      input.match(/[^a-zA-Z0-9 -]/g) ||
      input.match(/--/) ||
      input.match(/-$/g) ||
      input.length > 39 ||
      input.substr(0, 1) === "-"
    ) {
      setErro(input);
    } else {
      fetchUsersbyName(input).then(response => {
        if (response.message) {
          handleError("usuarioInexistente");
          setData([]);
        } else if (response.length === 0) {
          handleError("semRepositorio");
        } else {
          setError(false);
          setData(response);
          setErro("");
        }
      });
    }
  };

  return (
    <Container>
      <Header
        input={input}
        onChange={handleChange}
        onKeyPress={onPressInput}
        erro={erro}
      />
      {!error ? (
        datas.map((data, key) => <Cards key={key} data={data} />)
      ) : (
        <NotFound errorMessage={eMgs} errorDataTest={eData} />
      )}
    </Container>
  );
}
