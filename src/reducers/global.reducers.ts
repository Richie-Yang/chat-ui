// reducers/globalReducer.ts
import { GlobalState, GlobalActionTypes, SET_GLOBAL_VALUE } from "../type";

const initialState: GlobalState = {
  globalValue: null,
};

const globalReducer = (
  state = initialState,
  action: GlobalActionTypes
): GlobalState => {
  switch (action.type) {
    case SET_GLOBAL_VALUE:
      return {
        ...state,
        globalValue: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
