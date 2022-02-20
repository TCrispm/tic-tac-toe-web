import React from "react";
import BoardSquare from "../BoardSquare";
import styles from "./styles";
import { useGame } from "../../contexts/Game";
import BOARD_POSITION from "../../constants/config";

const Board = () => {
  const { data } = useGame();

  return (
    <div style={styles.boardContainer as React.CSSProperties}>
      {[...Array(9)].map((e, index) => (
        <BoardSquare
          key={index}
          index={index}
          checked={
            !!data.board[BOARD_POSITION[index].x][BOARD_POSITION[index].y]
          }
          x={BOARD_POSITION[index].x}
          y={BOARD_POSITION[index].y}
        />
      ))}
    </div>
  );
};

export default Board;
