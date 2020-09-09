import React, { createContext, useReducer, useContext } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ reducer, initialSearch, children }) => (
  <SearchContext.Provider value={useReducer(reducer, initialSearch)}>
    {children}
  </SearchContext.Provider>
);

export const useSearch = () => useContext(SearchContext);
