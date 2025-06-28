import { Cell as Base } from "@/types/game";
import { FC } from "react";

export type CellProps = Base;

export const Cell: FC<CellProps> = ({ status }) => {
  return (
    <div
      style={{
        width: 24,
        height: 24,
        backgroundColor:
          status === "filled" || status === "active" ? "blue" : "lightblue",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor:
          status === "filled"
            ? "darkblue"
            : status === "active"
              ? "blue"
              : "darkgrey",
      }}
    />
  );
};
