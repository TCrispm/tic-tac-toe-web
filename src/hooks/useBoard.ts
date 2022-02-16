import api from "../utils/api";
import { useCallback, useEffect, useState } from "react";

export function useBoard() {
  const [data, setData] = useState<Array<Array<string | null>> | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [winner, setWinner] = useState<string | undefined>();
  const [result, setResult] = useState<string | undefined>();

  const getBoard = async () => {
    try {
      setLoading(true);
      const response = await api.get("/tictactoe");
      setData(response.data.board);
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
      const {
        board,
        gameWinner: gameWinner,
        result: gameResult,
      } = response.data;
      setData(board);
      setWinner(gameWinner);
      setResult(gameResult);
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
      setData(undefined);
      setWinner(undefined);
      setResult(undefined);
      setLoading(false);
    } catch (e: any) {
      setError(e);
      setLoading(false);
    }
  }, []);

  return { data, winner, result, error, loading, updateBoard, resetGame };
}
