import { useState, useEffect } from "react";
import useAPI from "./services/useAPI";
import { useSelector } from "react-redux";

import CurrencyInput from "./components/currencyInput/CurrencyInput";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  const { getData } = useAPI();
  const fetchedCurrencies = useSelector((state) => state);

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(fetchedCurrencies).length <= 1) {
      getData(setLoading, setRates, handleChange);
    } else {
      setRates(fetchedCurrencies);
    }
  }, []);

  // Validation
  function format(number) {
    return number.toFixed(2);
  }

  // Inputs logic
  function handleChange(inputNumber, data, operation = "currency") {
    if (inputNumber === "1") {
      if (operation === "amount") {
        setAmount2(format((data * rates[currency2]) / rates[currency1]));
        setAmount1(data);
      } else {
        setAmount2(format((amount1 * rates[currency2]) / rates[data]));
        setCurrency1(data);
      }
    } else {
      if (operation === "amount") {
        setAmount1(format((data * rates[currency1]) / rates[currency2]));
        setAmount2(data);
      } else {
        setAmount1(format((amount2 * rates[currency1]) / rates[data]));
        setCurrency2(data);
      }
    }
  }

  return (
    <div>
      <Header toUSD={rates.UAH} toEUR={rates.UAH / rates.EUR} format={format} />
      <h1>Currency Converter</h1>
      <CurrencyInput
        id={"1"}
        onHandleChange={handleChange}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
      />
      <CurrencyInput
        id={"2"}
        onHandleChange={handleChange}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
      />

      {loading ? (
        <div className="status">
          <h2>Loading...</h2>
        </div>
      ) : null}
    </div>
  );
}

export default App;
