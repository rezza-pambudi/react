import React from "react";
import Perkenalan from "./components/Perkenalan";

// const Button = (props) => {
//     return <button>{props.title}</button>;
// };

const App = () => {
  return (
    <div>
      {/* <Button title="Click me" /> */}
      <Perkenalan name="Aldi" age="20" hobby="membaca" />
      <Perkenalan name="Rezza" age="30" hobby="tidur" />
    </div>
  );
};

export default App;
