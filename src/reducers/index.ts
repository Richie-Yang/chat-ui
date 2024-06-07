import { combineReducers } from "redux";
import globalReducer from "./global.reducers";

const reducer = combineReducers({
  global: globalReducer,
  // other reducers can be added here
});

export default reducer;
