/* eslint-disable react/prefer-stateless-function */

import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <form>
            <input type="text" />
          </form>
          <div className="keypad">
            <button type="submit" className="clear num">AC</button>
            <button type="submit" className="ad num">+/-</button>
            <button type="submit" className="modulo num">%</button>
            <button type="submit" className="divide operator">&divide;</button>
            <button type="submit" className="num">7</button>
            <button type="submit" className="num">8</button>
            <button type="submit" className="num">9</button>
            <button type="submit" className="times operator">&times;</button>
            <button type="submit" className="num">4</button>
            <button type="submit" className="num">5</button>
            <button type="submit" className="num">6</button>
            <button type="submit" className="clear operator">&ndash;</button>
            <button type="submit" className="num">1</button>
            <button type="submit" className="num">2</button>
            <button type="submit" className="num">3</button>
            <button type="submit" className="add operator">+</button>
            <button type="submit" className="zero">0</button>
            <button type="submit" className="num">.</button>
            <button type="submit" className="equals operator">=</button>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
