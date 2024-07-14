import { createContext, useEffect, useState } from "react";
import { api } from "./api";
import { Alert } from "react-native";

export const ConversionContext = createContext();

export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, _setBaseCurrency] = useState("USD");
  const [quoteCurrency, setQuoteCurrency] = useState("ILS");
  const [date, setDate] = useState();
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const swapCurrency = () => {
    _setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  const setBaseCurrency = (currency) => {
    setIsLoading(true);
    api(`/latest?base=${baseCurrency}`)
      .then((responce) => {
        console.log(responce);
        _setBaseCurrency(currency);
        setDate(responce.date);
        setRates(responce.rates);
        setIsLoading(false);
      })
      .catch((error) => {
        Alert.alert("Sorry, something went wrong.", error.message);
        setIsLoading(false);
      });
  };

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    swapCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    date,
    rates,
    isLoading,
  };
  useEffect(() => {
    setBaseCurrency("USD");
  }, []);
  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};

// ConversionContext.Provider
// ConversionContext.Consumer
