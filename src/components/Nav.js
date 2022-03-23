import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.PureComponent {
  render() {
    return (
      <nav className="navBar">
        <NavLink className="header" to="/">
          <h3 className="title">Math Magicians</h3>
        </NavLink>
        <div className="navItems">
          <ul className="navMenu">
            <li><NavLink className="homeLink" to="/">Home </NavLink></li>
            <li><NavLink className="calculatorLink" to="/calculator">Calculator</NavLink></li>
            <li><NavLink className="quotesLink" to="/quotes">Quotes</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}
