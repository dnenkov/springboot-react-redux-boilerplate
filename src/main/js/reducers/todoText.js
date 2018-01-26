import {CHANGE_TODO_TEXT} from "../actions";

const changeText = (state = '', action) => {
  switch (action.type) {
    case CHANGE_TODO_TEXT:
      return action.text;
    default:
      return state;
  }
};

export default changeText;