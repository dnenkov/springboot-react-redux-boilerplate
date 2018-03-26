import todoApp from "reducers";
import {createStore} from "redux";
import todos from "reducers/todos";
import todoText from "reducers/todoText";

describe("root reducer test", () => {
  test("rood reducer should combine the reducers", () => {
    const store = createStore(todoApp);

    expect(store.getState().todos).toEqual(todos(undefined, {}));
    expect(store.getState().todoText).toEqual(todoText(undefined, {}));
  });
});