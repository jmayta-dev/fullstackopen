import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button
        onClick={() => {
          setGood(good + 1);
        }}
      >
        good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
        }}
      >
        neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
        }}
      >
        bad
      </button>

      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);