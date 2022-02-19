import React from "react";
import { useBoard } from "./hooks/useBoard";
import { GameProvider } from "./contexts/Game";
import BoardTemplate from "./components/BoardTemplate";
import Board from "./components/Board";

function App() {
  const { data } = useBoard();
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <GameProvider>
      <BoardTemplate>
        <Board />
      </BoardTemplate>
    </GameProvider>
  );
}

export default App;
