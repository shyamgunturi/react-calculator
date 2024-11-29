import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");  // State to store input

  // Function to handle input when a button is clicked
  const handleClick = (value) => {
    setInput(input + value);  // Append the clicked value to the input
  };

  // Function to handle the calculation
  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // Function to clear the input
  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          <button onClick={() => clearInput()} className="span-2 clear">
            C
          </button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("*")}>*</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>

          <button onClick={() => handleClick("0")} className="span-2">
            0
          </button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => calculateResult()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

