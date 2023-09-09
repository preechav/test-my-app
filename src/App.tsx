import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { add } from "./helper";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit1 <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          role="react"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{add(1, count)}
        </a>
        <button onClick={handleIncrement}>Increase</button>
      </header>
    </div>
  );
}

export default App;
