import React, { useState, useEffect } from "react";

interface CounterProps {
    count: number;
}

const Counter = (props: CounterProps) => {
    let [count, setCount] = useState(props.count);
    let [change, setChange] = useState(false);

    // use effect when count is mounted
    useEffect(() => {
        try {
            const stringCount = localStorage.getItem("count");
            if (stringCount) {
                const count = parseInt(stringCount, 10);
                setCount(count);
            }
        } catch (error) {
            console.log("Error: " + error);
        }
    }, []);

    // use effect when updating count
    useEffect(() => {
        if (change) {
            const json = JSON.stringify(count);
            localStorage.setItem("count", json);
        } else {
            setChange(true);
        }
    }, [change, count]);

    const handleReset = () => {
        setCount(props.count);
    };

    const handleAddOne = () => {
        setCount(++count);
    };

    const handleMinusOne = () => {
        setCount(--count);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleAddOne}>+1</button>
            <button onClick={handleMinusOne}>-1</button>
            <button onClick={handleReset}>reset</button>
        </div>
    );
};

Counter.defaultProps = {
    count: 0
} as Partial<CounterProps>;

export default Counter;
