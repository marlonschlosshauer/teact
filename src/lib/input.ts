import { useCallback, useEffect } from "react";
import { useTetris } from "./provider";

export const useInput = () => {
  const { dispatch } = useTetris();

  const fn = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "a":
          return dispatch({ type: "LEFT" });
        case "d":
          return dispatch({ type: "RIGHT" });
        case "w":
          return dispatch({ type: "ROTATE" });
        case "s":
          return dispatch({ type: "DOWN" });
      }
    },
    [dispatch],
  );

  useEffect(() => {
    window.addEventListener("keydown", fn);

    return () => window.removeEventListener("keydown", fn);
  }, [fn]);
};
