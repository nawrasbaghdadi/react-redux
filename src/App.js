import React from "react";
import { createStore } from "redux";
import "./App.css";
import { reducer } from "./store/reduser";

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <header className="App-header">hi</header>
    </div>
  );
}

export default App;
