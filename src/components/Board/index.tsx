import React, { useCallback, useMemo, useState } from "react";
import BoardSquare from "../BoardSquare";
import styles from "./styles";
import { useGame } from "../../contexts/Game";
import BOARD_POSITION from "../../constants/config";

const Board = () => {
  const { data } = useGame();

  return (
    <div style={styles.boardContainer as React.CSSProperties}>
      {[...Array(9)].map((e, index) => (
        <div key={index} style={{ flexBasis: "33.333333%" }}>
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
