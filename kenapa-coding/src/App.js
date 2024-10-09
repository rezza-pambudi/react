import React from "react";
import { useState } from "react";

// const Button = (props) => {
//     return <button>{props.title}</button>;
// };

const App = () => {
const [counter, setCounter] = useState(0);
const decrementCounter = () => {
    setCounter(counter - 1);
}
const incrementCounter = () => {
    setCounter(counter + 1);    
};
// let info;
// if (counter % 2 === 0) {
//     info = 'genap';
// } else {
//     info = 'ganjil';
// }
    return (
        <>
        <button onClick={decrementCounter}>-</button>
        <div>{counter}</div>
        <button onClick={incrementCounter}>+</button>
        <div>{counter % 2 === 0 ? 'genap' : 'ganjil'}</div>
        </>
    )
};

export default App;
