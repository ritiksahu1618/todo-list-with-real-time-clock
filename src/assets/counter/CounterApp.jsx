import { useState } from "react";
import "./CounterApp.css";  // CSS import

function CounterApp() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [warning, setWarning] = useState("");

  const countInc = () => {
    if (count >= 20) {
      setError("❌ You cannot increase count more than 20!");
      setWarning("");
    } else {
      setCount(count + 1);
      setError("");
      if (count >= 15) {
        setWarning("⚠️ You are close to the max limit (20).");
      } else {
        setWarning("");
      }
    }
  };

  const countDec = () => {
    if (count === 0) {
      setError("❌ Count cannot be negative!");
      setWarning("");
    } else {
      setCount(count - 1);
      setError("");
      setWarning("");
    }
  };

  const resetCount = () => {
    setCount(0);
    setError("");
    setWarning("");
  };

  return (
    <div className="app">
      <div className="counter-box">
        <h1>⚡ React Counter App</h1>
        <h2>Counter: {count}</h2>
        <div className="btn-group">
          <button className="btn increase" onClick={countInc}>Increase</button>
          <button className="btn decrease" onClick={countDec}>Decrease</button>
          <button className="btn reset" onClick={resetCount}>Reset</button>
        </div>

        {error && <p className="error">{error}</p>}
        {warning && <p className="warning">{warning}</p>}
      </div>
    </div>
  );
}

export default CounterApp;
