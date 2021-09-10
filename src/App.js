import Display from './components/Display';
import Button from './components/Button';
import calculateOperand from './logic/calculate-operand';
import calculateOperator from './logic/calculate-operator';
import { useState } from 'react';
import './App.css';


function App() {
  const operands = [
    '0', '1', '2', '3', '4', '5', '6','7','8','9','.', '%'
  ];
  const operators = [
    'AC', '+/-', '/','x','-','+','='
  ]
  const [equation, setEquation] = useState([]);
  const [calculation, setCalculation] = useState('0');
  const updateCalculation = (val) => {
    if (operands.includes(val)) {
      if (calculation ==='0') {
        if (val === '%') {
          setCalculation('0');
          return;
        }
        setCalculation(val);
        return;
      }
      else {
        setCalculation(calculateOperand(equation, calculation, val));
      }
    }
    else if (operators.includes(val)) {
      setCalculation(calculateOperator(equation, calculation, val));
    }
  }
  return (
    <div className="App">
      <Display calculation={calculation} prev_calculation={equation[0]}/>
      <table className="calculator">
        <tbody>
          <tr>
            <td>
              <Button clickHandler={updateCalculation}type="AC"/>
            </td>
            <td>
              <Button clickHandler={updateCalculation}type="+/-"/>
            </td>
            <td>
              <Button clickHandler={updateCalculation}type="%"/>
            </td>
            <td>
              <Button clickHandler={updateCalculation}type="/"/>
            </td>
          </tr>
          <tr>
            <td>
              <Button clickHandler={updateCalculation}type="7"/>
            </td>
            <td>
              <Button clickHandler={updateCalculation}type="8"/>
            </td>
            <td>
              <Button clickHandler={updateCalculation}type="9"/>
            </td>
            <td>
              <Button clickHandler={updateCalculation}type="x"/>
            </td>
          </tr>
          <tr>
            <td>
              <Button clickHandler={updateCalculation}type="4"/>
            </td>
            <td>
              <Button clickHandler={updateCalculation}type="5"/>
            </td>
            <td>
              <Button clickHandler={updateCalculation}type="6"/>
            </td>
            <td>
              <Button clickHandler={updateCalculation}type="-"/>
            </td>
          </tr>
          <tr>
            <td>
              <Button clickHandler={updateCalculation}type="1"/>
            </td>
            <td>
              <Button clickHandler={updateCalculation}type="2"/>
            </td>
            <td>
              <Button clickHandler={updateCalculation}type="3"/>
            </td>
            <td>
              <Button clickHandler={updateCalculation}type="+"/>
            </td>
          </tr>
          <tr>
            <td>
            </td>
            <td>
              <Button clickHandler={updateCalculation}type="0"/>
            </td>
            <td>
              <Button clickHandler={updateCalculation}type="."/>
            </td>
            <td>
              <Button clickHandler={updateCalculation}type="="/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App;
