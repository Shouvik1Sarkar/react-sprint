import { useState } from "react";

function App() {
  const [counter, stateCounter] = useState(0);

  function increase() {
    stateCounter(counter + 1);
  }
  function decrease() {
    stateCounter(counter - 1);
  }

  return (
    <>
      <div className="counter-container">
        <div className="counter-card">
          <h1 className="box">{counter}</h1>

          <div className="buttons">
            <button onClick={decrease} className="decrease">
              Decrease
            </button>
            <button onClick={increase} className="increase">
              Increase
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
