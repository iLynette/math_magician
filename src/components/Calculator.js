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
            <div className="clear num">AC</div>
            <div className="ad num">+/-</div>
            <div className="modulo num">%</div>
            <div className="divide operator">&divide;</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="times operator">&times;</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="clear operator">&ndash;</div>
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="add operator">+</div>
            <div className="zero">0</div>
            <div className="num">.</div>
            <div className="equals operator">=</div>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
