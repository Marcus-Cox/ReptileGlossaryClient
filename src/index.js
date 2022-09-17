//code that renders the app itself
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ReptileGlossary } from "./components/ReptileGlossary";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ReptileGlossary />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);