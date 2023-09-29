import React from "react";
import './Counter.css';

function Counter() {
    const [count, setCount] = React.useState(0);

    const onIncrese = () => {
        setCount(count + 1);
    }

    const onDecrese = () => {
        setCount(count - 1);
    }

  return (
    <section className="counter">
      <h2 className="counter__title">Счётчик</h2>
      <p className="counter__count">{count}</p>
      <div className="counter__buttons-container">
        <button className="counter__minus" onClick={onDecrese}>- Минус</button>
        <button className="counter__plus" onClick={onIncrese}>+ Плюс</button>
      </div>
    </section>
  );
}

export default Counter;
