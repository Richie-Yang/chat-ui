// actions/globalActions.ts
import { SET_GLOBAL_VALUE } from "../type";

export const setGlobalValue = (value: string) => {
  return {
    type: SET_GLOBAL_VALUE,
    payload: value,
  };
};
