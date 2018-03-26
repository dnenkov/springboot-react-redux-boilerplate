import saga from "sagas";
import SagaTester from "redux-saga-tester";
import * as actions from "actions";
import * as apis from "apis";

describe("sagas test", () => {
  let sagaTester = null;

  beforeEach(() => {
    // Init code
    sagaTester = new SagaTester({});
    sagaTester.start(saga);
  });

  test("ADD_TODO should call the api to add a todo and dispatch GET_TODOS action", () => {
    apis.addTodoAPI = jest.fn();

    sagaTester.dispatch(actions.addTodo("todo", "ALL"));

    sagaTester.waitFor(actions.GET_TODOS);

    expect(apis.addTodoAPI).toBeCalledWith("todo");
    expect(sagaTester.getLatestCalledAction()).toEqual({
      type: 'GET_TODOS',
      visibilityFilter: 'ALL'
    });
  });

  test("GET_TODOS should call the api to get the todos and dispatch a GET_TODOS_SUCCESS action", () => {
    const todos = [{
      id: "1",
      text: "Todo",
      completed: false
    }];
    apis.getTodosAPI = jest.genMockFunction().mockReturnValue(todos);

    sagaTester.dispatch(actions.getTodos("ALL"));

    sagaTester.waitFor(actions.GET_TODOS_SUCCESS);

    expect(apis.getTodosAPI).toBeCalledWith("ALL");
    expect(sagaTester.getLatestCalledAction()).toEqual({
      type: actions.GET_TODOS_SUCCESS,
      todos: todos
    });
  });

  test("GET_TODOS should dispatch a GET_TODOS_ERROR when the api throws an exception", async () => {
    apis.getTodosAPI = jest.fn().mockReturnValue(Promise.reject("error"));

    sagaTester.dispatch(actions.getTodos("ALL"));

    await sagaTester.waitFor(actions.GET_TODOS_ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual({
      type: actions.GET_TODOS_ERROR,
      error: "error"
    });
  });

  test("TOGGLE_TODO should call the api to update the todo and dispatch GET_TODOS", () => {
    apis.updateTodoAPI = jest.fn();

    sagaTester.dispatch(actions.toggleTodo({id: "1", text: "todo", completed: false}, "ALL"));

    sagaTester.waitFor(actions.GET_TODOS);

    expect(apis.updateTodoAPI).toBeCalledWith({
      id: "1",
      text: "todo",
      completed: true
    });
    expect(sagaTester.getLatestCalledAction()).toEqual({
      type: 'GET_TODOS',
      visibilityFilter: 'ALL'
    });
  });
});