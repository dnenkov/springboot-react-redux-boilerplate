import {fetchTodos} from "../actions";

const visibilityFilter = (state = 'ALL', action) => {
  switch (action.type) {
    case 'LOCATION_CHANGE':
      console.log("Location change", action);
      return state;
    case 'FETCH_VISIBLE_TODOS':
      action.asyncDispatch(fetchTodos(state));
      return state;
    default:
      return state
  }
};

export default visibilityFilter
