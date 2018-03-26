import React from 'react';
import {IntlProvider} from 'react-intl';
import TestUtils from "react-dom/test-utils";
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import defaultMessages from "messages/messages.json";

class BaseTestUtils {
  renderWithIntl(component) {
    return TestUtils.renderIntoDocument(
      <IntlProvider locale="en" messages={defaultMessages}>
        {component}
      </IntlProvider>
    );
  }

  renderWithRouter(component) {
    return this.renderWithIntl(
      <Router>
        {component}
      </Router>
    )
  }

  renderWithStore(component, store) {
    return this.renderWithIntl(
      <Provider store={store}>
        {component}
      </Provider>
    );
  }
}

export default new BaseTestUtils();