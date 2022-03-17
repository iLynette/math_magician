import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  const handleClick = (e) => {
    const { total, next, operation } = calculate(state, e.target.textContent);
    if (next === null && total === null) {
      setState({ next, total: 0, operation });
    } else {
      setState({ next, total, operation });
    }
  };

  return (
    <div className="container">
      <div className="input_field">
        {state.total}
        {state.operation}
        {state.next}
      </div>
      <div className="keypad">
        <button onClick={handleClick} type="submit" className="clear num">AC</button>
        <button onClick={handleClick} type="submit" className="ad num">+/-</button>
        <button onClick={handleClick} type="submit" className="modulo num">%</button>
        <button onClick={handleClick} type="submit" className="divide operator">÷</button>
        <button onClick={handleClick} type="submit" className="num">7</button>
        <button onClick={handleClick} type="submit" className="num">8</button>
        <button onClick={handleClick} type="submit" className="num">9</button>
        <button onClick={handleClick} type="submit" className="times operator">x</button>
        <button onClick={handleClick} type="submit" className="num">4</button>
        <button onClick={handleClick} type="submit" className="num">5</button>
        <button onClick={handleClick} type="submit" className="num">6</button>
        <button onClick={handleClick} type="submit" className="minus operator">-</button>
        <button onClick={handleClick} type="submit" className="num">1</button>
        <button onClick={handleClick} type="submit" className="num">2</button>
        <button onClick={handleClick} type="submit" className="num">3</button>
        <button onClick={handleClick} type="submit" className="add operator">+</button>
        <button onClick={handleClick} type="submit" className="zero">0</button>
        <button onClick={handleClick} type="submit" className="num">.</button>
        <button onClick={handleClick} type="submit" className="equals operator">=</button>
      </div>
    </div>
  );
};

export default Calculator;
