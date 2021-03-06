export type DataType = {
  board: Array<Array<string | null>>;
  nextPlayer: string;
  round: number;
  result?: string;
  winner?: string;
  winSquares?: Array<{ x: number; y: number }>;
};
