import React from 'react';
import BaseTestUtils from "../BaseTestUtils";
import TestUtils from "react-dom/test-utils";
import configureStore from 'redux-mock-store'
import AddTodo from "containers/AddTodo";

describe("AddTodoTest", () => {
  let mockStore;
  beforeEach(() => {
    mockStore = configureStore([]);
  });
  it("should display the todo text from the state", () => {
    const initialState = {todoText: "Todo"};
    const store = mockStore(initialState);

    const addTodo = BaseTestUtils.renderWithStore(<AddTodo />, store);

    const input = TestUtils.findRenderedDOMComponentWithTag(addTodo, "input");

    expect(input.value).toEqual("Todo");
  });

  it("should dispatch CHANGE_TODO_TEXT when the text is changed", () => {

    const initialState = {todoText: "Todo"};
    const store = mockStore(initialState);

    const addTodo = BaseTestUtils.renderWithStore(<AddTodo />, store);

    const input = TestUtils.findRenderedDOMComponentWithTag(addTodo, "input");

    TestUtils.Simulate.change(input, {target: {value: "Todo 1"}});

    const actions = store.getActions();
    const expectedPayload = { type: 'CHANGE_TODO_TEXT', text: "Todo 1" };
    expect(actions).toEqual([expectedPayload]);
  });

  it("should dispatch ADD_TODO and CHANGE_TODO_TEXT when the button is clicked", () => {
    const initialState = {todoText: "Todo"};
    const store = mockStore(initialState);

    const addTodo = BaseTestUtils.renderWithStore(<AddTodo filter="ALL"/>, store);

    const form = TestUtils.findRenderedDOMComponentWithTag(addTodo, "form");
    TestUtils.Simulate.submit(form);

    const actions = store.getActions();
    const addTodoAction = { type: "ADD_TODO", text: "Todo", filter: "ALL" };
    const changeTodoTextAction = { type: "CHANGE_TODO_TEXT", text: "" };

    expect(actions).toEqual([addTodoAction, changeTodoTextAction]);

  });


});