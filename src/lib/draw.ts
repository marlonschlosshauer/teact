import { Active, Cell, CellStatus, Game, Playground } from "@/types/game";
import { tetrimoni } from "./tetrimoni";
import { CellProps } from "@/components/Cell/Cell";

export const projectActive = (
  active: Active,
  playground: Playground,
): Cell[][] => {
  const field = tetrimoni(active.block);

  const map = Array.from({ length: playground.rows }).map((_, x) =>
    Array.from({ length: playground.columns }).map((_, y) => ({
      x,
      y,
      status: "empty" as CellStatus,
    })),
  );

  field.forEach((row, x) => {
    row.forEach((value, y) => {
      map[x + active.x][y + active.y] = {
        ...map[x + active.x][y + active.y],
        status: value ? "active" : map[x + active.x][y + active.y].status,
      };
    });
  });

  return map;
};

export const projectCells = (
  cells: CellProps[],
  playground: Playground,
): Cell[][] => {
  const map = Array.from({ length: playground.rows }).map((_, x) =>
    Array.from({ length: playground.columns }).map((_, y) => ({
      x,
      y,
      status: "empty" as CellStatus,
    })),
  );

  cells.forEach((cell) => (map[cell.x][cell.y] = cell));

  return map;
};

export const projection = (game: Game): Cell[][] => {
  const projectedActive = projectActive(game.active, game.playground);
  const projectedCells = projectCells(game.cells, game.playground);

  const map = Array.from({ length: game.playground.rows }).map((_, x) =>
    Array.from({ length: game.playground.columns }).map((_, y) => ({
      x,
      y,
      status:
        projectedActive[x][y].status === "active"
          ? projectedActive[x][y].status
          : projectedCells[x][y].status,
    })),
  );

  return map;
};
