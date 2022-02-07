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
          setcurrentCal(`${resultCal}+`);
          numExist = false;
          i = 1;
          break;
        }

      default:
        if (resultCal === '0') {
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
