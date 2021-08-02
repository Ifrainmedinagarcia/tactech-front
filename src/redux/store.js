import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  postcharacterReducer,
  getCharacterReducer,
  getCharacterReducerById,
} from "./reducers";

export default createStore(
  combineReducers({
    postcharacterReducer,
    getCharacterReducer,
    getCharacterReducerById,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
