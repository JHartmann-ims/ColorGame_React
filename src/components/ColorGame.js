import React, { useState, useEffect } from "react";

const ColorGame = () => {
  const [numSquares, setNumSquares] = useState(6);
  const [colors, setColors] = useState([]);
  const [pickedColor, setPickedColor] = useState("");
  const [squares, setSquares] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    init();
  }, [numSquares]);

  const init = () => {
    const newColors = genRandomColors(numSquares);
    setColors(newColors);
    const color = chooseColor(newColors);
    setPickedColor(color);
    setSquares(newColors);
  };

  const reset = () => {
    init();
    setMessage("");
  };

  const handleSquareClick = (clickedColor) => {
    if (clickedColor === pickedColor) {
      setMessage("Correct");
      changeColors(pickedColor);
    } else {
      setMessage("Try again");
      const newSquares = squares.map((square) =>
        square === clickedColor ? "#232323" : square
      );
      setSquares(newSquares);
    }
  };

  const changeColors = (color) => {
    const newColors = colors.map(() => color);
    setColors(newColors);
    setSquares(newColors);
  };

  const chooseColor = (colorsArray) => {
    const random = Math.floor(Math.random() * colorsArray.length);
    return colorsArray[random];
  };

  const genRandomColors = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(makeColor());
    }
    return arr;
  };

  const makeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  };

  // Other functions from the given code

  return (
    <div className="text-center">
      <h1 className="text-white bg-color-game text-7xl uppercase py-2">
        The Color{" "}
        <span id="color-display" className="block text-4xl">
          {pickedColor}
        </span>{" "}
        Guessing Game
      </h1>
      <div id="stripe" className="bg-white h-8 text-center text-black">
        <button
          id="reset"
          className="outline-none text-color-game font-Raleway uppercase text-2xl bg-white h-full mx-1 transition-all hover:bg-color-game hover:text-white"
          onClick={reset}
        >
          New Colors
        </button>
        <span
          id="message"
          className="uppercase text-color-game text-2xl inline-block w-1/5"
        >
          {message}
        </span>
        <button
          className={`mode outline-none font-Raleway uppercase text-2xl h-full mx-1 transition-all ${
            numSquares === 3
              ? "text-white bg-color-game"
              : "text-color-game bg-white hover:bg-color-game hover:text-white"
          }`}
          onClick={() => setNumSquares(3)}
        >
          Easy
        </button>
        <button
          className={`mode outline-none font-Raleway uppercase text-2xl h-full mx-1 transition-all ${
            numSquares === 6
              ? "text-white bg-color-game"
              : "text-color-game bg-white hover:bg-color-game hover:text-white"
          }`}
          onClick={() => setNumSquares(6)}
        >
          Hard
        </button>
      </div>
      <div className="w-full">
        <div
          id="container"
          className="max-w-[1200px] mx-auto pt-5 flex justify-center flex-wrap"
        >
          {squares.map((color, index) => (
            <div
              key={index}
              className="square w-1/3 bg-purple h-32 pb-1/3 inline-block mx-1 my-1 transition duration-500 ease-in-out transform hover:scale-105 rounded-2xl"
              style={{ backgroundColor: color }}
              onClick={() => handleSquareClick(color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorGame;
