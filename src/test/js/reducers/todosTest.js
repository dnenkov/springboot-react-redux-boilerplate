import {GET_TODOS_SUCCESS} from "actions";
import todos from "reducers/todos";

describe("todos reducer test", () => {
  test("should return the todos from the action on GET_TODOS_SUCCESS", () => {
    const todoItems = [{
      id: "1",
      text: "Todo 1",
      completed: false
    }];

    const updatedState = todos([], {type: GET_TODOS_SUCCESS, todos: todoItems});

    expect(updatedState).toEqual(todoItems);
  });

  test("should return the state on any other action", () => {
    const todoItems = [{
      id: "1",
      text: "Todo 1",
      completed: false
    }];

    const updatedState = todos([], {type: "RANDOM_ACTION", todos: todoItems});

    expect(updatedState).toEqual([]);

  });
});