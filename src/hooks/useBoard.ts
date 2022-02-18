import api from "../utils/api";
import { useCallback, useEffect, useState } from "react";
import { DataType } from "../types/DataType";

export function useBoard() {
  const [data, setData] = useState<DataType>({
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    nextPlayer: "Player 1",
    round: 0,
    result: undefined,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const getBoard = async () => {
    try {
      setLoading(true);
      const response = await api.get("/tictactoe");
      setData(response.data);
      setLoading(false);
    } catch (e: any) {
      setError(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBoard();
  }, []);

  const updateBoard = useCallback(async (player, x, y) => {
    try {
      setLoading(true);
      const response = await api.post("/tictactoe", {
        player,
        x,
        y,
      });
      setData(response.data);
      setLoading(false);
    } catch (e: any) {
      setError(e);
      setLoading(false);
    }
  }, []);

  const resetGame = useCallback(async () => {
    try {
      setLoading(true);
      await api.post("/tictactoe/reset");
      setData({
        board: [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ],
        nextPlayer: "Player 1",
        round: 0,
      });
      setLoading(false);
    } catch (e: any) {
      setError(e);
      setLoading(false);
    }
  }, []);

  return { data, error, loading, updateBoard, resetGame };
}
