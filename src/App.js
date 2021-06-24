import "./App.css";
import { useState } from "react";

function App() {
  let color = ["red", "green", "yellow", "blue"];
  let [bg, setBG] = useState("#282c34");
  let [count, setCount] = useState(0);
  let onClickListener = () => {
    if (count === (color.length-1)) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    setBG(color[count]);
    
  };
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: `${bg}` }}>
        <button onClick={onClickListener}>Change the background color</button>
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
      </header>
    </div>
  );
}

export default App;
