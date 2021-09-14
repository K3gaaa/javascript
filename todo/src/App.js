import logo from './logo.svg';
import './App.css';

const day=2;
const dayOfWeek='Tuesday';
const currentYear=2021;
const yearOfBirth=1986;
let flag=false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{textAlign: 'left'}}>
            <p style={{
                fontFamily: 'Arial',
                fontSize: '20px',
                color: 'rgb(105, 198, 226)'
            }}>добавление в разметку объекта style;</p>
            <p>вывод значения переменной: {dayOfWeek};</p>
            <p>вывод числа: {2};</p>
            <p>вывода результата арифметической операции: {currentYear - yearOfBirth};</p>
            <p>вывода результата логической операции: {day && 'два'};</p>
            <p>использования тернарного условия:  {flag ? 'Flag is true' : 'Flag is false'};</p>
            <p>вывода undefined, null, false и true:</p>
            <ul>
                <li>undefined = {undefined}</li>
                <li>null = {null}</li>
                <li>false = {false}</li>
                <li>true = {true}</li>
            </ul>

        </div>

<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;