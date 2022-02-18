import React, { createContext, useContext, useMemo } from "react";
import { Icon } from "@iconify/react";
import { useBoard } from "../hooks/useBoard";
import { DataType } from "../types/DataType";

type ContextProps = {
  data: DataType;
  error?: string;
  loading: boolean;
  icon?: React.ReactNode;
  updateBoard: (player: string, x: number, y: number) => Promise<void>;
  resetGame: () => void;
};

const GameContext = createContext<ContextProps>({
  data: {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    nextPlayer: "Player 1",
    round: 0,
    result: undefined,
  },
  error: undefined,
  loading: false,
  icon: undefined,
  updateBoard: async () => undefined,
  resetGame: () => null,
});

export const GameProvider: React.FC = ({ children }) => {
  const { data, error, loading, updateBoard, resetGame } = useBoard();

  const icon = useMemo(() => {
    if (data.nextPlayer === "Player 1") {
      return <Icon icon="akar-icons:cross" fontSize={30} />;
    }
    if (data.nextPlayer === "Player 2") {
      return <Icon icon="akar-icons:circle" fontSize={30} />;
    }
  }, [data.nextPlayer]);

  return (
    <GameContext.Provider
      value={{
        data,
        error,
        loading,
        icon,
        updateBoard,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
