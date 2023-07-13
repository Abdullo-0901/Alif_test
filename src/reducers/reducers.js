import { combineReducers } from "@reduxjs/toolkit";
import todo from "./todos";

const rootReducer = combineReducers({
  todos: todo,
});

export default rootReducer;
