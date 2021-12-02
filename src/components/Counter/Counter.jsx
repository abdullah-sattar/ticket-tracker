import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        if (counter === 0) {
            setCounter(0)
        } else {
            setCounter(counter - 1);
        }

    }

    return (<div className="container">
        <h4>Counter</h4>
        <div className="counter">
            <button className="counter__btn" onClick={handleDecrement}>-</button>
            <p className="counter__number">{counter}</p>
            <button className="counter__btn" onClick={handleIncrement}>+</button>
        </div>
    </div>)
}

export default Counter;