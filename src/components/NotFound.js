import React from "react";

export default function NotFound({ errorDataTest, errorMessage }) {
  return <h2 data-test={errorDataTest}>{errorMessage}</h2>;
}
