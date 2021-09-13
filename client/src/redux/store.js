import { configureStore } from '@reduxjs/toolkit';
import stocksReducer from './stocks/stocks-reducer';

export const store = configureStore({
  reducer: {
    stocks: stocksReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
