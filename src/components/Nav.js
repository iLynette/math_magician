/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navBar">
        <h3>Math Magician</h3>
        <div className="navItems">
          <ul className="navMenu">
            <li>Home</li>
            <li>Calculator</li>
            <li>Quotes</li>
          </ul>
        </div>
      </nav>
    );
  }
}
