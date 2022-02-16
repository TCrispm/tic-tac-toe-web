import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useBoard } from "./hooks/useBoard";
import { GameProvider } from "./contexts/Game";

function App() {
  const { data } = useBoard();
  console.log("data", data);
  return (
    <GameProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </GameProvider>
  );
}

export default App;
