import React, { Component } from 'react';
import calculatorImg from '../calculatorImg.png';

class Calculator extends Component {
  constructor () {
    super();
    this.state = {
      header: 'Calculator is Cool',
      activeNum: '',
      storedNum: '',
      displayedNum: 0,
      operator: ''
    }
  }

  clearDisplay = () => {
    if (!this.state.storedNum) {
      this.setState({ activeNum: '', storedNum: '', displayedNum: 0, operator: '', })
    } else {
      this.setState({ displayedNum: 0 })
    }
  }

  onNumberClick = (num) => {
    this.setState({ activeNum: this.state.activeNum + num, displayedNum: this.state.activeNum + num });
  }

  onOperatorChange = (operator) => {
    if (!this.state.storedNum) {
      this.setState({ operator: operator, storedNum: this.state.activeNum, activeNum: '', });
    } else {
        let x = Number(this.state.storedNum);
        let y = Number(this.state.activeNum);
        switch (this.state.operator) {
          case '+':
            this.setState({ activeNum: '', storedNum: x + y, displayedNum: x + y, operator });
            break;
          case '-':
            this.setState({ activeNum: '', storedNum: x - y, displayedNum: x - y, operator });
            break;
          case '*':
            this.setState({ activeNum: '', storedNum: x * y, displayedNum: x * y, operator });
            break;
          case '/':
            this.setState({ activeNum: '', storedNum: x / y, displayedNum: x / y, operator });
            break;
          default:
            this.setState({ activeNum: '', operator })
            break;
      }
    }
  }

  render() {
    return (
      <div id="calculator-container">
        <input id="header-input"/>
        <h1 id="header"> {this.state.header} </h1>
        <img className="remove-highlight" src={calculatorImg} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total">{this.state.displayedNum}</span>
          </div>

          <div className="btn clear" onClick={this.clearDisplay}></div>

          <div className="btn zero" onClick={() => this.onNumberClick('0')}></div>
          <div className="btn one" onClick={() => this.onNumberClick('1')}></div>
          <div className="btn two" onClick={() => this.onNumberClick('2')}></div>
          <div className="btn three" onClick={() => this.onNumberClick('3')}></div>
          <div className="btn four" onClick={() => this.onNumberClick('4')}></div>
          <div className="btn five" onClick={() => this.onNumberClick('5')}></div>
          <div className="btn six" onClick={() => this.onNumberClick('6')}></div>
          <div className="btn seven" onClick={() => this.onNumberClick('7')}></div>
          <div className="btn eight" onClick={() => this.onNumberClick('8')}></div>
          <div className="btn nine" onClick={() => this.onNumberClick('9')}></div>

          <div className="btn equal" onClick={() => this.onOperatorChange('')}></div>
          <div className="btn multiply" onClick={() => this.onOperatorChange('*')}></div>
          <div className="btn divide" onClick={() => this.onOperatorChange('/')}></div>
          <div className="btn subtract" onClick={() => this.onOperatorChange('-')}></div>
          <div className="btn add" onClick={() => this.onOperatorChange('+')}></div>
        </div>
      </div>
    )
  }
}

export default Calculator;
