import { createContext, useState } from "react";

export const ConversionContext = createContext();

export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [quoteCurrency, setQuoteCurrency] = useState("ILS");
  const swapCurrency = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };
  const contextValue = {
    baseCurrency,
    quoteCurrency,
    swapCurrency,
    setBaseCurrency,
    setQuoteCurrency,
  };
  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};

// ConversionContext.Provider
// ConversionContext.Consumer
