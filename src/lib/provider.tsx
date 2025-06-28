import { Game } from "@/types/game";
import {
  ActionDispatch,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { Event, reduce } from "./logic";

export interface ProviderData extends Game {
  dispatch: ActionDispatch<[event: Event]>;
}

export type ProviderProps = Game;

const Context = createContext({} as ProviderData);

export const Provider: FC<PropsWithChildren<ProviderProps>> = ({
  children,
  ...props
}) => {
  const [state, dispatch] = useReducer(reduce, props);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const useTetris = () => useContext(Context);
