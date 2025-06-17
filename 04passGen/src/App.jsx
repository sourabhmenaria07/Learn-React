import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isNum, setIsNum] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNum) str += "0123456789";
    if (isChar) str += "!@#$%&*^-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNum, isChar]);

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 25);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGen();
  }, [length, isNum, isChar, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto my-8 text-orange-500 bg-gray-800 shadow-md rounded-lg py-3 px-4">
        <h1 className="text-white text-center my-3 text-lg">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none w-full py-2 px-3 bg-amber-50 text-black "
            readOnly
            ref={passRef}
          ></input>
          <button
            className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 active:scale-95 active:bg-blue-600 transition-transform duration-100 rounded"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNum}
              id="numberInput"
              onChange={() => {
                setIsNum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isChar}
              id="characterInput"
              onChange={() => {
                setIsChar((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
        <div>
          <button
            className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 my-4 w-full"
            onClick={passwordGen}
          >
            Generate New
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
