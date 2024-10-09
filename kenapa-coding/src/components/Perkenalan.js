import React from "react";

const Perkenalan = (props) => {
    const handleClick = (name) => {
    //   alert("Woiiiii");
    console.log("Woiiiii" + name);
    }
    return (
      <>
        <div>Nama saya {props.name}</div>
        <div>Umur saya {props.age}</div>
        <div>Hobby saya {props.hobby}</div>
        <button onClick={() => handleClick(props.name)}>Klik disini</button>
      </>
    );
  };

  export default Perkenalan;