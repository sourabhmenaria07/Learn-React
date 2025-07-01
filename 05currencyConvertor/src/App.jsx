import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const BackgroundImage =
    "https://media.istockphoto.com/id/1503371245/photo/percentage-sign-on-top-of-coin-stacks-before-blue-financial-graph.jpg?b=1&s=612x612&w=0&k=20&c=7A_2QwhEcxkciMxlpLL22UXAUbEIUE2nrdVTrWgsrbM=";

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover overflow-x-hidden"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className=" transform scale-125 origin-top">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label={"from"}
                amount={amount}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                onAmountChange={(value) => {
                  setAmount(value);
                }}
                selectCurrency={from}
                currencyOptions={options}
              />
            </div>
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-2 py-0.5 rounded-md border-2 border-white "
              onClick={swap}
            >
              swap
            </button>
            <div className="w-full mb-4">
              <InputBox
                label={"to"}
                amount={convertedAmount}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={to}
                currencyOptions={options}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-3 rounded-lg "
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
