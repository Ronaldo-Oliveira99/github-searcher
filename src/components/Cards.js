import React from "react";
import "../App.css";

export default function Cards({ data }) {
  return (
    <section data-test="repositorio" className="pcard">
      <div>
        <img src={data.owner.avatar_url} alt="Avatar" className="avatar"></img>

        <div>
          <h3>{data.name}</h3>
          <h5>{`Stars : ${data.stargazers_count}`}</h5>
        </div>
      </div>

      <div>
        <a href="/">
          <p>{data.language}</p>
        </a>
      </div>

      <div>
        <p>{data.description}</p>
      </div>
    </section>
  );
}
