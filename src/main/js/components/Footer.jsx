import React from 'react';
import NavLink from "react-router-dom/es/NavLink";
import {injectIntl} from "react-intl";

class Footer extends React.Component {
  render() {
    return (
      <p>
        Show:
        {" "}
        <NavLink to="/">{this.props.intl.formatMessage({id: "filter.all"})}</NavLink>
        {", "}
        <NavLink to="/ACTIVE">{this.props.intl.formatMessage({id: "filter.active"})}</NavLink>
        {", "}
        <NavLink to="/COMPLETED">{this.props.intl.formatMessage({id: "filter.completed"})}</NavLink>
      </p>
    );
  }
}

export default injectIntl(Footer);
