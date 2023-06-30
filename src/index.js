import React from "react";
import ReactDOMClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./style.css";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(<App></App>);
