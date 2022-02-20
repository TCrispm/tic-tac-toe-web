import React, { useMemo } from "react";
import styles from "./styles";
import { useGame } from "../../contexts/Game";

const BoardTemplate: React.FC = ({ children }) => {
  const { data, icon, resetGame } = useGame();

  const title = useMemo(() => {
    if (data.result) {
      if (data.result === "win") {
        return (
          <div style={styles.title}>{data.winner} ! Congrats! YOU WON!</div>
        );
      }
      if (data.result === "draw") {
        return <div style={styles.title}>A tie!</div>;
      }
    } else {
      return <div style={styles.title}>{data.nextPlayer}</div>;
    }
  }, [data.result, data.winner, data.nextPlayer]);

  return (
    <div style={styles.boardContainer as React.CSSProperties}>
      <div style={styles.header as React.CSSProperties}>
        {title}
        {!data.result && <div style={styles.iconContainer}>{icon}</div>}
      </div>
      {children}
      <div style={styles.buttonContainer as React.CSSProperties}>
        <button
          style={styles.button as React.CSSProperties}
          onClick={() => resetGame()}
        >
          Play again
        </button>
      </div>
    </div>
  );
};

export default BoardTemplate;
