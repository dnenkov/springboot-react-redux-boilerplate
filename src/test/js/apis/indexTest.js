import fetchMock from "fetch-mock";
import * as apis from "apis";

describe("apis index test", () => {
  test("addTodoAPI should send a POST request", () => {
    fetchMock.post("/todos/", 200);

    apis.addTodoAPI("text");

    expect(fetchMock.lastOptions().body).toEqual(JSON.stringify({text: "text"}));
    expect(fetchMock.lastOptions().headers).toEqual({
      "Content-Type": "application/json"
    });

  });

  test("getTodosAPI should send a GET request", () => {
    const todos = [{
      id: "1",
      text: "Todo 1",
      completed: false
    }];

    fetchMock.get("/todos/?visibilityFilter=ALL", JSON.stringify(todos));

    const promise = apis.getTodosAPI("ALL");

    promise.then((res) => {
      expect(res.json()).toEqual(todos);
    })
  });

  test("updateTodoAPI should send a put request", () => {
    const todo = {id: "1", text: "Todo 1", completed: true};

    fetchMock.put("/todos/1", 200);

    apis.updateTodoAPI(todo);

    expect(fetchMock.lastOptions().body).toEqual(JSON.stringify(todo));
    expect(fetchMock.lastOptions().headers).toEqual({
      "Content-Type": "application/json"
    });
  });

  afterEach(() => {
    fetchMock.restore();
  });
});