/* eslint-disable import/order */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import GlobalStyle from './style/Global';
// import ButtonPresenter from './components/Presenter/ButtonPresenter';
import ControlContainer from './components/Container/ControlContainer';
import Calculator from './components/Presenter/CalculatorPresenter';
import DisplayContainer from './components/Container/DisplayContainer';
import {evaluate} from 'mathjs';

let numExist = true;
const numArray = [];
let i = 1;
let num1 = 0;
let op = '';
let num2 = 0;
let sum = 0;

function App() {
  const [currentCal, setcurrentCal] = useState([]);
  const [resultCal, setresultCal] = useState('0');

  const tempChange = e => {
    const value = e.target.value;
    switch (value) {
      case 'C':
        setresultCal(0);
        setcurrentCal('');
        break;
      case '+':
        if (resultCal === '0') {
          break;
        } else {
          num1 = resultCal;
          op = value;
          setcurrentCal(`${resultCal}+`);
          numExist = false;
          i = 1;
          break;
        }
      case '-':
        if (resultCal === '0') {
          break;
        } else {
          num1 = resultCal;
          op = value;
          setcurrentCal(`${resultCal}-`);
          numExist = false;
          i = 1;
          break;
        }
      case 'x':
        if (resultCal === '0') {
          break;
        } else {
          num1 = resultCal;
          op = value;
          setcurrentCal(`${resultCal}x`);
          numExist = false;
          i = 1;
          break;
        }
      case '/':
        if (resultCal === '0') {
          break;
        } else {
          num1 = resultCal;
          op = value;
          setcurrentCal(`${resultCal}/`);
          numExist = false;
          i = 1;
          break;
        }
      case '%':
        if (resultCal === '0') {
          break;
        } else {
          num1 = resultCal;
          op = value;
          setcurrentCal(`${resultCal}%`);
          numExist = false;
          i = 1;
          break;
        }
      case '+/-':
        if (resultCal === '0') {
          break;
        } else {
          setresultCal(resultCal * -1);
          break;
        }
      case 'Del':
        if (resultCal === '0') {
          break;
        } else {
          setresultCal(0);
          break;
        }
      case '=':
        num2 = resultCal;
        if (op === '+') {
          sum = parseInt(num1, 10) + parseInt(num2, 10);
        } else if (op === '-') {
          sum = parseInt(num1, 10) - parseInt(num2, 10);
        } else if (op === 'x') {
          sum = parseInt(num1, 10) * parseInt(num2, 10);
        } else if (op === '/') {
          sum = parseInt(num1, 10) / parseInt(num2, 10);
        } else if (op === '%') {
          sum = parseInt(num1, 10) % parseInt(num2, 10);
        }
        setresultCal(sum);
        setcurrentCal('');
        break;
      default:
        if ((resultCal === '0' || resultCal === 0) && value !== '.') {
          setresultCal(value);
          numArray[0] = value;
        } else if (numExist === true) {
          setresultCal(resultCal + value);
          numArray[i] = value;
          i += 1;
        } else {
          setresultCal(value);
          numArray[0] = value;
          numExist = true;
        }
    }
  };
  return (
    <>
      <Calculator>
        <DisplayContainer CurrentCal={currentCal} ResultCal={resultCal} />
        <ControlContainer calculateFunc={tempChange} />
      </Calculator>
      <GlobalStyle />
    </>
  );
}

export default App;
