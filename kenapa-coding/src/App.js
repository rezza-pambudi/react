import React from "react";
import "./App.css";
import { useState } from "react";
import CreateForm from "./components/CreateForm";

const App = () => {
  const [nama, setNama] = useState("");
  const onCreate = (data) => {
    console.log("ini console dari parent component", data);
    setNama(data,nama);
  };

  return (
    <>
    <CreateForm onCreate={onCreate} />
    </>
  )
};

export default App;
