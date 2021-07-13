import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./reducer/AuthReducers";
import { HotelReducer } from "./reducer/HotelReducers";

const reducer = combineReducers({
  AuthReducer,
  HotelReducer,
});

const Store = createStore(reducer, applyMiddleware(thunk));

export default Store;
