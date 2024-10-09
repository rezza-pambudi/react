import React from "react";

const Perkenalan = (props) => {
    return (
      <>
        <div>Nama saya {props.name}</div>
        <div>Umur saya {props.age}</div>
        <div>Hobby saya {props.hobby}</div>
      </>
    );
  };

  export default Perkenalan;