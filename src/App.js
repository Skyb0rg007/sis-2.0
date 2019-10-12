import React, {useState, useContext, createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Theme from './contexts/test'

const App = ({props}) => {
  const [count, setCount] = useState(0);
  const theme = useContext(Theme); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() => setCount(count + 1)}
        >
          Click Me!
        </button>
        Clicks: {count}
      </header>
     </div>
  );
}

export default App
