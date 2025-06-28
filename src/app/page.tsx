"use client";

import { Game } from "@/components/Game/Game";
import styles from "./page.module.css";
import { Provider } from "@/lib/provider";
import { Input } from "@/components/Input/Input";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Provider
          {...{
            active: { block: 10, x: 0, y: 0 },
            playground: { rows: 24, columns: 12 },
            cells: [
              { x: 12, y: 0, status: "filled" },
              { x: 1, y: 16, status: "filled" },
              { x: 1, y: 12, status: "filled" },
              { x: 2, y: 3, status: "filled" },
              { x: 7, y: 20, status: "filled" },
              { x: 12, y: 3, status: "filled" },
              { x: 9, y: 7, status: "filled" },
            ],
            queue: [],
          }}
        >
          <Input />
          <Game />
        </Provider>
      </main>
    </div>
  );
}
