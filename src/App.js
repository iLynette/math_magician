/* eslint-disable react/prefer-stateless-function */

import { Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    );
  }
}

export default App;
