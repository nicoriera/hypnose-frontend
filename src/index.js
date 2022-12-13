import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { hydrate, render } from "react-dom";
import "./assets/font/better_yesterday/Better-Yesterday.eot";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
