export type Block =
  | 0
  | 1
  | 10
  | 100
  | 1000
  | 2
  | 20
  | 200
  | 2000
  | 3
  | 30
  | 300
  | 3000
  | 4
  | 40
  | 400
  | 4000
  | 5
  | 50
  | 500
  | 5000
  | 6
  | 60
  | 600
  | 6000;

export type CellStatus = "empty" | "filled" | "ghost" | "active";

export interface Cell {
  status: CellStatus;
  x: number;
  y: number;
}

export interface Playground {
  rows: number;
  columns: number;
}

export interface Active {
  block: Block;
  x: number;
  y: number;
}

export interface Game {
  playground: Playground;
  cells: Cell[];
  active: Active;
  queue: Block[];
}
