import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from "../containers/App";
import {IntlProvider} from 'react-intl';

import defaultMessages from "../messages/messages.json";

class Root extends React.Component {
  render() {
    return (
      <IntlProvider locale={navigator.language} messages={defaultMessages}>
        <Provider store={this.props.store}>
          <Router>
            <Route path="/:filter" component={App} />
          </Router>
        </Provider>
      </IntlProvider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;