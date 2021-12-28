import React, { useState } from 'react';
import './app.css';

const App = () => {
  const [count, setCount] = useState(0);

  const onPlusClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  const onMinusClick = () => {
    if (count > 0) setCount(prevCount => prevCount - 1);
  };

  const onResetClick = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter</h1>

      <section className="counter-box">
        <button
          type="button"
          className="decrease-btn"
          title="decrease count"
          onClick={onMinusClick}
        >
          -
        </button>

        <div className="count-box">
          <h2>{count}</h2>
        </div>

        <button
          type="button"
          className="increase-btn"
          title="increase count"
          onClick={onPlusClick}
        >
          +
        </button>
      </section>

      <button
        type="button"
        className="reset-btn"
        title="reset count"
        onClick={onResetClick}
      >
        Reset
      </button>
    </>
  );
};

export default App;
