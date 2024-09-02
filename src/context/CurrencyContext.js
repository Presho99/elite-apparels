// src/context/CurrencyContext.js
import React, { createContext, useState, useContext } from 'react';

const CurrencyContext = createContext();

export function useCurrency() {
  return useContext(CurrencyContext);
}

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('USD'); // Default currency

  const value = {
    currency,
    setCurrency,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}
