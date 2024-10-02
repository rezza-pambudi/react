import React from "react";
import ReactDOM from "react-dom/client";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

const App = () => {
    const name = 'Pavelo';
    const age = 30;
    return (
        <div>
            <h1>Hello, {name}</h1>
            <p>Age: {age}</p>
        </div>
    )
};

root.render(<App />);