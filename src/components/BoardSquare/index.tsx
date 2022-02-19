import React, { useMemo } from "react";
import { Icon } from "@iconify/react";
import { useGame } from "../../contexts/Game";
import styles from "./styles";

type BoardSquareProps = {
  checked: boolean;
  index: number;
  x: number;
  y: number;
};

const BoardSquare = ({ checked, x, y, index }: BoardSquareProps) => {
  const { updateBoard, data } = useGame();

  const SquareStyles = useMemo(() => {
    return {
      ...styles.square,
      cursor: checked || data.result ? "auto" : "pointer",
      borderBottom:
        index === 6 || index === 7 || index === 8 ? "none" : "1px solid black",
      borderRight:
        index === 2 || index === 5 || index === 8 ? "none" : "1px solid black",
    };
  }, [checked, index, data.result]);

  return (
    <div
      style={SquareStyles}
      onClick={() => {
        if (!checked) {
          if (!data.result) {
            updateBoard(data.nextPlayer, x, y);
          }
        }
      }}
    >
      <div style={{ display: !data.board[x][y] ? "none" : undefined }}>
        <Icon
          icon={`akar-icons:${
            data.board[x][y] === "Player 1" ? "cross" : "circle"
          }`}
          fontSize={30}
        />
      </div>
    </div>
  );
};

export default BoardSquare;
