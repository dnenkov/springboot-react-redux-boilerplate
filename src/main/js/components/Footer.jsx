import React from 'react';
import NavLink from "react-router-dom/es/NavLink";

class Footer extends React.Component {
  render() {
    return (
      <p>
        Show:
        {" "}
        <NavLink to="/">All</NavLink>
        {", "}
        <NavLink to="/ACTIVE">Active</NavLink>
        {", "}
        <NavLink to="/COMPLETED">Completed</NavLink>
      </p>
    );
  }
}

export default Footer;
