import todoText from "reducers/todoText";
import {CHANGE_TODO_TEXT} from "actions";

describe("todo text reducer test", () => {
  test("should return the text from the action on CHANGE_TODO_TEXT", () => {
    const action = {
      type: CHANGE_TODO_TEXT,
      text: "Todo 1"
    };

    const updateState = todoText('', action);

    expect(updateState).toEqual("Todo 1");

  });

  test("should return the state on any other action", () => {
    const action = {
      type: "RANDOM_ACTION",
      text: "Todo 1"
    };

    const updateState = todoText('', action);

    expect(updateState).toEqual("");
  });
});