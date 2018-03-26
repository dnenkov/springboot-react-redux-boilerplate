import React from 'react';
import TestUtils from "react-dom/test-utils";
import Todo from "components/Todo";

describe("TodoTest", () => {
  it("should call onClick from the props on click", () => {
    const handleClick = jest.fn();
    const todo = TestUtils.renderIntoDocument(
      <Todo onClick={handleClick} completed={false} text={"Todo 1"}/>
    );

    const li = TestUtils.findRenderedDOMComponentWithTag(todo, "li");

    TestUtils.Simulate.click(li);
    expect(handleClick).toBeCalled();
  });

  it("should have a line-through when completed", () => {
    const todo = TestUtils.renderIntoDocument(
      <Todo onClick={jest.fn()} completed={true} text={"Todo 1"}/>
    );

    const li = TestUtils.findRenderedDOMComponentWithTag(todo, "li");

    expect(li.style["text-decoration"]).toEqual("line-through");
  });

  it("should not have a text decoration when not completed", () => {
    const todo = TestUtils.renderIntoDocument(
      <Todo onClick={jest.fn()} completed={false} text={"Todo 1"}/>
    );

    const li = TestUtils.findRenderedDOMComponentWithTag(todo, "li");

    expect(li.style["text-decoration"]).toEqual("none");
  });

  it("should display the todo text", () => {
    const todo = TestUtils.renderIntoDocument(
      <Todo onClick={jest.fn()} completed={false} text={"Todo 1"}/>
    );

    const li = TestUtils.findRenderedDOMComponentWithTag(todo, "li");
    expect(li.textContent).toEqual("Todo 1");
  });
});