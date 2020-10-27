import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react";
import styled from "styled-components";
import GetJoke from "./GetJoke";
import "./App.css";

function App() {
  return (
    <div>
      <GetJoke></GetJoke>
    </div>
  );
}

export default App;
