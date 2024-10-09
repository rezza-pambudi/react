import React from "react";
import Perkenalan from "./components/Perkenalan";

// const Button = (props) => {
//     return <button>{props.title}</button>;
// };

const App = () => {
    const datas = [
        {name: "Aldi", age: 20, hobby: "membaca"},
        {name: "Rezza", age: 30, hobby: "tidur"},
        {name: "David", age: 20, hobby: "menulis"},
        {name: "Lia", age: 20, hobby: "mengoding"},
    ]
  return (
    <div>
      {/* <Button title="Click me" /> */}
      {/* <Perkenalan name="Aldi" age="20" hobby="membaca" />
      <Perkenalan name="Rezza" age="30" hobby="tidur" /> */}
      {datas.map((data, index) => {
        return <Perkenalan key={index} name={data.name} age={data.age} hobby={data.hobby} />
      })}
    </div>
  );
};

export default App;
