import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/index";


export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);


