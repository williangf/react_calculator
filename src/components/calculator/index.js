import React from 'react';
import './calculator.scss';

class Calculator extends React.PureComponent {

  constructor() {
    super();
    let numbers = [];
    for (let i = 1; i < 10; i++) numbers.push(i);
    numbers.push(0);
    this.state = {
      number: '_',
      numbers
    }
  }

  setNumber = (number) => () => {
    this.setState({
      number: number
    })
  }

  render() {
    const { number, numbers } = this.state;
    return (
      <div className="calculator-scene">
        <div className="calculator">
          <h1>{number}</h1>
          <div className="calculator__operation-buttons">
            <button>+</button>
            <button>-</button>
            <button>x</button>
            <button>/</button>
          </div>
          <hr />
          <div className="calculator__numbers">
            {numbers.map(number => <button key={number} onClick={this.setNumber(number)}>{number}</button>)}
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator;
