import {combineReducers} from 'redux';
import todos from './todos';
import todoText from "./todoText";

const todoApp = combineReducers({
  todos,
  todoText
});

export default todoApp;
