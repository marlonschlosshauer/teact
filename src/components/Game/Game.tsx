import { FC } from "react";
import styles from "./Game.module.scss";
import { Cell } from "../Cell/Cell";
import { projection } from "@/lib/draw";
import { useTetris } from "@/lib/provider";

export const Game: FC = () => {
  const game = useTetris();
  const { playground } = game;
  const { rows, columns } = playground;

  const map = projection(game);

  return (
    <div className={styles.wrapper}>
      {Array.from({ length: rows }).map((_, y) => (
        <div key={y} className={styles.row}>
          {Array.from({ length: columns }).map((_, x) => (
            <div
              data-x={x}
              data-y={y}
              key={`${x}-${y}`}
              className={styles.column}
            >
              <Cell {...map?.[x]?.[y]} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
