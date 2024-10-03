import React from "react";

// const Button = (props) => {
//     return <button>{props.title}</button>;
// };

const Perkenalan = (props) => {
    return <p>Nama saya {props.name} dan umur saya {props.age} serta hobby saya {props.hobby}</p>;
};

const App = () => {
    return(
       <div>
           {/* <Button title="Click me" /> */}
           <Perkenalan name="Aldi" age="20" hobby="membaca" />
           <Perkenalan name="Rezza" age="30" hobby="tidur" />
       </div>
    );  
};

export default App;