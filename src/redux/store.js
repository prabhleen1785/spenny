import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import chartReducer from "./chartReducer.js";

const store = createStore(chartReducer, applyMiddleware(thunk));
console.log("store state", store.getState());

export default store;
