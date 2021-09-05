import Display from './components/Display';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Display/>
      <table className="calculator">
      <tr>
        <td>
          <Button type="π"/>
        </td>
        <td>
          <Button type="e"/>
        </td>
        <td>
          <Button type="c"/>
        </td>
        <td>
          <Button type="del"/>
        </td>
      </tr>
      <tr>
        <td>
          <Button type="1/x"/>
        </td>
        <td>
          <Button type="|x|"/>
        </td>
        <td>
          <Button type="exp"/>
        </td>
        <td>
          <Button type="mod"/>
        </td>
      </tr>
      <tr>
          <td>
            <Button type="("/>
          </td>
          <td>
            <Button type=")"/>
          </td>
          <td>
            <Button type="n!"/>
          </td>
          <td>
            <Button type="/"/>
          </td>
        </tr>
        <tr>
          <td>
            <Button type="7"/>
          </td>
          <td>
            <Button type="8"/>
          </td>
          <td>
            <Button type="9"/>
          </td>
          <td>
            <Button type="x"/>
          </td>
        </tr>
        <tr>
          <td>
            <Button type="4"/>
          </td>
          <td>
            <Button type="5"/>
          </td>
          <td>
            <Button type="6"/>
          </td>
          <td>
            <Button type="-"/>
          </td>
        </tr>
        <tr>
          <td>
            <Button type="1"/>
          </td>
          <td>
            <Button type="2"/>
          </td>
          <td>
            <Button type="3"/>
          </td>
          <td>
            <Button type="+"/>
          </td>
        </tr>
        <tr>
          <td>
          </td>
          <td>
            <Button type="0"/>
          </td>
          <td>
            <Button type="."/>
          </td>
          <td>
            <Button type="="/>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default App;
