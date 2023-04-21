import { applyMiddleware, createStore } from "redux";
import { composeWhithDevTools } from "redux-devtools-extensions";
import thunk from "redux-thunk"; //Es un midd leware

export const store = createStore(
  rootReducer,
  composeWhithDevTools(applyMiddleware(thunk))
);
