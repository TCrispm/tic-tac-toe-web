import React, { createContext, useContext } from "react";
import { useBoard } from "../hooks/useBoard";

type ContextProps = {
  data?: Array<Array<string | null>>;
  result?: string;
  winner?: string;
  error?: string;
  loading: boolean;
  updateBoard: (player: string, x: string, y: string) => Promise<void>;
  resetGame: () => void;
};

const GameContext = createContext<ContextProps>({
  data: undefined,
  result: undefined,
  winner: undefined,
  error: undefined,
  loading: false,
  updateBoard: async () => undefined,
  resetGame: () => null,
});

export const GameProvider: React.FC = ({ children }) => {
  const { data, result, error, loading, updateBoard, winner, resetGame } =
    useBoard();
  return (
    <GameContext.Provider
      value={{
        data,
        result,
        winner,
        error,
        loading,
        updateBoard,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
