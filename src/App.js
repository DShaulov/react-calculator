import Display from './components/Display';
import Button from './components/Button';
import calculate from './logic/calculate';
import { useState } from 'react';
import './App.css';

function App() {
  const [calculation, setCalculation] = useState('');
  const updateCalculation = (update) => {
    if (calculation ==='0') {
      setCalculation(update);
    }
    let new_calculation = calculation.concat(update);
    setCalculation(new_calculation);
  }
  return (
    <div className="App">
      <Display/>
      <table className="calculator">
      <tr>
        <td>
          <Button clickHandler={calculate} type="π" />
        </td>
        <td>
          <Button clickHandler={calculate}type="e"/>
        </td>
        <td>
          <Button clickHandler={calculate}type="c"/>
        </td>
        <td>
          <Button clickHandler={calculate}type="del"/>
        </td>
      </tr>
      <tr>
        <td>
          <Button clickHandler={calculate}type="1/x"/>
        </td>
        <td>
          <Button clickHandler={calculate}type="|x|"/>
        </td>
        <td>
          <Button clickHandler={calculate}type="exp"/>
        </td>
        <td>
          <Button clickHandler={calculate}type="mod"/>
        </td>
      </tr>
      <tr>
          <td>
            <Button clickHandler={calculate}type="("/>
          </td>
          <td>
            <Button clickHandler={calculate}type=")"/>
          </td>
          <td>
            <Button clickHandler={calculate}type="n!"/>
          </td>
          <td>
            <Button clickHandler={calculate}type="/"/>
          </td>
        </tr>
        <tr>
          <td>
            <Button clickHandler={calculate}type="7"/>
          </td>
          <td>
            <Button clickHandler={calculate}type="8"/>
          </td>
          <td>
            <Button clickHandler={calculate}type="9"/>
          </td>
          <td>
            <Button clickHandler={calculate}type="x"/>
          </td>
        </tr>
        <tr>
          <td>
            <Button clickHandler={calculate}type="4"/>
          </td>
          <td>
            <Button clickHandler={calculate}type="5"/>
          </td>
          <td>
            <Button clickHandler={calculate}type="6"/>
          </td>
          <td>
            <Button clickHandler={calculate}type="-"/>
          </td>
        </tr>
        <tr>
          <td>
            <Button clickHandler={calculate}type="1"/>
          </td>
          <td>
            <Button clickHandler={calculate}type="2"/>
          </td>
          <td>
            <Button clickHandler={calculate}type="3"/>
          </td>
          <td>
            <Button clickHandler={calculate}type="+"/>
          </td>
        </tr>
        <tr>
          <td>
          </td>
          <td>
            <Button clickHandler={calculate}type="0"/>
          </td>
          <td>
            <Button clickHandler={calculate}type="."/>
          </td>
          <td>
            <Button clickHandler={calculate}type="="/>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default App;
