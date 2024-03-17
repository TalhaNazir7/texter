// import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "./App.css";
import TextForm from "./components/TextForm";


function App() {
const [mode] = useOutletContext();
  return (
    <>
      <div className="container my-3">
        <TextForm heading="Enter the text below" mode={mode} />
      </div>
    </>
  );
}

export default App;
