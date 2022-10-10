//code that renders the app itself
//This is the start of the app. 
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
//this imports what will be both the front page of the app and what the user will see if they need to log in
import { ReptileGlossary } from "./components/ReptileGlossary";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ReptileGlossary />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);