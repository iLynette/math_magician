/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const buttons = e.target.id;
    const { total, next, operation } = calculate(this.state, buttons);
    if (next === null && total === null) {
      this.setState({ next, total: 0, operation });
    } else {
      this.setState({ next, total, operation });
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="input_field">
            {this.state.total}
            {this.state.operation}
            {this.state.next}
          </div>
          <div className="keypad">
            <button id="AC" onClick={this.handleClick} type="submit" className="clear num">AC</button>
            <button id="+/-" onClick={this.handleClick} type="submit" className="ad num">+/-</button>
            <button id="%" onClick={this.handleClick} type="submit" className="modulo num">%</button>
            <button id="÷" onClick={this.handleClick} type="submit" className="divide operator">&divide;</button>
            <button id="7" onClick={this.handleClick} type="submit" className="num">7</button>
            <button id="8" onClick={this.handleClick} type="submit" className="num">8</button>
            <button id="9" onClick={this.handleClick} type="submit" className="num">9</button>
            <button id="x" onClick={this.handleClick} type="submit" className="times operator">&times;</button>
            <button id="4" onClick={this.handleClick} type="submit" className="num">4</button>
            <button id="5" onClick={this.handleClick} type="submit" className="num">5</button>
            <button id="6" onClick={this.handleClick} type="submit" className="num">6</button>
            <button id="-" onClick={this.handleClick} type="submit" className="minus operator">&ndash;</button>
            <button id="1" onClick={this.handleClick} type="submit" className="num">1</button>
            <button id="2" onClick={this.handleClick} type="submit" className="num">2</button>
            <button id="3" onClick={this.handleClick} type="submit" className="num">3</button>
            <button id="+" onClick={this.handleClick} type="submit" className="add operator">+</button>
            <button id="0" onClick={this.handleClick} type="submit" className="zero">0</button>
            <button id="." onClick={this.handleClick} type="submit" className="num">.</button>
            <button id="=" onClick={this.handleClick} type="submit" className="equals operator">=</button>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
