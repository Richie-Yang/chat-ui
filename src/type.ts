// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject<T = any> = {
  [key: string]: T;
};

export interface GlobalState {
  globalValue: string | null;
}

export const SET_GLOBAL_VALUE = "SET_GLOBAL_VALUE";

interface SetGlobalValueAction {
  type: typeof SET_GLOBAL_VALUE;
  payload: string;
}

export type GlobalActionTypes = SetGlobalValueAction;
