import React from 'react';
import TestUtils from "react-dom/test-utils";
import Root from "components/Root";

import App from "containers/App";

import {IntlProvider} from 'react-intl';
import {Provider} from "react-redux";

import defaultMessages from "messages/messages.json";
import {Route, Router} from "react-router-dom";

describe("RootTest", () => {
  it("should have intl provider", () => {
    const store = {
      subscribe: jest.fn(),
      dispatch: jest.fn(),
      getState: jest.fn()
    };

    const root = TestUtils.renderIntoDocument(<Root store={store}/>);

    const intlProvider = TestUtils.findRenderedComponentWithType(root, IntlProvider);

    expect(intlProvider.props.messages).toEqual(defaultMessages);
  });

  it("should have provider", () => {
    const store = {
      subscribe: jest.fn(),
      dispatch: jest.fn(),
      getState: jest.fn()
    };

    const root = TestUtils.renderIntoDocument(<Root store={store}/>);

    const provider = TestUtils.findRenderedComponentWithType(root, Provider);

    expect(provider.props.store).toEqual(store);
  });

  it("should have router", () => {
    const store = {
      subscribe: jest.fn(),
      dispatch: jest.fn(),
      getState: jest.fn()
    };

    const root = TestUtils.renderIntoDocument(<Root store={store}/>);

    const routers = TestUtils.scryRenderedComponentsWithType(root, Router);

    expect(routers.length).toEqual(1);
  });

  it("should have a single route", () => {
    const store = {
      subscribe: jest.fn(),
      dispatch: jest.fn(),
      getState: jest.fn()
    };

    const root = TestUtils.renderIntoDocument(<Root store={store}/>);

    const routes = TestUtils.scryRenderedComponentsWithType(root, Route);

    expect(routes.length).toEqual(1);
    expect(routes[0].props.path).toEqual("/:filter");
    expect(routes[0].props.component).toEqual(App);
  })
});