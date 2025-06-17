import { useState } from "react";
import "./app.css";

function App() {
  const [color, setColor] = useState("Pink");
  const allColors = ["Green", "Red", "Yellow", "Black", "Orange", "White"];

  const lightColors = ["White", "Yellow"];

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 flex flex-wrap justify-center inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-4 py-2 rounded-3xl shadow-lg">
          {allColors.map((currColour) => {
            const textColour = lightColors.includes(currColour)
              ? "text-black"
              : "text-white";
            return (
              <button
                onClick={() => setColor(currColour)}
                className={`outline-none px-3 py-1 rounded-full shadow-xl ${textColour}`}
                style={{ backgroundColor: currColour }}
              >
                {currColour}
              </button>
            );
          })}
          {/* <button
            onClick={() => setColor("Green")}
            className="outline-none text-white px-3 py-1 rounded-full shadow-xl "
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("Olive")}
            className="outline-none text-white px-3 py-1 rounded-full shadow-xl "
            style={{ backgroundColor: "Olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("White")}
            className="outline-none px-3 py-1 rounded-full shadow-xl "
            style={{ backgroundColor: "White" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none text-white px-3 py-1 rounded-full shadow-xl "
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("red")}
            className="outline-none text-white px-3 py-1 rounded-full shadow-xl "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("violet")}
            className="outline-none text-white px-3 py-1 rounded-full shadow-xl "
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
          <button
            onClick={() => setColor("Yellow")}
            className="outline-none px-3 py-1 rounded-full shadow-xl "
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("Orange")}
            className="outline-none text-white px-3 py-1 rounded-full shadow-xl "
            style={{ backgroundColor: "Orange" }}
          >
            Orange
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
