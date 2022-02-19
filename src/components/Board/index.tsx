import React, { useCallback, useMemo, useState } from "react";
import BoardSquare from "../BoardSquare";
import styles from "./styles";
import { useGame } from "../../contexts/Game";
import BOARD_POSITION from "../../constants/config";

const Board = () => {
  const { data } = useGame();

  const styleBoardContainer = useMemo(() => {
    if (data.result) {
      return {
        ...styles.boardContainer,
        backgroundColor: "#ff7961",
      };
    } else {
      return {
        ...styles.boardContainer,
      };
    }
  }, [data.result]);

  return (
    <div style={styleBoardContainer as React.CSSProperties}>
      {[...Array(9)].map((e, index) => (
        <div key={index} className="square" style={styles.squareContainer}>
          <BoardSquare
            index={index}
            checked={
              !!data.board[BOARD_POSITION[index].x][BOARD_POSITION[index].y]
            }
            x={BOARD_POSITION[index].x}
            y={BOARD_POSITION[index].y}
          />
        </div>
      ))}
    </div>
  );
};

export default Board;
