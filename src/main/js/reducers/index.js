import {combineReducers} from 'redux';
import todos from './todos';
import changeText from "./todoText";

const todoApp = combineReducers({
  todos,
  changeText
});

export default todoApp;
