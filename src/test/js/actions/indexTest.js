import * as actions from "actions";

describe("actions index test", () => {
  test("addTodo should return object with type, text and, filter when calling", () => {
    const addTodoAction = actions.addTodo("dummy text", "ALL");

    expect(addTodoAction).toEqual({
      type: 'ADD_TODO',
      text: 'dummy text',
      filter: 'ALL'
    });
  });

  test("getTodos should return the type and the visibility filter", () => {
    const getTodosAction = actions.getTodos("ALL");

    expect(getTodosAction).toEqual({
      type: "GET_TODOS",
      visibilityFilter: "ALL"
    });
  });

  test("getTodosSuccess should return the type and the todos", () => {
    const todos = [{
      id: "1",
      text: "Todo 1",
      completed: false
    }, {
      id: "2",
      text: "Todo 2",
      completed: true
    }];

    const getTodosSuccess = actions.getTodosSuccess(todos);

    expect(getTodosSuccess).toEqual({
      type: "GET_TODOS_SUCCESS",
      todos: todos
    });
  });

  test("getTodosError should return the type and the error", () => {
    const getTodosError = actions.getTodosError("Something went wrong");

    expect(getTodosError).toEqual({
      type: "GET_TODOS_ERROR",
      error: "Something went wrong"
    });
  });

  test("toggleTodo should return the type, the todo and the filter", () => {
    const todo = {
      id: "1",
      text: "Todo 1",
      completed: true
    };
    const toggleTodo = actions.toggleTodo(todo, "ALL");

    expect(toggleTodo).toEqual({
      type: "TOGGLE_TODO",
      todo: todo,
      filter: "ALL"
    });
  });

  test("changeTodoText should return the type and the text", () => {
    const changeTodoText = actions.changeTodoText("New todo 1");

    expect(changeTodoText).toEqual({
      type: "CHANGE_TODO_TEXT",
      text: "New todo 1"
    });
  });
});