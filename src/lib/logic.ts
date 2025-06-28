import { Game } from "@/types/game";

export type EventMoveDown = { type: "DOWN" };

export type EventMoveLeft = { type: "LEFT" };

export type EventMoveRight = { type: "RIGHT" };

export type EventRotate = { type: "ROTATE" };

export type EventDrop = { type: "DROP" };
export type EventTick = { type: "TICK" };
export type EventStore = { type: "STORE" };

export type Event =
  | EventMoveDown
  | EventMoveLeft
  | EventMoveRight
  | EventRotate;

export const reduce = (game: Game, event: Event) => {
  const { active, playground } = game;
  const { rows, columns } = playground;
  switch (event.type) {
    case "ROTATE": {
      return { ...game, active: { ...active, x: Math.max(active.x - 1, 0) } };
    }
    case "DOWN": {
      return {
        ...game,
        active: { ...active, x: Math.min(active.x + 1, rows - 1) },
      };
    }
    case "LEFT": {
      return { ...game, active: { ...active, y: Math.max(active.y - 1, 0) } };
    }
    case "RIGHT": {
      return {
        ...game,
        active: { ...active, y: Math.min(active.y + 1, columns - 1) },
      };
    }
    default:
      return game;
  }
};
