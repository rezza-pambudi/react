import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
const [nama, setNama] = useState('');
const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nama);
}
const handleChange = (event) => {
    setNama(event.target.value);
}

    return (
        <>
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="input">Enter your name</label>
            <input type="text" onChange={handleChange} value={nama} />
        </form>
        </>
    )
};

export default App;
