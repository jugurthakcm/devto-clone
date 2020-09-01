import React, { createContext, useReducer, useContext } from 'react';

export const PageContext = createContext();

export const PageProvider = ({ reducer, initialPage, children }) => (
  <PageContext.Provider value={useReducer(reducer, initialPage)}>
    {children}
  </PageContext.Provider>
);

export const usePage = () => useContext(PageContext);
