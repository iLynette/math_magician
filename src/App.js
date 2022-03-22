/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

class App extends React.Component {
  render() {
    return (
      <div className="Calculator">
        <Nav />
        <Home />
        <Calculator />
        <Quotes />
      </div>
    );
  }
}

export default App;
