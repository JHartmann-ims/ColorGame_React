import React, { useState, useEffect } from "react";
import logo from "../assets/amongus.png";

const ColorGame = () => {
  const [numSquares, setNumSquares] = useState(6);
  const [colors, setColors] = useState([]);
  const [pickedColor, setPickedColor] = useState("");
  const [squares, setSquares] = useState([]);
  const [message, setMessage] = useState("Hello there!");

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
      setMessage("Correct!");
      changeColors(pickedColor);
    } else {
      setMessage("Try again!");
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
    <div className="text-center h-screen sm:h-">
      <div className="py-10 bg-neutral border-b-2 border-primary shadow-lg 2xl:block hidden">
        <h1 className="text-primary text-7xl font-bold uppercase">Twäwis</h1>
      </div>
      <h1 className="text-white 2xl:hidden md:text-6xl block bg-primary text-3xl uppercase py-2">
        The Color
        <span id="color-display" className="block text-4xl">
          {pickedColor}
        </span>
        Guessing Game
      </h1>
      <div
        id="stripe"
        className="bg-white h-8 text-center text-black 2xl:hidden block"
      >
        <button
          id="reset"
          className="outline-none text-color-game font-Raleway uppercase text-sm md:text-2xl bg-white h-full mx-1 transition-all hover:bg-primary hover:text-white px-2"
          onClick={reset}
        >
          New Colors
        </button>
        <span
          id="message"
          className="uppercase text-color-game text-sm md:text-2xl inline-block w-1/5"
        >
          {message}
        </span>
        <button
          className={`mode outline-none font-Raleway uppercase text-sm md:text-2xl h-full px-2 transition-all ${
            numSquares === 3
              ? "text-white bg-primary"
              : "text-color-game bg-white hover:bg-primary hover:text-white"
          }`}
          onClick={() => setNumSquares(3)}
        >
          Easy
        </button>
        <button
          className={`mode outline-none font-Raleway uppercase text-sm md:text-2xl h-full px-2 transition-all ${
            numSquares === 6
              ? "text-white bg-primary"
              : "text-color-game bg-white hover:bg-primary hover:text-white"
          }`}
          onClick={() => setNumSquares(6)}
        >
          Hard
        </button>
      </div>

      <div className="flex justify-center w-full">
        <div className="w-full max-w-[1600px] 2xl:grid gap-2 grid-cols-2 grid-rows-1 p-5 pt-7">
          <div className="float-right text-left 2xl:block hidden">
            <div className="p-2 border-2 rounded-lg text-center">
              <h1 className="uppercase text-5xl">The Color Guessing Game</h1>
            </div>
            <div className="pt-5 inline-flex items-center">
              <div className="inline-flex items-center pr-5">
                <img src={logo} className="h-24 mx-5" />
                <div>
                  <h3 className="font-bold text-2xl">{message}</h3>
                  <p>Look at the given RGB and guess the color!</p>
                </div>
              </div>
              <div className="pl-5 border-l-2">
                <p className="uppercase text-3xl">{pickedColor}</p>
              </div>
            </div>
            <div className="inline-flex justify-between items-center pt-2 w-full">
              <button className="btn w-[40%]" onClick={reset}>
                new colors
              </button>
              <div className="btn-group btn-group-horizontal">
                <button
                  className={`btn ${numSquares === 3 ? "btn-active" : "btn"}`}
                  onClick={() => setNumSquares(3)}
                >
                  Easy
                </button>
                <button
                  className={`btn ${numSquares === 6 ? "btn-active" : "btn"}`}
                  onClick={() => setNumSquares(6)}
                >
                  Hard
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div
              id="container"
              className="max-w-[1200px] mx-auto flex justify-center flex-wrap"
            >
              {squares.map((color, index) => (
                <div
                  key={index}
                  className="square w-1/3 bg-purple h-32 pb-1/3 inline-block mx-1 my-1 transition duration-300 ease-in-out transform hover:scale-105 rounded-2xl shadow-md"
                  style={{ backgroundColor: color }}
                  onClick={() => handleSquareClick(color)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorGame;
